import {useEffect} from 'react'

import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import useBookContext from './hooks/use-book-context'

export default function App() {
    const { fetchBooks } = useBookContext()

    useEffect(()=>{
        fetchBooks()
    }, [fetchBooks])

    return (
        <div className="relative w-screen h-screen">
            <h1 className="text-lg">
                Reading list
            </h1>
            <div className="flex flex-wrap">
                <BookList />
            </div>
            <BookCreate />
        </div>
    )
}