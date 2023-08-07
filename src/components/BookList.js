import BookShow from './BookShow'
import {useContext} from 'react'
import BooksContext from '../context/books'

function BookList() {
    const { books } = useContext(BooksContext)

    return (
        books.map(book =>(
            <BookShow key={book.id} book={book}/>
        ))
    )
}

export default BookList