const initialState = {
 language: "uz"
};

const languageReducer = (state = initialState, action) => {
 switch(action.type) {
   case "uz":
     return {
       ...state,
       language: "uz",
     };
   case "ru":
     return {
       ...state,
       language: "ru",
     };
   case "en":
     return {
       ...state,
       language: "en",
     };
   default:
     return state;
 }
};

export default languageReducer;
