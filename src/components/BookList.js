import BookShow from './BookShow'
import useBookContext from '../hooks/use-book-context'

function BookList() {
    const { books } = useBookContext()

    return (
        books.map(book =>(
            <BookShow key={book.id} book={book}/>
        ))
    )
}

export default BookList