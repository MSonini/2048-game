export {};

export const getRandomTileValue = (probability = 10) => {
  const float = Math.random();
  return float * 100 < probability ? 2 : 0;
};
