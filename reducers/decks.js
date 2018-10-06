import { GET_DECKS, CREATE_DECK } from '../actions/decks';

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
		    		questions: [],
		    	}
		    }
		default:
		    return state;
	}
}