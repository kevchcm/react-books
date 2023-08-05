import {useState} from 'react'

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        onSubmit(book.id, title)
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