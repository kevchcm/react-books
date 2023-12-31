import {useState} from 'react'
import useBookContext from '../hooks/use-book-context'

function BookEdit({book, onSubmit}) {
    const { editBookById } = useBookContext()

    const [title, setTitle] = useState(book.title)

    const handleChange = (event) => setTitle(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit()
        editBookById(book.id, title)
    }

    return (
        <div className="w-full mt-3">
            <form onSubmit={handleSubmit}>
                <label>
                    Edit title
                </label>
                <input
                    className="block w-full mt-2 border border-gray-300 text-black rounded-lg p-2"
                    type="text"
                    value={title}
                    onChange={handleChange}/>
                <button className="bg-teal-500 text-white px-4 py-2 rounded-lg border border-teal-500 mt-4 text-sm">
                    Save
                </button>
            </form>
        </div>
    )
}

export default BookEdit