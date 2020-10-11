import React from  'react' ;
import ReactDOM from 'react-dom';
import App from './components/App';
import Navbar from './components/Navbar/Navbar';
// import CounterP2 from './components/CounterP2';


ReactDOM.render(
    <React.Fragment>
        <Navbar />,
        <App />,
        {/* <CounterP2 />, */}
    </React.Fragment>,
document.querySelector('#root'));