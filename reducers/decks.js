import { GET_DECKS, CREATE_DECK } from '../actions/decks';

export function decks( state = {}, action ) {
	switch( action.type ) {
		case GET_DECKS:
		    return {
		    	...state,
		    	...action.decks,
		    }
		case CREATE_DECK:
		console.log('ACTION--->', action.name);
		    return {
		    	...state,
		    	...action.deckName
		    }
		default:
		    return state;
	}
}