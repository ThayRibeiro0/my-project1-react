import { useState } from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function sendEmail(e){
        e.preventDefault()
        // console.log('Testing')
        setUserEmail(email)
        console.log(userEmail)
    }

    function clearEmail(){
        setUserEmail('')
    }

    return( 
    <div>
        <h2>Register your email: </h2>
        <form>
            <input type="email" placeholder="Tap your email..." onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit" onClick={sendEmail}>
                Send-email
            </button>
            {userEmail && (
                <div>
                   <p> The user's email it's: {userEmail}</p>
                   <button onClick={clearEmail}>Clear Email</button>
                </div>
            )}

        </form>
    </div>
    )
}

export default Condicional;