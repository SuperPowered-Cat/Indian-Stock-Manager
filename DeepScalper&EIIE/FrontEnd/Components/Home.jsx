import React from 'react'
import Navbar from "../components/Navbar"
import Sidebar from '../components/Sidebar'
import StockChart from '../components/StockChart'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <StockChart />
    </div>
  )
}

export default Home