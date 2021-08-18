import { createStore } from "redux";
import reducer from "./reducer/reducer";

// create ruducer

// create store
const store = createStore(reducer);

// tích hợp trong ứng dụng trong ứng react - Provider => 1 component 1 prop => store

export default store;
