import React from "react";

interface CoachProfileProps {
  bio: string;
  certifications: string[];
  achievements: { year: number; title: string }[];
}

const CoachProfile: React.FC<CoachProfileProps> = ({ bio, certifications, achievements }) => {
  return (
    <div className="modern-card p-8">
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl text-white">👨‍🏫</span>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">Meet Our Coach</h2>
        <p className="text-[#64748b] text-lg leading-relaxed max-w-2xl mx-auto">{bio}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#1a1a1a] flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            </span>
            Certifications
          </h3>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-[#1a1a1a] font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#1a1a1a] flex items-center gap-2">
            <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            </span>
            Achievements
          </h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <span className="font-bold text-[#1a1a1a] text-sm">{achievement.year}</span>
                  <p className="text-[#64748b] font-medium">{achievement.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachProfile; 