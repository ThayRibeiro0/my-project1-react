import React from "react";
import Button from "./event/Button.js";
//event of onclick using function to create the event and using him in the component

// function Events(number){
function Events(number){
    function myEvent(){
      //   console.log(`Ops, I was activated! ${number}`)
      console.log(`Activating first event!`)

        // console.log("Ops, I was activated")
    }

    function secondEvent(){
      console.log(`Activating second event`)
    }

 return (
    <div>
       <p>Click to start an event</p> 
       <Button event={myEvent} text="First Event" />
       <Button event={secondEvent} text="Second Event" />
       {/* <button onClick={myEvent}>Active</button> */}
    </div>
 )
}


export default Events;
