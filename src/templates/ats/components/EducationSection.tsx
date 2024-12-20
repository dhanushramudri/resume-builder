import React from 'react';
import { SectionHeading } from '../atoms/SectionHeading';

interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  startDate: string;
  endDate: string;
}

export const EducationSection: React.FC<{ education: EducationItem[] }> = ({ education }) => (
  <div>
    <SectionHeading title="Education" />
    {education.map((item, index) => (
      <div key={index} className="mb-2">
        <p className="text-md font-medium">{`${item.degree} in ${item.field}`}</p>
        <p className="text-sm text-gray-600">{item.institution}</p>
        <p className="text-xs text-gray-500">{`${item.startDate} - ${item.endDate}`}</p>
      </div>
    ))}
  </div>
);
