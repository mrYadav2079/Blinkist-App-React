import React from 'react';
import './App.css';
import LoginButton from './loginButton';
import {useAuth0} from '@auth0/auth0-react';
import Main1 from './main';


function App() {
  const { isLoading,isAuthenticated} = useAuth0();
  if(isLoading 
  ){
    return <div>Loading...</div>
  }
  return (
   <>

    
     {(!isAuthenticated)? <LoginButton />: null}
        
        
        
        {isAuthenticated &&
         <Main1 />
    }

    </>
  );
}

export default App;
