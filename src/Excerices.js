import './App.css';
import { useState } from 'react';

const allbrands = [
    {id : "1", name : "puma"},
    {id : "2", name : "nike"},
    {id : "3", name : "reebook"},
    {id : "4", name : "adidas"},
    {id : "5", name : "fila"},
    {id : "6", name : "puma lite"}
];
function AddCart(){
    const [cart ,setCart] = useState([]);
    function handleAddCartButton(id){
        const selected = allbrands.find(item => item.id === id);
        const existed = cart.some(brand => brand.id === id);
        if(!existed)
            setCart([...cart, selected])
    }

    function handleRemoveCartButton(id){
        const filtered = cart.filter(item => item.id !== id);
        setCart([...filtered]);
    }
    return<>
    <div>
        <h4>Add brand to your cart</h4>

        {
            allbrands.map(brand =>
                <div>
                    <span >{brand.name}</span> &nbsp;&nbsp;&nbsp;
                    <button onClick={() => handleAddCartButton(brand.id)}>Add</button>
                </div>
            )
        }
    </div>
    <div>
        <h4>Your cart</h4>
        {cart.length > 0 ? cart.map(brand => 
            <div >
                <span>{brand.name}</span> &nbsp;&nbsp;&nbsp;
                <button onClick={() => handleRemoveCartButton(brand.id)}>Remove</button>
            </div>
        ) : ''}
    </div>
    </>
}

function Excercise1(){
    const [brands, setBrands] = useState(allbrands);
   
    const handleSearch = (e) => {
        const val = e.target.value;
        const filtered = (val).length > 0 ? brands.filter(brand => brand.name.includes(val.toLowerCase())): allbrands;
        setBrands(filtered);
    }
    
    return (
        <>
            <input type = 'text' name = 'search' placeholder='search brands..' onChange={handleSearch}></input>   
                <ul>
                    {
                        brands.map( brand => <li key = {brand.id}>{brand.name}</li>)
                    }
                    
                </ul>
            
            <AddCart/>
        </>
    )
}


export default Excercise1;