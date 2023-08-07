import {useContext, useState} from 'react'
import BookEdit from './BookEdit'
import BooksContext from '../context/books'

function BookShow({ book }) {
    const { deleteBookById } = useContext(BooksContext)
    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = ()=>{
        deleteBookById(book.id)
    }

    const handleEditClick = () => setShowEdit(!showEdit)

    const handleSubmit = () => setShowEdit(false)

    return (
        <div className="relative flex flex-col justify-center items-center px-4 py-6 rounded-lg m-10 w-[300px] border border-gray-300 shadow-lg">
            <img className='mt-4 rounded-md' src={`https://picsum.photos/id/${book.id}/300/200`} alt={book.title}/>
            { showEdit ? <BookEdit book={book} onSubmit={handleSubmit}/> : <h1 className="mt-4">{book.title}</h1> }
            <div className="absolute right-1 top-1">
                <button onClick={handleEditClick}>
                    <i className="fa-solid fa-pen-to-square text-gray-600"></i>
                </button>
                <button className="ml-2" onClick={handleDeleteClick}>
                    <i className="fa-solid fa-circle-minus text-red-500"></i>
                </button>
            </div>
        </div>
    )
}

export default BookShow