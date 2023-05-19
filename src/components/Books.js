const Books = (props) => {

    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
        </article>
    )

}

export default Books;