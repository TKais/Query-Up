export const GET_DECKS = 'GET_DECKS';
export const CREATE_DECK = 'CREATE_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const CREATE_CARD = 'CREATE_CARD';

export function getDecks( decks ) {
	return {
		type: GET_DECKS,
		decks
	}
}

export function createDeck( deckName ) {
	return {
		type: CREATE_DECK,
		deckName
	}
}

export function deleteDeck( deckName ) {
  return {
    type: DELETE_DECK,
    deckName
  }
}

export function createCard( deckName, card ) {
  return {
    type: CREATE_CARD,
    deckName,
    card
  }
}

