import React, { useState } from 'react';
import { activities } from '../data/activities';
import './PointCalculator.css';

const PointCalculator = ({ userActivities, handleActivityChange }) => {
  const [trackedInputs, setTrackedInputs] = useState({});

  const handleTrackedInputChange = (id, val) => {
    setTrackedInputs(prev => ({ ...prev, [id]: val }));
  };

  const handleAddTracked = (id, maxPerDay) => {
    const currentList = Array.isArray(userActivities[id]) ? userActivities[id] : [];
    if (currentList.length >= maxPerDay) return;
    
    const val = trackedInputs[id] || '';
    if (!val.trim()) return;

    handleActivityChange(id, [...currentList, val.trim()]);
    setTrackedInputs(prev => ({ ...prev, [id]: '' }));
  };

  const handleRemoveTracked = (id, index) => {
    const currentList = Array.isArray(userActivities[id]) ? userActivities[id] : [];
    const newList = [...currentList];
    newList.splice(index, 1);
    handleActivityChange(id, newList);
  };

  return (
    <div className="calculator-grid">
      {activities.map((category) => (
        <div key={category.category} className="glass-card category-card">
          <h3 className="category-title">{category.category}</h3>
          <div className="activity-list">
            {category.items.map((item) => {
              
              return (
                <div key={item.id} className="activity-item-wrapper">
                  <div className="activity-item">
                    <div className="activity-info">
                      <span className="activity-name">{item.title}</span>
                      <span className="activity-reward">+{item.reward} pts</span>
                    </div>
                    
                    <div className="activity-input">
                      {item.type === 'one-time' ? (
                        <label className="checkbox-container">
                          <input 
                            type="checkbox" 
                            checked={userActivities[item.id] > 0}
                            onChange={(e) => handleActivityChange(item.id, e.target.checked ? 1 : 0)}
                          />
                          <span className="checkmark"></span>
                        </label>
                      ) : item.type === 'daily' ? (
                        <div className="number-input-group">
                          <input 
                            type="number" 
                            min="0" 
                            max={item.maxPerDay} 
                            value={userActivities[item.id] || 0}
                            onChange={(e) => {
                              const val = parseInt(e.target.value) || 0;
                              handleActivityChange(item.id, Math.min(val, item.maxPerDay));
                            }}
                          />
                          <span className="limit-text">/ {item.maxPerDay}</span>
                        </div>
                      ) : item.type === 'daily-tracked' ? (
                        <div className="tracked-stats">
                          <span className="limit-text">
                            {(userActivities[item.id] || []).length} / {item.maxPerDay}
                          </span>
                        </div>
                      ) : (
                        <input 
                          type="number" 
                          min="0" 
                          value={userActivities[item.id] || 0}
                          className="standard-number-input"
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 0;
                            handleActivityChange(item.id, val);
                          }}
                        />
                      )}
                    </div>
                  </div>
                  
                  {item.type === 'daily-tracked' && (
                    <div className="tracked-container">
                      <div className="tracked-input-group">
                        <input 
                          type="text" 
                          placeholder="Paste URL or Title here..."
                          value={trackedInputs[item.id] || ''}
                          onChange={(e) => handleTrackedInputChange(item.id, e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleAddTracked(item.id, item.maxPerDay);
                          }}
                          disabled={(userActivities[item.id] || []).length >= item.maxPerDay}
                        />
                        <button 
                          className="add-btn"
                          onClick={() => handleAddTracked(item.id, item.maxPerDay)}
                          disabled={(userActivities[item.id] || []).length >= item.maxPerDay}
                        >
                          Add
                        </button>
                      </div>
                      
                      {Array.isArray(userActivities[item.id]) && userActivities[item.id].length > 0 && (
                        <ul className="tracked-list">
                          {userActivities[item.id].map((trackedItem, idx) => (
                            <li key={idx} className="tracked-list-item">
                              <span className="tracked-text" title={trackedItem}>{trackedItem}</span>
                              <button className="remove-btn" onClick={() => handleRemoveTracked(item.id, idx)}>×</button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PointCalculator;
