"use client"
import React, { useState } from 'react';
import Step1  from './Step1';
import Step2  from './Step2';

function Profile() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');

  const onNextStep = () => {
    setStep(step + 1);
  };

  const onPrevStep = () => {
    setStep(step - 1);
  };




  return (
    <div className="p-4  flex flex-col justify-center items-center mt-8">
      {step === 1 && <Step1 onNextStep={onNextStep} name={name} />}
      {step === 2 && (
        <Step2 onPrevStep={onPrevStep}/>
      )}
    </div>
  );
}

export default Profile;
