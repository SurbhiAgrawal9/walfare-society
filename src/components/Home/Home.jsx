import React, { useState } from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import Reviews from '../Reviews/Reviews'
import MailingList from '../MailingList/MailingList'
import Footer from '../Footer/Footer'


function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ firstName: '', lastName: '', email: '' })
    alert('Thank you for subscribing to our mailing list!')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="container">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      
      <img 
        src="/Images/NGO_intro.jpg" 
        alt="Header Banner" 
        className="header-image"
      />

      <main>
        <About />
        <Reviews />
        <MailingList 
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </main>

      <Footer />
    </div>
  )
}

export default Home