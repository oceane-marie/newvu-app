import React from 'react';
import {useParams} from 'react-router-dom';
import data from "../data/experiencesData";

export default function Form(props) {
  const { experienceId } = useParams();
  const experience = data.find(experience => experience.id === parseInt(experienceId))

  const [inputForm, setInputForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    date: "",
  })

  function handleChange(event) {
    console.log(event.target.value)
    const {name, value, type, checked} = event.target

    setInputForm(prevInputForm => {
      return{
        ...prevInputForm,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("Message successfully sent")
  }


  const dateSelect = experience.dates.map((date) => {
    return(
      <div>
        <input type="radio"
          id={experience.dates.indexOf(date) + 1}
          name="date"
          value={date}
          checked={inputForm.date === date}
          onChange={handleChange}
          className="mt-18"
          ></input>
        <label>{date}</label>
      </div>
     )
    })

  return(
    <div className={`ctr-form
                    ${props.darkMode ? "dark-shadow" : "clear-shadow" }`}>
      <img src={experience.img}
            alt={experience.name}
            className="img-form"/>
      <form className='form-content'
            onSubmit={handleSubmit}>
        <h2>Send a message to {experience.name}</h2>
        <label htmlFor="firstName"
                className='mt-24'>
          First name
        </label>
        <input type="text"
                onChange={handleChange}
                name="firstName"
                value={inputForm.firstName}
                className={props.darkMode ? "dark-input" : ""}>
        </input>
        <label htmlFor="lastName"
                className='mt-24'>
          Last name
        </label>
        <input type="text"
                onChange={handleChange}
                name="lastName"
                value={inputForm.lastName}
                className={props.darkMode ? "dark-input" : ""}>
        </input>
        <label htmlFor="email"
                className='mt-24'>
          Email
        </label>
        <input type="text"
                onChange={handleChange}
                name="email"
                value={inputForm.email}
                className={props.darkMode ? "dark-input" : ""}>
        </input>
        <label htmlFor="message"
                className='mt-24'>
          Message
        </label>
        <textarea onChange={handleChange}
                  name="message"
                  value={inputForm.message}
                  className={props.darkMode ? "dark-input" : ""}>
        </textarea>
        <label htmlFor="date"
                className='mt-24'>
          Select a date
        </label>
        {dateSelect}
        <button className={`btn-send w-100 mt-24
                          ${props.darkMode ? "clear" : "dark"}`}>
          <h3 className='send'>Send</h3>
        </button>
      </form>
    </div>
  )
};
