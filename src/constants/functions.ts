export const remCalc = (px: number): number => {
  const baseFontSizeInPx = 16;

  const remValue = px / baseFontSizeInPx;

  return remValue;
};
