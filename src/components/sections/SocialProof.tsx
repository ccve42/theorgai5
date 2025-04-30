import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <div className="w-full mt-8">
      <div className="text-center">
        <p className="text-sm text-neutral-400 mb-4">Proudly Working With</p>
        <div className="flex justify-center items-center gap-8 opacity-60 hover:opacity-80 transition-opacity">
          <img src="/images/amp_logo.png" alt="Company Logo" className="h-12 w-24 object-cover rounded grayscale hover:grayscale-0 transition-all" />
        </div>
      </div>
    </div>
  );
};

export default SocialProof;