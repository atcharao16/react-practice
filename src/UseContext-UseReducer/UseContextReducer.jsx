import products from "../db";
import { useCart } from "./CartContext";

function UseContextReducer() {
    const {cartlist, dispatch} = useCart();

    const handleAddCart =  (product) => dispatch({'type' : 'Add', 'payload' : product.id})
    const handleRemoveCart = (product) => dispatch({'type' : 'Remove', 'payload' : product.id})
    return (
        <>
            <h2>Cart - {cartlist.cart.length}</h2>

            <div>
                <div style={{ margin: '5px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>{
                    products.map(product => <>
                        <div style={{ width: '300px', height: '120px', border: '2px solid black', display: 'flex', flexDirection: 'column', margin: '5px', 'gap': '8px' }}>
                            <p style={{ 'textAlign': "center" }}><b>{product.name}</b></p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', 'gap': '10px' }}>
                                <span>{product.price} || </span>
                                <span>{product.discount}% || </span>
                                <span>{product.rating}</span>
                            </div>
                            <div>
                               
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={() => handleAddCart(product)}>Add to Cart</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={() => handleRemoveCart(product)}>Remove From Cart</button>
                            </div>
                        </div>

                    </>)
                }

                </div>
            </div>
        </>
    )
}

export default UseContextReducer;