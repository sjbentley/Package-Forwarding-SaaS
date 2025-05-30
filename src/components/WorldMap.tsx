
import React, { useEffect, useRef } from 'react';

const WorldMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        drawMap();
      }
    };

    const drawMap = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw a dotted world map representation
      const dotRadius = 1;
      const spacing = 15; // Space between dots
      const mapWidth = canvas.width * 0.8;
      const mapHeight = canvas.height * 0.8;
      const offsetX = (canvas.width - mapWidth) / 2;
      const offsetY = (canvas.height - mapHeight) / 2;

      // Draw grid of dots
      for (let x = 0; x < mapWidth; x += spacing) {
        for (let y = 0; y < mapHeight; y += spacing) {
          // Create a map-like pattern
          const distFromCenter = Math.abs(y - mapHeight / 2) / (mapHeight / 2);
          const rowWidth = mapWidth * Math.cos(distFromCenter * Math.PI / 2);
          
          if (Math.abs(x - mapWidth / 2) < rowWidth / 2) {
            // Add some randomness to make it look more natural
            if (Math.random() > 0.2) {
              // Highlight some dots in green (like shipping hubs)
              const isHighlight = Math.random() > 0.97;
              
              ctx.beginPath();
              ctx.arc(
                offsetX + x, 
                offsetY + y, 
                isHighlight ? dotRadius * 2 : dotRadius, 
                0, 
                2 * Math.PI
              );
              ctx.fillStyle = isHighlight ? '#9b87f5' : '#999';
              ctx.fill();
              
              // Add a glow effect to highlighted dots
              if (isHighlight) {
                ctx.beginPath();
                ctx.arc(offsetX + x, offsetY + y, dotRadius * 5, 0, 2 * Math.PI);
                const gradient = ctx.createRadialGradient(
                  offsetX + x, offsetY + y, dotRadius,
                  offsetX + x, offsetY + y, dotRadius * 5
                );
                gradient.addColorStop(0, 'rgba(155, 135, 245, 0.5)');
                gradient.addColorStop(1, 'rgba(155, 135, 245, 0)');
                ctx.fillStyle = gradient;
                ctx.fill();
              }
            }
          }
        }
      }
    };

    // Initial setup
    resizeCanvas();
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Animation loop
    let animationFrame: number;
    const animate = () => {
      drawMap();
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default WorldMap;
