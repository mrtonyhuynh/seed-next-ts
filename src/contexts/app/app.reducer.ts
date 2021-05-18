export const initialState = {
  searchTerm: "",
  isDrawerOpen: false,
};

type ActionType =
  | { type: "SET_SEARCH_TERM"; payload: string }
  | { type: "TOGGLE_DRAWER" };

type StateType = typeof initialState;

export function appReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "TOGGLE_DRAWER":
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
      };
    default: {
      throw new Error(`Unsupported action type at App Reducer`);
    }
  }
}
