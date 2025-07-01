import React from "react";
import Image from "next/image";

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  targetAudience: string;
  level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  description,
  duration,
  price,
  targetAudience,
  level,
}) => {
  const getCardGradient = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'feature-card-blue';
      case 'intermediate':
        return 'feature-card-purple';
      case 'advanced':
        return 'feature-card-orange';
      default:
        return 'feature-card-green';
    }
  };

  return (
    <div className={`modern-card overflow-hidden ${getCardGradient(level)}`}>
      <div className="aspect-[4/3] overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-[#1a1a1a] leading-tight">{title}</h3>
          <div className="text-2xl font-bold text-[#6366f1]">${price}</div>
        </div>
        <p className="text-[#64748b] mb-4 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="badge badge-blue">{duration}</span>
          <span className="badge badge-purple">{level}</span>
          <span className="badge badge-green">{targetAudience}</span>
        </div>
        <button className="modern-button w-full text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CourseCard; 