import React from 'react';

const MotionBlock = ({ onDragStart }) => {
  return (
    <div className="p-2">
      <h2 className="font-bold text-blue-600">Motion</h2>
      <div
        draggable
        onDragStart={(e) => onDragStart(e, 'move')}
        className="bg-blue-100 p-2 m-1 rounded cursor-move"
      >
        Move 10 steps
      </div>
      <div
        draggable
        onDragStart={(e) => onDragStart(e, 'turn')}
        className="bg-blue-100 p-2 m-1 rounded cursor-move"
      >
        Turn 15 degrees
      </div>
      <div
        draggable
        onDragStart={(e) => onDragStart(e, 'goto')}
        className="bg-blue-100 p-2 m-1 rounded cursor-move"
      >
        Go to x: 50 y: 50
      </div>
      <div
        draggable
        onDragStart={(e) => onDragStart(e, 'repeat')}
        className="bg-blue-100 p-2 m-1 rounded cursor-move"
      >
        Repeat 3 times
      </div>
    </div>
  );
};

export default MotionBlock;
