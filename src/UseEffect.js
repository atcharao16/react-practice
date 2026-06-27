import { useState } from "react";
import { useEffect } from "react";

const address = [
    {id : 1, city : "Peddapuram", pincode : 533437, default : true},
    {id : 2, city : "Kakinada", pincode : 233437, default : false},
    {id : 3, city : "Rangampeta", pincode : 833437, default : false},
    {id : 4, city : "Jaggampeta", pincode : 733437, default : false},
    {id : 5, city : "Kirlampudi", pincode : 633437, default : false}
]
function Address(){
    const [defaultAddress, setDefaultAddress] = useState(address.find((add) => add.default))
    const [pincode, setPincode] = useState();
    const handlepincode = (e) => {
        setPincode(e.target.value);
    }
    const setDefalut = ()=>{
        const selected = address.find(add => add.pincode == pincode);
        if(selected) 
            setDefaultAddress(selected);
        console.log(defaultAddress)
    }
    useEffect(() => {
        console.log("Effect Called");
        console.log(defaultAddress);
    },[defaultAddress.pincode])
    return(
        <>
        <h1>Default Address</h1>
        <div>
            <input onChange={handlepincode} placeholder="enter pincode"></input>
            <button onClick={setDefalut}>make default</button>
        </div>

        </>
    )
}
    
function UseEffectExample(){
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(1);

    function fetchData(){
        const URL = `https://dummyjson.com/products/${count}`;
        fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        })
        .then((data) => setProduct([...product, data.title]))
    }

    const handleButton = () => {
        setCount(count => count + 1)
    }
    useEffect(() => {
        fetchData();
    },[count])


    return(
        <>
        <h2>Counter</h2>
        {count}
        <button onClick={handleButton}>Next</button>
        {
            product && product.length > 0 && product.map(pro => <p>{pro}</p>)
        }
        <Address/>
        </>
    )
}

export default UseEffectExample;