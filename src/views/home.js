import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Applications Liaison</title>
        <meta property="og:title" content="Product Applications Liaison" />
      </Helmet>
    </div>
  )
}

export default Home
