import {useState} from 'react'
import useBookContext from '../hooks/use-book-context'

function BookCreate({ onCreate }) {
    const { createBook } = useBookContext()
    const [title, setTitle] = useState('')

    const handleChange = event => setTitle(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        createBook(title)
        setTitle('')
    }

    return (
        <div className="fixed bottom-0 w-full bg-teal-500 text-white p-10">
            <h1 className="text-lg font-bold">
                Add a book
            </h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label className="block" htmlFor="title">
                        Title
                    </label>
                    <input className="block w-[400px] border border-gray-300 text-black rounded-lg p-2" type="text" value={title} onChange={handleChange}/>
                    <button className="bg-white text-black px-4 py-2 rounded-lg border border-gray-300 mt-4 text-sm" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BookCreate