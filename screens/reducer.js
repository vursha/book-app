/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable curly */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
export const reducer = (state,action) => {
    if(action.type === "plus"){
      return state + 1;
    }else if (action.type === "minus"){
      return state - 1;
    }
     else return state;
    

  };
  