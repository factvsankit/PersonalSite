import React from 'react'

const ContactForm = props => {
  const content = props.content

  return (
    <form
      method="post"
      name="ContactLeads"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <p style={{ display: "none" }}>
        <input name="bot-field" />
      </p>
      <input type="text" name="name" placeholder="Name*" required />
      <button>Add your Startup</button>
    </form>
  )
}

export default ContactForm
