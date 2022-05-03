import React, { useEffect, useState } from 'react'

export default function Book() {

const [isLoading, setIsLoading] = useState(true)
const [bibleBooks, setBibleBooks] = useState([])

useEffect(() => {
  const getBooksOfBible = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'multilingual-bible.p.rapidapi.com',
        'X-RapidAPI-Key': '6619b0d402mshbef2e4dc706792fp1e3876jsn655f3e2729c8'
      }
    };
    
    
    
    const books = await fetch('https://multilingual-bible.p.rapidapi.com/kingjames/bible/english/allbooknames', options)
    const json = await books.json()
    console.log('json', json)
    setBibleBooks(json)
    setIsLoading(false)
  }
  getBooksOfBible();
}, [])

  return (
    <>
      {isLoading ? <h3>Bible Books are Loading...</h3> :
      <div>

      <h2>Books of the Bible</h2>
      { bibleBooks.map((bibleBook, i) => (
        <p key={i}>{bibleBook}</p>
        )) }
        </div>
       }
    </>
  )
}
