// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {details, onClickedStar} = props
  const {id, title, date, isFavorite} = details
  console.log(id)
  const isFavoriteStar = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    onClickedStar(id)
  }

  return (
    <li className="li-container">
      <div>
        <p className="title-name">{title}</p>
        <p className="dateTiem">{date}</p>
      </div>
      <button data-testid="star" onClick={onClickStar}>
        <img src={isFavoriteStar} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
