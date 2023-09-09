function Greatings({name}){

    function createGreatings(someName){
        return `Hi, ${someName}, how are you?`
    }


    return<> 
        {name && <p>{createGreatings(name)} | Greatings</p>}
    </>
}

export default Greatings