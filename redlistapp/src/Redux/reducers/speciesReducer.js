const initialState = {
    species: [],
    language: 'en',
  };
  
  const speciesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SPECIES':
        return { ...state, species: action.payload };
      case 'SET_LANGUAGE':
        return { ...state, language: action.payload };
      default:
        return state;
    }
  };
  
  export default speciesReducer;
  