'use client';

import { useEffect, useState } from 'react';

interface TypingEffectProps {
    texts: string[];
    typingSpeed?: number;
    erasingSpeed?: number;
    newTextDelay?: number;
}

export default function TypingEffect({
    texts,
    typingSpeed = 100,
    erasingSpeed = 100,
    newTextDelay = 50
}: TypingEffectProps) {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const type = () => {
            const currentText = texts[textIndex];

            if (!isDeleting && charIndex < currentText.length) {
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
                setTimeout(type, typingSpeed);
            } else if (isDeleting && charIndex > 0) {
                setDisplayText(currentText.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
                setTimeout(type, erasingSpeed);
            } else {
                if (!isDeleting) {
                    setIsDeleting(true);
                    setTimeout(type, newTextDelay);
                } else {
                    setIsDeleting(false);
                    setTextIndex((textIndex + 1) % texts.length);
                    setCharIndex(0);
                    setTimeout(type, typingSpeed);
                }
            }
        };

        const timer = setTimeout(type, 500);
        return () => clearTimeout(timer);
    }, [texts, textIndex, charIndex, isDeleting, typingSpeed, erasingSpeed, newTextDelay]);

    return <span id="typed-text">{displayText}</span>;
} 