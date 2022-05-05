import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
const { id } = useParams()
const [item, setItem] = useState('')
const [isLoading, setIsLoading] = useState(true)
useEffect(() => {
  async function fetchID() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'multilingual-bible.p.rapidapi.com',
        'X-RapidAPI-Key': '6619b0d402mshbef2e4dc706792fp1e3876jsn655f3e2729c8'
      }
    };
    
    const books = await fetch('https://multilingual-bible.p.rapidapi.com/kingjames/bible/english/allbooknames', options)
    const json = await books.json()
    // console.log('json', json)
    // setBibleBooks(json)
    setItem(json[id])
    setIsLoading(false)
  }
  fetchID()
}, [])

  return (
    <div>
      { isLoading ? <h4>Loading Book...</h4> :
<h4>Hey, {item} here, my Book Number is {Number(id) + 1}</h4>
      }
    </div>
  )
}
