import React from 'react';
import { tiers } from '../data/tiers';
import './PerksUnlocker.css';

const PerksUnlocker = ({ currentPoints }) => {
  // Find current tier
  let currentTierIndex = 0;
  for (let i = 0; i < tiers.length; i++) {
    if (currentPoints >= tiers[i].minPoints) {
      currentTierIndex = i;
    }
  }

  return (
    <div className="perks-container glass-card">
      <h2 className="mb-4">Unlocked Perks & Roles</h2>
      
      <div className="timeline">
        {tiers.map((tier, index) => {
          if (index === 0) return null; // Skip Tier 0
          
          const isUnlocked = index <= currentTierIndex;
          const isNext = index === currentTierIndex + 1;
          
          return (
            <div 
              key={tier.level} 
              className={`timeline-item ${isUnlocked ? 'unlocked' : ''} ${isNext ? 'next' : ''}`}
            >
              <div className="timeline-marker">
                {isUnlocked ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <span>T{tier.level}</span>
                )}
              </div>
              <div className="timeline-content">
                <h4>{tier.name} <span className="points-req">({tier.minPoints.toLocaleString()} pts)</span></h4>
                <ul className="perks-list">
                  {tier.benefits.map((benefit, bIndex) => {
                    // Don't show "All Tier X benefits" in the list as it's redundant visually
                    if (benefit.startsWith("All Tier")) return null;
                    return <li key={bIndex}>{benefit}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PerksUnlocker;
