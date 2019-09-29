import React, { Component,Suspense } from 'react';
import { Link,Route } from "react-router-dom";
import Users from "./containers/Users";
//import Pizza from "./containers/Pizza";
// import asynComponent from "./hoc/asyncComponent";
const AsyncPizza = React.lazy(()=>import('./containers/Pizza'));

// const AsynPizzaOld = asynComponent(()=>{
//     return import('./containers/Pizza')
// })


class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/users">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>

                <div>
                    <Route to="/" exact component={Users}/>
                    {/* <Route to="/pizza" component={AsynPizzaOld}/> */}
                    <Route to="/pizza" exact render={()=><Suspense fallback={<div>Loading...</div>}><AsyncPizza/></Suspense>} /> 
                </div>
            </div>
        );
    }
}

export default App;