import { AsyncStorage } from 'react-native';

export const DECK_KEY = 'QueryUp:deck';

export const getAsyncDecks = () => {
  return AsyncStorage.getItem( DECK_KEY )
}

export const setAsyncDeck = ( deck ) => {
  return AsyncStorage.setItem(DECK_KEY, JSON.stringify( deck ))
}

export const addAsyncDeck = ( deck ) => {
  return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify( deck ))
}

export const removeAsyncDeck = ( deck ) => {
  return AsyncStorage.removeItem(deck)
}