function Form(){
    function userRegister(e){
        e.preventDefault()
     //fluxo spa - e.preventDefault()
        console.log('User registered')
    }

    return (
        <div>
            <h1>My register</h1>
            <form onSubmit={userRegister}>
                <div>
                    <input type="text" placeholder="Type your name" />
                </div>
                <div>
                    <input type="submit" value="Register"/>
                </div>
            </form>
        </div>
    )
}

export default Form;