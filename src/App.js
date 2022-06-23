import React from "react";
import { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import {loadStripe, loadstripe} from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
  
const promise = loadStripe('pk_test_51JSPomSDZ4MvcCKOdXt6EQC7V77XH6LMrTcWrKD78sFEBfEvhCAtnjmFddcpLuR3yNeAelTGgvslyp1FE0r5pTtu00C7cREZSs');

function App() {

 const [{}, dispatch] = useStateValue();

 useEffect(() => {
  auth.onAuthStateChanged(authUser=>{
    console.log(authUser);
    if(authUser){
       
      dispatch({
        type: 'SET_USER',
        user: authUser
      })

    } else {

      dispatch({
        type: 'SET_USER',
        user: null
      })

    }
  })
 }, [])

  return (

    <Router>
       <div className="App">
       
         <Switch>
           <Route path = "/login">
             <Login />
           </Route>

           <Route path ="/checkout">
           <Header />
             <Checkout />
           </Route>
           
           <Route path ="/payment">
           <Header />
           <Elements stripe = {promise}>
              <Payment />
           </Elements>
             
           </Route>

           <Route path ="/">
           <Header />
             <Home /> 
           </Route>

         </Switch>
         
       </div>

    </Router>
  );
}

export default App;