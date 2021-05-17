import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';




import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

const App = () => {
  return (
     <>
       <BrowserRouter>
           <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/Contact" component={Contact}/>
             <Route path="/Skills" component={Skills}/>
           </Switch>
       </BrowserRouter>
     </>
  );
};

export default App;

