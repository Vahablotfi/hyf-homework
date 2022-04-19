/*
I have created this component to fetch data and manage the states
and make the states available  for all the child components.
I have used two useState hook to manage two different component.
input state is for searchComponent and Users state is for listItemsComponent.
I have also used a useEffect hook to fetch data from github API and change the 
users state , useEffect hook is depended on input state, which means 
whenever user type in input, it calls userSearch function and pass the input value to it ,which will be set as our input state
and useEffect hook will fetch data from github and set the users state depending on the result, 
That is how I manage loading-error and no result message.
there is two place to catch error first one if the database response code is not ok
and second one is in case that we don't get any result back from data base. 
*/

import React, { useState, useEffect } from 'react'

export const GlobalContext = React.createContext( )

export const GlobalProvider = ({ children }) => {
   const [input,setInput]=useState('')
  const [users, setUsers] = useState({
    item: [],
    loading: false,
    error: '',
    emptyResult:false,
  })

  function searchUser(event) {
   return setInput(event.target.value)
  }

  useEffect(() => {
    const fetchData = () => {
      if (input !== "") {            
       setUsers({
         ...users, 
           loading : true,
        })
            fetch(`https://api.github.com/search/users?q=${input}`)
             .then(response => {
             if (!response.ok) {
            setUsers({
              ...users,
               loading: false,
               error: 'could not get the data from server',
                })
               throw Error("could not get the data from server")
            }
          const data = response.json();
          return data;
        })
         .then(data => {
                if (data.total_count === 0) {
                  setUsers({
                    ...users,
                    item: [],
                    emptyResult: true,
                  }
                  )
                } else {
                  setUsers({
                    item: data.items,
                    loading: false,
                     error: '',
                    emptyResult: false,
                  }
                 );
                }
        
        })
        .catch(err => {
          setUsers({
             item: [],
            loading: false,
            error: err.message,
            emptyResult: false,
          }
        )
      })
    }
  };
  fetchData()
},[input])


  return (
    <GlobalContext.Provider value={{
      users,
      input,
      searchUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}


