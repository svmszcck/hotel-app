import React, { useEffect, useReducer, FC, ReactNode } from "react";

import { GlobalState } from "global-types";

import GlobalContext from ".";
import reducer from "./reducer";
import actions from "./actions";

const initialState: GlobalState = {
  loading: false,
  properties: [],
  activeProperty: null,
};

type GlobalContextProviderProps = {
  children?: ReactNode;
};

const GlobalContextProvider: FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  });

  const value = {
    ...state,
    setProperties: (data: any): void => {
      dispatch({ type: actions.SET_PROPERTIES, payload: data });
    },
    setActiveProperty: (id: number): void => {
      dispatch({ type: actions.SET_PROPERTY, payload: id });
    },
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
