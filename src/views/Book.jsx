import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Book() {
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const value = new URLSearchParams(location.search).get('select') ?? 'all';
  const [oldTest, setOldTest] = useState(false);
  const [newTest, setNewTest] = useState(false);
  const [test, setTest] = useState([]);
  // const [value, setValue] = useState('all');
  const [bibleBooks, setBibleBooks] = useState([]);

  console.log('value :>> ', value);
  function getStatus(e) {
    // const statusFromParam = new URLSearchParams(location.search).get('select');
    // console.log('statusFromParam :>> ', location);
    history.push(`/?select=${e.target.value}`);
  }

  useEffect(() => {
    
    const updatedTestHandler = () => {
      // setValue(e.target.value)
      
      if (value === 'all') {
        history.push('/');
        setOldTest(false)
        setNewTest(false)
      }
      if (value === 'new') {
        setOldTest(false)
        setNewTest(true)
        setTest(bibleBooks.slice(39, 66));
        console.log('test :>> ', test);
        // history.push('/?select=new');
      }
      if (value === 'old') {
        setOldTest(true)
        setNewTest(false)
        setTest(bibleBooks.slice(0, 39));
        // console.log('test :>> ', test);
        history.push('/?select=old');
      }
      console.log(location)
      // setValue(location.search)
    };
    updatedTestHandler();
  
    
  }, [value, location.search, bibleBooks])
  

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
      // console.log('json', json)
      // setOldTest(json.slice(0,38))
      // setNewTest(json.slice(39,66))
      setBibleBooks(json)
      setIsLoading(false)
    }
    getBooksOfBible();
    // console.log('hi');
  }, []);

  return (
    <>
      {isLoading ? (
        <h3>Bible Books are Loading...</h3>
      ) : (
        <div>
          <h2>Books of the Bible</h2>
          <label htmlFor="testament"></label>
          <select value={value} onChange={getStatus} id="testament">
            <option value="all">All</option>
            <option value="old">Old Testament</option>
            <option value="new">New Testament</option>
          </select>

          {!oldTest && !newTest ? (
            <div>
              {bibleBooks.map((bibleBook, i) => (
                <Link to={`/bookID/${i}`} key={i}>
                  <p>{bibleBook}</p>
                </Link>
              ))}
            </div>
          ) : !oldTest && newTest ? (
            <div>
              {test.map((bibleBook, i) => (
                <Link to={`/bookID/${i}`} key={i}>
                  <p>{bibleBook}</p>
                </Link>
              ))}
            </div>
          ) : oldTest && !newTest ? (
            <div>
              {test.map((bibleBook, i) => (
                <Link to={`/bookID/${i}`} key={i}>
                  <p>{bibleBook}</p>
                </Link>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
      )}
    </>
  );
}
