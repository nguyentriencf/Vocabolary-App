// hàm này sẽ thay cho dispatch
export function toggleIsAdding() {
  return {
    type: "TOGGLE_IS_ADDING",
  };
}

export function addWord(en,vn){
  return {
    type: "ADD_WORD",
    en,
    vn
  };
}
export function toggleMemorized(id) {
  return {
    type: "TOGGLE_MEMORIZIED",
    id,
  };
}
export function toggleShow(id) {
  return {
    type: "TOGGLE_SHOW",
    id,
  };
}