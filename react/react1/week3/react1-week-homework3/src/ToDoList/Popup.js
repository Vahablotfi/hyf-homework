/*
I made this component to wrap update form in it 
so we can only see/use update form when ever edit button is clicked 
save button here has the task of changing the trigger value , so children component 
won't be displayed anymore
*/
import React from 'react'





function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className="popup-inner">
                <div className="close-btn">
                    <button onClick={() => { props.trigger(false) }}>
                        Save!
                </button>
                </div>
                {props.children}
            </div>
        </div>
    ) : "";
}



export default Popup