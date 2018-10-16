import { GET_DECKS, CREATE_DECK, DELETE_DECK, CREATE_CARD } from '../actions/decks';

export function decks( state = {}, action ) {
	switch( action.type ) {
		case GET_DECKS:
	    return {
	    	...state,
	    	...action.decks,
	    }
		case CREATE_DECK:
	    return {
	    	...state,
	    	[action.deckName]: {
	    		title: action.deckName,
	    		cards: [],
	    	}
	    }
		case DELETE_DECK:
		  const newState = Object.assign({}, state);
		  delete newState[action.deckName];
		  return newState;
		case CREATE_CARD:
		  const deck = Object.assign({}, state[action.deckName]);
		  const cardArray = Array.from(state[action.deckName].cards);
		  return {
		  	...state,
		  	[action.deckName]: {
		  		...deck,
		  		cards: cardArray.push(action.card),
		  	}
		  }
		default:
		    return state;
	}
}