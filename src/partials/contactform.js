import React from 'react'

const ContactForm = props => {
  const content = props.content

  return (
    <form
      method="post"
      name="ContactLeads"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="contact-form"
    >
      <p style={{ display: "none" }}>
        <input name="bot-field" />
      </p>
      <div className="form-row clearfix">
        <div className="form-element fe-half">
          <input type="text" name="name" placeholder="Name *" required />
        </div>
        <div className="form-element fe-half">
          <input type="text" name="email" placeholder="Email *" required />
        </div>
        </div>
        <div className="form-row clearfix">
          <div className="form-element fe-half">
            <input type="text" name="company" placeholder="Company" />
          </div>
          <div className="form-element fe-half">
            <input type="text" name="phone" placeholder="Phone" />
          </div>
        </div>
        <div className="form-row clearfix">
          <div className="form-element">
            <textarea type="text" name="project_overview" placeholder="Project Overview *" required />
          </div>
      </div>
      <div className="form-row clearfix">
        <div className="form-element" style={{
          textAlign: 'center'
        }}>
          <button>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
