"use client";

import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
    roles: string[];
    typingSpeed?: number;
    erasingSpeed?: number;
    delayBetweenRoles?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
    roles,
    typingSpeed = 80,
    erasingSpeed = 40,
    delayBetweenRoles = 1200,
}) => {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [isErasing, setIsErasing] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const fullText = roles[currentRole];

        if (!isErasing && displayed.length < fullText.length) {
            timeout = setTimeout(() => {
                setDisplayed(fullText.slice(0, displayed.length + 1));
            }, typingSpeed);
        } else if (isErasing && displayed.length > 0) {
            timeout = setTimeout(() => {
                setDisplayed(fullText.slice(0, displayed.length - 1));
            }, erasingSpeed);
        } else if (!isErasing && displayed.length === fullText.length) {
            timeout = setTimeout(() => setIsErasing(true), delayBetweenRoles);
        } else if (isErasing && displayed.length === 0) {
            setIsErasing(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }
        return () => clearTimeout(timeout);
    }, [displayed, isErasing, currentRole, roles, typingSpeed, erasingSpeed, delayBetweenRoles]);

    return (
        <span style={{ borderRight: '2px solid var(--secondary-text-light)', paddingRight: 4 }}>{displayed}</span>
    );
};

export default TypingEffect; 