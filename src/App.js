// import JSXExample from './JSX';
// import ConditionalRendering from './ConditionalRendering';
// import UseStateExample from './UseStateHook';
// import Counter from './PropsExample';
// import Excercise1  from './Excerices';
// import Wishlist from './Wishlist';
// import Timer from './UseRef';
// import UseEffectExample from './UseEffect';
// import ReducerExample from './UseReducer';
// import UseContextExample from './Components/UseContext';
// import UseContextReducer from './UseContext-UseReducer/UseContextReducer';
import RouterSPA from './ReactRouter/ReactRouterExample';
import { Counter } from './redux-practice/index'
import { Provider } from 'react-redux';
import { store } from './todo-redux/store';
import { Todos } from './todo-redux';
import './App.css';

function App() {
  return (
    <>
  <Provider store={store}>
    <Todos/>
  </Provider>
     
    </>

  );
}

export default App;
