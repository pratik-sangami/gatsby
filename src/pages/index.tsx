import * as React from 'react'

import { Link } from 'gatsby'

import Dashboard from '../components/layout'



const IndexPage = () => {
  return (
    <Dashboard>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/asd">About</Link>
    </Dashboard>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage