import './App.css'

let count = 0;
let iptxt = 'Atcharao'
function Example(){
    function incrementclick(){
        count = count + 1;
        console.log(count);
    }

    function searchChange(event){
        iptxt = event.target.value;
        console.log(iptxt)
    }
    return(
        <>
        <button onClick={incrementclick}>Increment</button>
        {count}
        <br></br>
        <input type = 'text' onFocus={searchChange} placeholder='search...'></input>
        {iptxt}
        </>
    )
}
function Home(){
    return(
        <>
        <h3>Products</h3>
        <div className='homepage'>
            <div>
            <ul>
                <li>Shirts</li>
                <li>Jeans</li>
                <li>T-Shirts</li>
                <li>Trousers</li>
                <li>Shoes</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Dresses</li>
                <li>Sarees</li>
                <li>Tops</li>
                <li>Handbags</li>
                <li>Jewelry</li>
            </ul>
        </div>
        </div>
        
        </>
    )
}
const JSXExample = () => {
    const name = "Atcharao";
    return(
        //Fragments
        <>
            <h1 className="heading">{name}</h1>
            <div>
                <ul style = {{display : "flex", gap : "15px" ,"list-style" : "none"}} >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <Home/>
            <Example/>
        </>
    )
}

export default JSXExample;