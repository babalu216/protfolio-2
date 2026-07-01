import React from 'react';
import { tiers } from '../data/tiers';
import './TierProgress.css';

const TierProgress = ({ currentPoints }) => {
  // Find current tier
  let currentTier = tiers[0];
  let nextTier = tiers[1];
  
  for (let i = 0; i < tiers.length; i++) {
    if (currentPoints >= tiers[i].minPoints) {
      currentTier = tiers[i];
      nextTier = tiers[i + 1] || null;
    }
  }

  const progressPercentage = nextTier 
    ? Math.min(100, Math.max(0, ((currentPoints - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)) * 100))
    : 100;

  return (
    <div className="glass-card mb-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-gradient" style={{ fontSize: '2rem', margin: 0 }}>{currentTier.name}</h2>
          <p className="text-muted">{currentPoints.toLocaleString()} Points</p>
        </div>
        {nextTier && (
          <div style={{ textAlign: 'right' }}>
            <p className="text-muted" style={{ fontSize: '0.875rem' }}>Next: {nextTier.name}</p>
            <p style={{ fontWeight: '600' }}>
              {(nextTier.minPoints - currentPoints).toLocaleString()} pts to go
            </p>
          </div>
        )}
      </div>
      
      <div className="progress-track">
        <div 
          className="progress-fill" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TierProgress;
