import React, { useState } from 'react'
import Background from '../../components/Background'
import Introdution from '../../components/Introdution'
import VerifyEmail from '../../components/VerifyEmail'

const steps = {
    1: Introdution,
    2: Background,
    3: VerifyEmail
};

const Register = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    const onNext = () => {
        setStep(step + 1);
    }
    return (
        <div>
            <Step onNext={onNext} />
        </div>
    );
}

export default Register