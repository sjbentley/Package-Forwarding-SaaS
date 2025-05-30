
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  avatarSrc?: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  role,
  avatarSrc,
  rating
}) => {
  return (
    <div className="neo-card p-6">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-deutscher-purple-light fill-deutscher-purple-light' : 'text-gray-500'
            }`}
          />
        ))}
      </div>

      <p className="text-gray-300 mb-6">{content}</p>
      
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={avatarSrc} />
          <AvatarFallback className="bg-deutscher-purple text-white">
            {author.split(' ').map(word => word[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-white">{author}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
