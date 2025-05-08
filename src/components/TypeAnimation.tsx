import React, { useState, useEffect } from 'react';

interface TypeAnimationProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function TypeAnimation({ 
  phrases, 
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000 
}: TypeAnimationProps) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    if (isTyping) {
      if (text.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
        return () => clearTimeout(timeout);
      }
    } else {
      if (text.length === 0) {
        setIsTyping(true);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      } else {
        const timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, phraseIndex, isTyping, phrases]);

  return (
    <div className="text-xl md:text-2xl text-gray-300">
      {text}<span className="animate-blink">|</span>
    </div>
  );
}