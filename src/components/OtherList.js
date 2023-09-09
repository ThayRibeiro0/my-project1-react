function OtherList({ items }) {
    return(
        <>
            <h3>Good things' list:</h3>
            {items.lenght > 0 ? (
                items.map((item, index) => (
                <p key={index}>{item}</p>
            ))) : (
                <p>There are no items in the List</p>
            )}
        </>
    )
}

export default OtherList