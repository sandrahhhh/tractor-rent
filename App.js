import { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home";
import Transport from "./Transport";
import Harvest from "./Harvest";
import Production from "./Production";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";
import Payment from "./Payment";
import Account from "./Account";
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import API from "./ApiPage";
import Confirm from "./confirm";

const promise = loadStripe("pk_test_51KZJ9mHfT50f1FJduntBoCkl8ZmDi405dbTlssgVXCYDK5IcsTdgDlDycegh4ndcNkMNFRkwF62WUfMTP7edemdS00Xr3ipOGT");

function App() {

  
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
       <Switch>
       <Route path= "/Checkout">
          <Header />
          < Checkout />
        </Route>
        <Route path= "/confirm">
         
          < Confirm />
        </Route>
        <Route path= "/Account">
          <Header />
          < Account />
        </Route>
        <Route path= "/ApiPage">
          <API />
        </Route>
        <Route path= "/Transport">
          <Header />
          < Transport />
        </Route>
        <Route path= "/Payment">
          <Header />
          <Elements stripe={promise}>
          < Payment />
          </Elements>
        </Route>
        <Route path= "/Harvest">
          <Header />
          < Harvest />
        </Route>
        <Route path= "/Production">
          <Header />
          < Production />
        </Route>
        <Route path= "/Login">
          <Login />
        </Route>
        <Route path= "/">
          <Header />
          <Home />
        </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
