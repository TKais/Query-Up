import { GET_DECKS, CREATE_DECK, DELETE_DECK } from '../actions/decks';

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
		default:
		    return state;
	}
}