export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY="CLEAR_DISPLAY";
export const MEMORY_SAVE="MEMORY_SAVE";
export const CALLBACK_MEMO="CALLBACK_MEMO";
export const CLEAR_MEMO="CLEAR_MEMO";


export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}

export const changeOperation=(operation)=>{
  return ({type:CHANGE_OPERATION, payload:operation})
} 

export const clearDisplay=()=>{
  return ({type:CLEAR_DISPLAY})
}

export const Mem=()=>{
  return ({type:MEMORY_SAVE})
}

export const callBackMemo=()=>{
  return ({type:CALLBACK_MEMO});
}

export const clearMemo=()=>{
  return ({type:CLEAR_MEMO})
}