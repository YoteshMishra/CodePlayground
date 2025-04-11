import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MidArea from './components/MidArea';
import CatSprite from './components/CatSprite';
import PlayButton from './components/PlayButton';
import { isColliding } from './utils/collision';

export default function App() {
  const [blocks, setBlocks] = useState([]);
  const [sprites, setSprites] = useState([
    { id: 1, blocks: [], isActive: false, position: { x: 100, y: 100 } },
    { id: 2, blocks: [], isActive: false, position: { x: 200, y: 100 } }
  ]);

  const handleDropBlock = (block) => {
    setBlocks((prev) => [...prev, block]);
  };

  const handlePlay = () => {
  
    let updatedSprites = sprites.map((sprite) => ({
      ...sprite,
      blocks,
      isActive: true
    }));


    setSprites(updatedSprites);


    setTimeout(() => {
      const [a, b] = updatedSprites;
      if (isColliding(a.position, b.position)) {

        const temp = a.blocks;
        updatedSprites[0].blocks = b.blocks;
        updatedSprites[1].blocks = temp;
        setSprites([...updatedSprites]);
      }
    }, 1200);

    setTimeout(() => {
      setSprites((prev) =>
        prev.map((sprite) => ({ ...sprite, isActive: false }))
      );
    }, blocks.length * 500 + 1500);
  };

  const addSprite = () => {
    const newId = sprites.length + 1;
    setSprites((prev) => [
      ...prev,
      { id: newId, blocks: [], isActive: false, position: { x: 100 + newId * 60, y: 100 } },
    ]);
  };

  const handleSpritePositionUpdate = (id, position) => {
    setSprites((prev) =>
      prev.map((sprite) =>
        sprite.id === id ? { ...sprite, position } : sprite
      )
    );
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar onDragStart={(e, type) => e.dataTransfer.setData('blockType', type)} />
      <MidArea onDropBlock={handleDropBlock} blocks={blocks} />

      <div className="w-1/4 relative bg-gray-100 border-l">
        <div className="relative h-full">
          {sprites.map((sprite) => (
            <CatSprite
              key={sprite.id}
              id={sprite.id}
              blocks={sprite.blocks}
              isActive={sprite.isActive}
              onPositionUpdate={(pos) => handleSpritePositionUpdate(sprite.id, pos)}
            />
          ))}
        </div>
        <div className="absolute bottom-4 left-4">
          <PlayButton onClick={handlePlay} />
          <button
            onClick={addSprite}
            className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            ➕ Add Sprite
          </button>
        </div>
      </div>
    </div>
  );
}