import React, { ReactNode, useContext, useReducer } from 'react';

type ProductStatus = 'added' | 'processing' | 'done'

interface IHomeState {
  isProductAdded: ProductStatus;
}

const initialHomeState: IHomeState = {
  isProductAdded: 'done',
};

const ACTIONS = {
  SET_IS_PRODUCT_ADDED: 'SET_IS_PRODUCT_ADDED',
};

interface ActionType {
  type: keyof typeof ACTIONS;
  payload: Partial<IHomeState>;
}

const reducer = (state: IHomeState, action: ActionType): IHomeState => {
  switch (action.type) {
    case ACTIONS.SET_IS_PRODUCT_ADDED:
      return {
        ...state,
        isProductAdded: action.payload.isProductAdded,
      } as IHomeState;
    default:
      return state;
  }
};

interface HomeContextProps {
  homeState: IHomeState;
  setIsProductAdded: (isProductAdded: ProductStatus) => void;
}

const HomeContext = React.createContext<HomeContextProps>({
  setIsProductAdded: () => { },
  homeState: initialHomeState,
});

const useHomeContext = () => useContext(HomeContext);

const HomeContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialHomeState);

  const value = {
    homeState: state,
    setIsProductAdded: (data: ProductStatus) => {
      dispatch({
        payload: {
          ...state,
          isProductAdded: data,
        },
        type: 'SET_IS_PRODUCT_ADDED',
      });
    }
  };

  return (
    <HomeContext.Provider value={value}>
      {children}
    </ HomeContext.Provider>
  );
};

export { HomeContextProvider, useHomeContext };
