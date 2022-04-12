/*
 This is the root component for react2-week1 Homework.
 In this project we had to use github user search API to make a search engin
 for git hub users . Loading - Error and no result message was requirements , plus those 
 we have to manage our states with Context Api. 
 I have made 3 child component to do this assignment. 
 GlobalState.js is the component to manage states and provide a GlobalProvider 
  where all the child component inside of it could have access to the states.
 That is why I wrapped two other component with GlobalProvider component.
 SearchComponent is for search input and managing the input state.
 ListItems component display a list of result or  conditionally loading-error-no result, messages.
 */

import './App.css';
import {  GlobalProvider } from './GitSearchComps/GlobalState';
import ListItems from './GitSearchComps/ListItems';
import SearchComponent from './GitSearchComps/SearchComponent';

function App() {
 
  return (
    <div >
      <GlobalProvider>
        <SearchComponent></SearchComponent>
        <ListItems></ListItems>
    </GlobalProvider>
      
    </div>
  );
}

export default App;


