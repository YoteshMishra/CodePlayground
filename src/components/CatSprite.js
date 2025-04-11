
import React, { useEffect, useState } from 'react';

const CatSprite = ({ blocks = [], id, isActive = true, onPositionUpdate }) => {
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [sayText, setSayText] = useState('');
  const [thinkText, setThinkText] = useState('');

  useEffect(() => {
    onPositionUpdate({ x, y });
  }, [x, y]);

  useEffect(() => {
    if (!isActive) return;

    let i = 0;
    const interval = setInterval(() => {
      const block = blocks[i];
      if (!block) return clearInterval(interval);

      switch (block.type) {
        case 'move':
          setX((prev) => prev + 10);
          break;
        case 'turn':
          setRotation((prev) => prev + 15);
          break;
        case 'goto':
          setX(50);
          setY(50);
          break;
        case 'repeat':
          for (let j = 0; j < 3; j++) {
            setX((prev) => prev + 10);
          }
          break;
        case 'say':
          setSayText('Hello!');
          setTimeout(() => setSayText(''), 2000);
          break;
        case 'think':
          setThinkText('Hmm...');
          setTimeout(() => setThinkText(''), 2000);
          break;
        default:
          break;
      }

      i++;
    }, 400);

    return () => clearInterval(interval);
  }, [blocks, isActive]);

  return (
    <div
      className="absolute transition-all duration-300"
      style={{ left: x, top: y, transform: `rotate(${rotation}deg)` }}
    >
      🐱
      {sayText && <div className="bg-white p-1 border rounded mt-1 text-xs">💬 {sayText}</div>}
      {thinkText && <div className="bg-white p-1 border rounded mt-1 text-xs">💭 {thinkText}</div>}
    </div>
  );
};

export default CatSprite;
