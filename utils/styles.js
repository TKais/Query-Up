export const setDeckColors = (deckIndex) => {
  const colors = ['#71C9C8', '#FDB2B3', '#FED0B7', '#F9E3B7', '#F8EEBA'];
  if(deckIndex < colors.length) {
    return colors[deckIndex];
  } else {
    return colors[deckIndex % colors.length];
  }
}