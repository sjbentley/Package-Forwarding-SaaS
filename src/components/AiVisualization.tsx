
import React, { useEffect, useRef } from 'react';

const AiVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Parameters for network
    const nodes: { x: number, y: number, vx: number, vy: number, radius: number }[] = [];
    const numNodes = 40;
    const connectionDistance = 150;
    
    // Create nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(155, 135, 245, 0.6)';
        ctx.fill();
        
        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i === j) return;
          
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(155, 135, 245, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Resize handler
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 opacity-30"
      aria-hidden="true"
    />
  );
};

export default AiVisualization;
