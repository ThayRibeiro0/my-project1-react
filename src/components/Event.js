//event of onclick using function to create the event and using him in the component

function Events(number){

    function myEvent(){
        console.log(`Ops, I was activated! ${number}`)
        // console.log("Ops, I was activated")
    }

 return (
    <div>
       <p>Click to start an event</p> 
       <button onClick={myEvent}>Active</button>
    </div>
 )
}

export default Events;