import React, { createContext, useContext,useReducer } from 'react'
import { data } from '../Data/Data';

export const DataContext = createContext();

const DataReducer = (state, action)=>{
    switch (action.type) {
        case "SEARCH_VALUE":
            return {...state, searchValue: action.value, search: false}

        case "SEARCH_BTN":
            return {...state, search: true }
        case "FILTER_BY":
            return {...state, filterBy: state.filterBy.find((item)=> item === action.value) ? state.filterBy.filter((item)=> item !== action.value): [...state.filterBy, action.value]}
        case "SORT_BY":
            return {...state, sortBy: action.value }
        default:
            break;
    }
}

export const DataProvider = ({children}) => {
    const initialValue = {
        search:false,
        searchValue:"",
        sortBy:"",
        filterBy:["inStock"]
    }
    const [state, dispatch] = useReducer(DataReducer, initialValue);
    const  { searchValue,search, sortBy, filterBy} = state;


    const filteredData = filterBy.length !== 0 ? data.filter((item)=> filterBy.every((value)=> item[value])): data;

    const searchedData = searchValue && search ? filteredData.filter(({name})=> name.toLowerCase().includes(state.searchValue.toLowerCase())) : filteredData;

    const filtered = sortBy ? searchedData.sort((a,b)=> sortBy === "lowToHigh" ? a.price - b.price : b.price- a.price) : searchedData ;
  return (
    <DataContext.Provider value={{state,dispatch,filtered}}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext);