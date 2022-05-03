import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Book from './Book'
import Detail from './Detail'

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
      <Book />
        </Route>
        <Route exact path="/bookID/:id">
      <Detail />
        </Route>
      </Switch>
    </main>
  )
}
