/*
This popup component has been made to display its child with whenever user 
click on a button ,and call for a function to set the state value to true
the state value could set to false again with the close button inside the popup component.
*/

import React from 'react'



function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className="popup-inner">
                <div className="close-btn">
                    <button onClick={() => props.setTrigger(false)}>
                        close
                </button>
                </div>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup