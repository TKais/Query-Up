import { AsyncStorage } from 'react-native';

export const DECK_KEY = 'QueryUp:deck';

export const getAsyncDecks = () => {
  return AsyncStorage.getItem( DECK_KEY )
}

export const addAsyncDeck = ( deck ) => {
  return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify( deck ))
}

export const addAsyncCard = ( deck, card ) => {
  return AsyncStorage.getItem( DECK_KEY )
    .then((results) => {
      const data = JSON.parse(results)
      data[deck].cards.push(card)
      AsyncStorage.mergeItem(DECK_KEY, JSON.stringify(data))
    })
}

export const removeAsyncDeck = ( deck ) => {
  return AsyncStorage.getItem(DECK_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[deck] = undefined
      delete data[deck]
      AsyncStorage.setItem(DECK_KEY, JSON.stringify(data))
    })
}