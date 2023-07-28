import React from "react";
import CakeContainer from "./components/CakeContainer";
import './index.css'
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamConatiner from "./components/IceCreamConatiner";
import HookCreamContainer from "./components/HookCreamContainer"
import NewInputContainer from './components/NewInputConatiner';
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

const App = () => {
  return (
    <div className="app">
      {/* <ItemContainer cake/>
      <ItemContainer IceCream/>
      <CakeContainer />
      <HooksCakeContainer/>
      

      <IceCreamConatiner/>
      <HookCreamContainer/>
      <NewInputContainer/> */}
      <UserContainer/>
    </div>
  );
};

export default App;
