import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Book from './Book'

export default function Main() {
  return (
    <main>
      {/* <Switch>
        <Route>

        </Route>
      </Switch> */}
      <Book />
    </main>
  )
}
