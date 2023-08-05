import BookShow from './BookShow'

function BookList({ books, onDelete, onEdit }) {
    return books.map(book =>(
        //<div
        //    key={book.id}
        //    className="flex justify-center items-center px-4 py-6 rounded-lg m-10 w-[400px] border border-gray-300 shadow-lg">
        //    <BookShow onDelete={onDelete} key={book.id} book={book} />
        //</div>

        <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
    ))
}

export default BookList