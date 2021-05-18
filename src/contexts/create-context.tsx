  
import React, { useContext, createContext } from "react";

/**
 * Tiện ích khởi tại context
 * @param reducer 
 * @param initialState 
 * @returns 
 */
export function useCreateContext<StateType, ActionType>(
  reducer: React.Reducer<StateType, ActionType>,
  initialState: StateType
) {

  // Default Dispatcher ban đầu là 1 function trả về initState
  const defaultDispatch: React.Dispatch<ActionType> = () => initialState;

  // Tạo 2 context để handle state và dispatch
  const stateCtx = createContext(initialState);
  const dispatchCtx = createContext(defaultDispatch);

/**
 * useContext là một hooks trong React Hooks 
 * cho phép chúng ta có thể làm việc với React Context trong một functional component.
 */

  function useStateCtx<K extends keyof StateType>(property: K) {
    //Lấy giá trị của context
    const state = useContext(stateCtx);
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    //Lấy giá trị của context
    return useContext(dispatchCtx);
  }

  
  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = React.useReducer<
      React.Reducer<StateType, ActionType>
    >(reducer, initialState);
    return (
      <dispatchCtx.Provider value={dispatch}>
        <stateCtx.Provider value={state}>{props.children}</stateCtx.Provider>
      </dispatchCtx.Provider>
    );
  }


  return [useStateCtx, useDispatchCtx, Provider] as const;
}