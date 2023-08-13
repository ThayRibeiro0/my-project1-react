//first create the form and after import the hook
import { useState } from 'react';

function Form(){
    function userRegister(e){
        e.preventDefault()
        console.log(`Registered the user ${name} with the password: ${password}`)
        // console.log(name)
    //  //fluxo spa - e.preventDefault()
    //     console.log('User registered')
    }

    const [name, setName] = useState() 
    const [password, setPassword] = useState() 
    // and with value default below
    // const [name, setName] = useState('Matheus')

    return (
        <div>
            <h1>My register</h1>
            <form onSubmit={userRegister}>
                <div>
                  {/* plus labels and id and name and onChange and with value default*/}
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Type your name" 
                    // value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                {/* plus the password */}
                <div>
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Type your password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Register"/>
                </div>
            </form>
        </div>
    )
}

export default Form;