/*
This function has access to users state in global state and 
conditionally return a list of users or loading-no result and error message. 
*/

import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

function ListItems() {
  const GlobalItems = useContext(GlobalContext);
  const users = GlobalItems.users.item;
  const loading = GlobalItems.users.loading;
  const error = GlobalItems.users.error;
  const emptyResult = GlobalItems.users.emptyResult;
 

  return (
    <div>
      {loading && <p>loading...</p>}
      {emptyResult && <p>No Result</p>}
      {error !== "" && <p>{error}</p>}
      {users.map((user) => (
        <h4 key={user.id}>{user.login}</h4>
      ))}
    </div>
  );
}

export default ListItems;
