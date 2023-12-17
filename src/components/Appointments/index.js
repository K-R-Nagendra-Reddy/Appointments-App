// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    appointmentsList: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    const dateDate = new Date(event.target.value)
    const newDate = format(dateDate, 'dd MMMM yyyy, EEEE')
    console.log(newDate)
    this.setState({date: newDate})
  }

  addAppointment = event => {
    const {title, date} = this.state
    event.preventDefault()
    console.log('add appointment clicked')
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isFavorite: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onClickedStar = id => {
    console.log('nagendra nagendra nagdndra')
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (each.id === id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  starredAppointments = () => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.filter(
        eachApp => eachApp.isFavorite === true,
      ),
    }))
  }

  render() {
    const {appointmentsList} = this.state
    const id = uuidv4()
    console.log(`id is ${id}`)
    return (
      <div className="bg-container">
        <h1>Appointments</h1>
        <div className="cards-container">
          <div className="inputs-image">
            <div className="inputs-container">
              <form onSubmit={this.addAppointment}>
                <h1 className="heading">Add Appointments</h1>
                <div className="input-label">
                  <label htmlFor="title">TITLE</label>
                  <input type="text" id="title" onChange={this.onChangeTitle} />
                </div>
                <div className="input-label">
                  <label htmlFor="date">DATE</label>
                  <input type="date" id="date" onChange={this.onChangeDate} />
                </div>
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="separator" />

          <ul className="ul-container">
            <div className="heading-starred">
              <button
                type="button"
                className="starred"
                onClick={this.starredAppointments}
              >
                Starred
              </button>
            </div>
            {appointmentsList.map(each => (
              <AppointmentItem
                key={each.id}
                details={each}
                onClickedStar={this.onClickedStar}
                starredAppointments={this.starredAppointments}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
