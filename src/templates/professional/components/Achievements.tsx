import React from 'react';

interface AchievementsProps {
  achievements: string; // The achievements are passed as a single HTML string
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  // Parse the HTML string and convert it into an array of items
  const parseAchievements = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(achievements, 'text/html');
    // Extract all <li> elements and map them to text content
    return Array.from(doc.querySelectorAll('li')).map((li) => li.textContent || '');
  };

  const parsedAchievements = parseAchievements();

  return (
    <div>
      {parsedAchievements.map((achievement, index) => (
        <div key={index}>{achievement}</div>
      ))}
    </div>
  );
};

export default Achievements;
