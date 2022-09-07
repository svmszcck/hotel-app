import { Action, GlobalState } from "global-types";

import actions from "./actions";

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case actions.SET_PROPERTIES:
      return {
        ...state,
        properties: [...state.properties, ...action.payload],
      };
    case actions.SET_PROPERTY:
      return {
        ...state,
        activeProperty: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
