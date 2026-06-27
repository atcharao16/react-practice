import { useState, useReducer, useEffect } from "react";
import products from "./db";

function FiltersExample() {
    const filterReducer = (state, action) => {
        switch(action.type){
            case 'FilterByBrand':
                return {
                    ...state,
                    brand : action.placevalue
                }
            case 'FilterByPrice':{
                return {
                    ...state,
                    price : action.placevalue
                }
            }
            case 'FilterByDiscount':
                return{
                    ...state,
                    discount : action.placevalue
                }
            case 'FilterByRating':
                return {
                    ...state,
                    rating : action.placevalue
                }
            default :
                return state
        }
    }
    const intialValues = {
        price : '',
        brand : '',
        discount : '',
        rating : ''
    }
    const [{brand, price, discount, rating}, filterDispatch] = useReducer(filterReducer, intialValues)

    const hadnleBrand = (e) => {
        filterDispatch({'type' : 'FilterByBrand', 'placevalue' : e.target.value})
    }
    const hadnlePrice = (e) => {
        filterDispatch({'type' : 'FilterByPrice', 'placevalue' : e.target.value})
    }
    const hadnleDiscount = (e) => {
        filterDispatch({'type' : 'FilterByDiscount', 'placevalue' : e.target.value})
    }
    const hadnleRating = (e) => {
        filterDispatch({'type' : 'FilterByRating', 'placevalue' : e.target.value})
    }

    useEffect(() => {
        console.log('Some filters are changed')
    },[brand, price, discount, rating])
    const filteredByBrand = brand?.length > 0 ? products.filter(product => product.name.toLowerCase().includes(brand.toLowerCase())): products
        const filteredByPrice = price?.length > 0 ? filteredByBrand.filter(product => Number(product.price) <= Number(price)) : filteredByBrand
        const filteredByDiscount = discount?.length > 0 ? filteredByPrice.filter(product => Number(product.discount) >= Number(discount)) : filteredByPrice
        const filteredByRating = rating?.length > 0  ? filteredByDiscount.filter(product => Number(product.rating) >= Number(rating)): filteredByDiscount

    return (
        <>  
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', 'gap': '8px' }}>
                <input onChange={hadnleBrand} placeholder="filter by brand"></input>
                <input onChange={hadnlePrice} placeholder="filter by price"></input>
                <input onChange={hadnleDiscount} placeholder="filter by discount"></input>
                <input onChange={hadnleRating} placeholder="filter by rating"></input>

            </div>

            {
                <div>
                    <div style={{ margin: '5px', display : 'grid', gridTemplateColumns : 'repeat(4, 1fr)' }}>{
                        filteredByRating.map(product => <>
                            <div style={{ width: '300px', height: '100px', border: '2px solid black', display: 'flex', flexDirection: 'column', margin: '5px', 'gap': '8px' }}>
                                <p style={{ 'textAlign': "center" }}><b>{product.name}</b></p>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', 'gap': '10px' }}>
                                    <span>{product.price} || </span>
                                    <span>{product.discount}% || </span>
                                    <span>{product.rating}</span>
                                </div>

                            </div>

                        </>)
                    }

                    </div>
                </div>

            }

        </>
    )
}

/* **********--------------***************--------------*******************---------- */
function ReducerExample() {
    const intialvalue = {
        count: 0
    }
    const reduceFun = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return {
                    ...state,
                    count: state.count + 1
                }
            case 'DECREMENT':
                return {
                    ...state,
                    count: state.count - 1
                }
            default:
                return;
        }
    }
    const [state, backpatch] = useReducer(reduceFun, intialvalue);

    const handleIncButton = () => {
        backpatch({ type: 'INCREMENT' });
    }
    const handleDecButton = () => {
        backpatch({ type: 'DECREMENT' });
    }
    console.log(state)
    return (
        <>
            <div>
                <h2>Counter - {state.count}</h2>
                <button onClick={handleIncButton}>Increase</button>
                <button onClick={handleDecButton}>Decrease</button>
            </div>
            <h2 style={{ 'textAlign': "center" }}>Filters Example</h2>
            <div >
                <FiltersExample />
            </div>
        </>
    )
}

export default ReducerExample;