import { screen, render, waitFor, waitForElementToBeRemoved } from "@testing-library/react"

import { MemoryRouter } from "react-router-dom"
import App from "./App"
import Header from "./views/Header"


test('renders APP', async () => {
  render( <MemoryRouter initialEntries={["/"]}>
  <Header />
  </MemoryRouter>
  )

  // const find = await findByText()
  screen.getByText(/welcome/i)
  // await screen.findByText(/welcome/i)

  //  await waitFor(() => {

  //   // screen.findByText(/loading/i)
  //   expect(findByText(/books/i)).toBeInTheDocument()
  // })
})