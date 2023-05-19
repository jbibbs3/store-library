import Books from "./Books";
import { useState } from "react";
import NewBook from "./NewBook";
import NewBookForm from "./NewBookForm";


const Shelf = ({genre, books, addBook}) => {
    // const [books, setBooks] = useState(props.books)
    // const addBook = book => setBooks([...books, book])
    return (
        <>
            <h1>{genre}</h1>
            <NewBook addBook={addBook}/>
            <NewBookForm addBook={addBook} />
            <section>
                {
                    books.map((book,index)=> <Books key={index} title={book.title} author={book.author} />)
                }

            </section>
        </>

    )

}

export default Shelf;