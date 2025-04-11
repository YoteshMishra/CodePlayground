
import React, { useState } from 'react';

const MidArea = ({ onDropBlock, blocks }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const blockType = e.dataTransfer.getData('blockType');
    onDropBlock({ type: blockType });
  };

  return (
    <div
      className="w-2/4 min-h-screen p-4 bg-white border relative"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <h2 className="text-lg font-bold mb-4">Code Area</h2>
      <div className="space-y-2">
        {blocks.map((block, index) => (
          <div
            key={index}
            className="px-4 py-2 rounded bg-gray-100 border text-sm"
          >
            {block.type === 'say' && 'Say "Hello!" for 2 sec'}
            {block.type === 'think' && 'Think "Hmm..." for 2 sec'}
            {block.type === 'move' && 'Move 10 steps'}
            {block.type === 'turn' && 'Turn 15 degrees'}
            {block.type === 'goto' && 'Go to x: 50 y: 50'}
            {block.type === 'repeat' && 'Repeat 3 times'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidArea;