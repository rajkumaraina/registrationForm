import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    emptyFirstname: false,
    emptyLastname: false,
    success: false,
  }

  onSubmitButton = async event => {
    event.preventDefault()
    const {firstname, lastname, success} = this.state
    if (success === true) {
      this.setState({success: false})
    } else {
      if (firstname === '') {
        this.setState({emptyFirstname: true})
      } else {
        this.setState({emptyFirstname: false})
      }
      if (lastname === '') {
        this.setState({emptyLastname: true})
      } else {
        this.setState({emptyLastname: false})
      }
      if (firstname !== '' && lastname !== '') {
        this.setState({
          success: true,
          firstname: '',
          lastname: '',
          emptyFirstname: false,
          emptyLastname: false,
        })
      }
    }
  }

  firstNameChange = event => {
    this.setState({firstname: event.target.value})
  }

  lastNameChange = event => {
    this.setState({lastname: event.target.value})
  }

  onBlurEventFirstName = event => {
    if (event.target.value === '') {
      this.setState({emptyFirstname: true})
    } else {
      this.setState({emptyFirstname: false})
    }
  }

  onBlurEventLastName = event => {
    if (event.target.value === '') {
      this.setState({emptyLastname: true})
    } else {
      this.setState({emptyLastname: false})
    }
  }

  render() {
    const {
      firstname,
      lastname,
      emptyFirstname,
      emptyLastname,
      success,
    } = this.state
    let container
    if (success === true) {
      container = (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
            className="successImg"
          />
          <p className="successHeading">Submitted Successfully</p>
          <button type="submit" className="submitAnotherButton">
            Submit Another Response
          </button>
        </>
      )
    } else {
      container = (
        <>
          <label htmlFor="firstname" className="labelElement">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstname"
            className={emptyFirstname ? 'inputElement empty' : 'inputElement'}
            onBlur={this.onBlurEventFirstName}
            onChange={this.firstNameChange}
            value={firstname}
            placeholder="First name"
          />
          {emptyFirstname ? <p className="required">Required</p> : null}
          <label htmlFor="lastname" className="labelElement">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastname"
            className={emptyLastname ? 'inputElement empty' : 'inputElement'}
            onBlur={this.onBlurEventLastName}
            onChange={this.lastNameChange}
            value={lastname}
            placeholder="Last name"
          />
          {emptyLastname ? <p className="required">Required</p> : null}
          <button type="submit" className="submitButton">
            Submit
          </button>
        </>
      )
    }
    return (
      <div className="mainContainer">
        <h1 className="heading">Registration</h1>
        <form className="formElement" onSubmit={this.onSubmitButton}>
          {container}
        </form>
      </div>
    )
  }
}
export default RegistrationForm
