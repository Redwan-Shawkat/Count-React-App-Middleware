import { createStore, combineReducers, applyMiddleware  } from "redux";

 // -----> Compose With DevTools Extension 
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cart";

// -----> Middleware 
import {ourMiddleWare} from  "./middleware/index"

// -----> Logger Import
import logger from "redux-logger"; 

const counterReducer = (state = 20, action) => {
	switch (action.type) {
		case "increment": {
			return state + action.payload;
		}

		case "decrement": {
			return state - action.payload;
		}

		default: {
			return state;
		}
	}
};

const initState = {
	bgColor: "#fff",
	textColor: "#000",
};
const themeReducer = (state = initState, action) => {
	switch (action.type) {
		case "theme/changeBgColor": {
			return {
				...state,
				bgColor: action.payload,
			};
		}

		case "theme/changeTextColor": {
			return {
				...state,
				textColor: action.payload,
			};
		}

		case "theme/reset": {
			return initState;
		}

		default: {
			return state;
		}
	}
};

const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
	cart: cartReducer,
});

/*
// -----> Our Written Middleware 
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ourMiddleWare)));
*/



// -----> Logger 
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));



/*

  // ----->Multiple Middleware
  export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ourMiddleWare)));

*/