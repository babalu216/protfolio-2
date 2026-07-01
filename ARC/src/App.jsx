import React, { useState, useEffect } from 'react';
import TierProgress from './components/TierProgress';
import PointCalculator from './components/PointCalculator';
import PerksUnlocker from './components/PerksUnlocker';
import { activities } from './data/activities';

function App() {
  const [userActivities, setUserActivities] = useState({});
  const [totalPoints, setTotalPoints] = useState(0);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('arc-architect-data');
    if (saved) {
      try {
        setUserActivities(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved data');
      }
    }
  }, []);

  // Calculate points whenever activities change
  useEffect(() => {
    let newTotal = 0;
    
    activities.forEach(category => {
      category.items.forEach(item => {
        const value = userActivities[item.id];
        let count = 0;
        if (Array.isArray(value)) {
          count = value.length;
        } else if (typeof value === 'number') {
          count = value;
        }
        
        newTotal += count * item.reward;
      });
    });
    
    setTotalPoints(newTotal);
    localStorage.setItem('arc-architect-data', JSON.stringify(userActivities));
  }, [userActivities]);

  const handleActivityChange = (id, value) => {
    setUserActivities(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all your progress?")) {
      setUserActivities({});
    }
  };

  return (
    <div className="container">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-gradient" style={{ fontSize: '2.5rem' }}>Arc Architect Helper</h1>
          <p className="text-muted">Track your progress and unlock community perks.</p>
        </div>
        <button onClick={handleReset} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
          Reset Progress
        </button>
      </header>

      <TierProgress currentPoints={totalPoints} />
      
      <div className="flex" style={{ gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 60%' }}>
          <h2 className="mb-4">Calculate Points</h2>
          <PointCalculator 
            userActivities={userActivities} 
            handleActivityChange={handleActivityChange} 
          />
        </div>
        
        <div style={{ flex: '1 1 35%' }}>
          <PerksUnlocker currentPoints={totalPoints} />
        </div>
      </div>
      
      <footer style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>Architects are independent Arc community participants and are not employees or agents of Circle Technology Services.</p>
      </footer>
    </div>
  );
}

export default App;
