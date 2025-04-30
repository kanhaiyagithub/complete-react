import { createContext } from "react";
 export const TodoStoreItems = createContext({
    todoItems:[],
      addNewItem: () => {},
      deleteItem: () => {}
 })