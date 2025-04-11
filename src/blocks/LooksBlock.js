import React from 'react';

const LooksBlock = ({ onDragStart }) => {
  return (
    <div className="p-2">
      <h2 className="font-bold text-purple-700 mb-2">Looks</h2>
      <div
        draggable
        onDragStart={(e) => onDragStart(e, 'say')}
        className="bg-purple-300 text-white p-2 my-1 rounded cursor-pointer"
      >
        Say "Hello!" for 2 sec
      </div>
      <div
        draggable
        onDragStart={(e) => onDragStart(e, 'think')}
        className="bg-purple-300 text-white p-2 my-1 rounded cursor-pointer"
      >
        Think "Hmm..." for 2 sec
      </div>
    </div>
  );
};

export default LooksBlock;
