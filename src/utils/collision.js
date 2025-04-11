/**
 * Checks if two sprite positions are colliding.
 * @param {Object} spriteA - { x, y }
 * @param {Object} spriteB - { x, y }
 * @param {number} size - Size of the sprite (default 50)
 * @returns {boolean}
 */
export const isColliding = (spriteA, spriteB, size = 50) => {
    return (
      Math.abs(spriteA.x - spriteB.x) < size &&
      Math.abs(spriteA.y - spriteB.y) < size
    );
  };
  