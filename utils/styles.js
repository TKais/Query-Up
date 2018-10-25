export const colorPalette = {
  darkGreen: '#71C9C8',
  coral: '#FDB2B3',
  peach: '#FED0B7',
  darkYellow: '#F9E3B7',
  lightYellow: '#F8EEBA',
};

export const setDeckColors = (deckIndex) => {
  const colors = Object.values(colorPalette);
  if(deckIndex < colors.length) {
    return colors[deckIndex];
  } else {
    return colors[deckIndex % colors.length];
  }
}