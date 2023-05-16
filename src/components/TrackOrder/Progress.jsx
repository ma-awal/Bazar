import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import './Progress.css';

const Progress = () => {
  const [completionStatus, setCompletionStatus] = useState({
    step1: true,
    step2: true,
    step3: true,
    step3: false,
  });

  const handleStepClick = (step) => {
    const newCompletionStatus = { ...completionStatus };
    newCompletionStatus[step] = true;
    setCompletionStatus(newCompletionStatus);
  };

  const calculateProgress = () => {
    const numSteps = Object.keys(completionStatus).length;
    const completedSteps = Object.values(completionStatus).filter(
      (status) => status === true
    ).length;
    return (completedSteps / numSteps) * 100;
  };

  return (
    <div className="product-tracker">
      <div className="progress-bar">
        <div
          className="progress-bar-range"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
      <div className="steps">
        <div
          className={`step ${completionStatus.step1 ? 'completed' : ''}`}
          onClick={() => handleStepClick('step1')}
        >
          <FiSettings />
        </div>
        <div
          className={`step ${completionStatus.step2 ? 'completed' : ''}`}
          onClick={() => handleStepClick('step2')}
        >
          <FiSettings />
        </div>
        <div
          className={`step ${completionStatus.step3 ? 'completed' : ''}`}
          onClick={() => handleStepClick('step3')}
        >
          <FiSettings />
        </div>
        <div
          className={`step ${completionStatus.step3 ? 'completed' : ''}`}
          onClick={() => handleStepClick('step3')}
        >
          <FiSettings />
        </div>
      </div>
    </div>
  );
};

export default Progress;
