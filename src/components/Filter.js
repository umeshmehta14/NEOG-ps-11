import React from 'react'
import { useData } from '../Context/DataContext'

const Filter = () => {
    const {state:{sortBy},dispatch} = useData();
  return (
    <div>
      <label htmlFor="search-bar">
        <input type="text" id="search-bar" onChange={(event)=> dispatch({type:"SEARCH_VALUE", value:event.target.value})} placeholder='search by name'/>
      </label>
      <button onClick={()=> dispatch({type:"SEARCH_BTN"})}>Search Data</button>
      <fieldset>
        <legend>Sort By</legend>
        <label htmlFor="lowToHigh">
            <input type="radio" checked={sortBy === "lowToHigh"} id="lowToHigh" onChange={()=> dispatch({type:"SORT_BY" ,value:"lowToHigh"})}/>
            Price - Low to High
        </label>
        <label htmlFor="highToLow">
            <input type="radio" checked={sortBy === "highToLow"} id='highToLow' onChange={()=> dispatch({type:"SORT_BY" ,value:"highToLow"})}/>
            Price - High to Low
        </label>
      </fieldset>
      <fieldset>
        <legend>Filters</legend>
        <label htmlFor="stock">
            <input type="checkbox" id="stock" onChange={()=> dispatch({type:"FILTER_BY" , value :"inStock"})}/>
            Include Out of Stock
        </label>
        <label htmlFor="delivery">
            <input type="checkbox" id='delivery'  onChange={()=> dispatch({type:"FILTER_BY" , value :"fastDelivery"})}/>
            Fast Delivery Only
        </label>
      </fieldset>
    </div>
  )
}

export default Filter
