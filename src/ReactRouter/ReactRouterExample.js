import { Link, Router, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Login } from './Login';
import { Cart } from './Cart';
import { PrivateRouter } from './auth/PrivateRout';
function RouterSPA(){
    return(
        <>
        <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to= '/cart'>Cart</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to= '/about'>About</Link>&nbsp;&nbsp;&nbsp;
        <Link to='/login'>Login</Link>
        <Routes>
            <Route path= '/' element={<Home></Home>}></Route>
            <Route path = 'cart' element={
                <PrivateRouter>
                    <Cart/>
                </PrivateRouter>
                }></Route>
            <Route path= '/about' element={<About></About>}></Route>
            <Route path= '/login' element={<Login></Login>}></Route>
        </Routes>
        </>
    )

   

}

export default RouterSPA;