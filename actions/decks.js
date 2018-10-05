export const GET_DECKS = 'GET_DECKS';
export const CREATE_DECK = 'CREATE_DECK';

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

