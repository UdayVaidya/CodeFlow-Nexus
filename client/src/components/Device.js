import React from "react";

const Device = () => {
  return (
    <div className="device-warning">
      <div className="device-content">
        <div className="device-icon">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
        <h1 className="device-title">Desktop Required</h1>
        <p className="device-message">
          CodeFlow Nexus is optimized for desktop experience.
          <br />
          Please open this application on a device with a larger screen
          <br />
          for the best coding experience.
        </p>
        <div className="device-features">
          <div className="feature-item">
            <span className="feature-icon">💻</span>
            <span>Real-time Collaboration</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <span>Live Code Execution</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💬</span>
            <span>Integrated Chat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device;