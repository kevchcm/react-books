import {useEffect, useState} from 'react'
import axios from 'axios'

import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

export default function App() {
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')

        setBooks(response.data)
    }

    useEffect(()=>{
        fetchBooks()
    }, [])

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title: title
        })

        //the json-api library creates an ID so we don't need to generate that
        const updatedBooks = [...books, response.data]
        setBooks(updatedBooks)
    }

    const deleteBookById = async id => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`)

        const updatedBooks = books.filter((book)=>{
            return book.id !== id
        })

        setBooks(updatedBooks)
    }

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })

        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return {...book, ...response.data}
            }

            return book
        })

        setBooks(updatedBooks)
    }

    return (
        <div className="relative w-screen h-screen">
            <h1 className="text-lg">
                Reading list
            </h1>
            <div className="flex flex-wrap">
                <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            </div>
            <BookCreate onCreate={createBook}/>
        </div>
    )
}