
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden sm:flex items-center gap-2 text-gray-400">
      <div className="flex items-center gap-1.5">
        <Calendar className="h-4 w-4" />
        <span className="text-sm font-medium">
          {format(currentDateTime, 'dd MMMM, yyyy')}
        </span>
      </div>
      <div className="w-px h-4 bg-gray-600" />
      <div className="flex items-center gap-1.5">
        <Clock className="h-4 w-4" />
        <span className="text-sm font-medium">
          {format(currentDateTime, 'HH:mm:ss')}
        </span>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
