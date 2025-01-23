import React from 'react'

function MailingList({ formData, handleChange, handleSubmit }) {
  return (
    <section className="mailing-list">
      <h2>Join Our Mailing List</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>
        <button type="submit">Subscribe</button>
      </form>
    </section>
  )
}

export default MailingList