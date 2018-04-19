import React from 'react'
import axios from 'axios'

class Gf extends React.Component {
  state = {
    gfFieldsRenderer: [],
    gfButtonRenderer: '',
  }
  componentDidMount() {
    axios
      .get(
        'https://manage.netprophets.com.au/gravityformsapi/forms/1/?api_key=314d9f2c59&signature=kEdJLYF5FainC5VeM6f5Bmvw0bg%3D&expires=1524319576'
      )
      .then(response => {
        const result = response.data.response
        console.log(result)
        const gfFields = result.fields.map((field, i) => {
          if (field && field.type == 'text') {
            return (
              <div name="text" key={i}>
                <label htmlFor={field.label}>{field.label}</label>
                <input type={field.type} id={field.id} />
              </div>
            )
          }
          if (field && field.type == 'email') {
            return (
              <div name="email" key={i}>
                <label htmlFor={field.label}>{field.label}</label>
                <input type={field.type} id={field.id} />
              </div>
            )
          }
          if (field && field.type == 'textarea') {
            return (
              <div name="textarea" key={i}>
                <label htmlFor={field.label}>{field.label}</label>
                <textarea id={field.id} />
              </div>
            )
          }
        })
        const gfButton = () => {
          return (
            <div>
              "hello"
              <input type="submit" value="helo" />
            </div>
          )
        }
        const newState = Object.assign({}, this.state, {
          gfFieldsRenderer: gfFields,
          gfButtonRenderer: gfButton,
        })
        this.setState(newState)
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App">
        {this.state.gfFieldsRenderer}
        {this.state.gfButtonRenderer}
      </div>
    )
  }
}

export default Gf
