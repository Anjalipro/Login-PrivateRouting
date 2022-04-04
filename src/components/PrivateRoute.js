import React from "react";

import { Route,Redirect } from "react-router-dom";

const PrivateRoute = ({isAuth:isAuth ,component:Component , ...rest }) => {
   //const Navigate= useNavigate();
  //  return( isAuth? <Component/> : <Navigate to="/" />  ); 
   return (

        <Route
        {...rest}
            render={(props)=>{
            if(isAuth){
                return<Component {...props}/>
            }
            else{
                return<Redirect to ={{pathname:"/" , state:{from:props.location}}}/>
            };

        }}/>
    );
  };

  export default PrivateRoute;