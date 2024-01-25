import * as React from 'react'

import { Link } from 'gatsby'

import Dashboard from '../components/layout'

const About = () => {
  return (
    <Dashboard>
        About page
        <Link to="/">Back to Home</Link>
    </Dashboard>
  )
}

export const Head = () => <title>Asd Page</title>

export default About