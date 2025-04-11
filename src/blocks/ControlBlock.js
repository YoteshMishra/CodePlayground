import React from 'react';

const ControlBlock = ({ onDragStart }) => {
  return (
    <div className="p-2">
      <h2 className="font-bold text-yellow-600 mb-2">Control</h2>
      <div
        draggable
        onDragStart={(e) => onDragStart(e, 'repeat')}
        className="bg-yellow-300 text-black p-2 my-1 rounded cursor-pointer"
      >
        Repeat 3 times
      </div>
    </div>
  );
};

export default ControlBlock;
