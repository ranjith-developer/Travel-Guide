import './index.css'

const TravelList = props => {
  const {travelDetails} = props
  const {imageUrl, description, name} = travelDetails
  return (
    <div className="list-items">
      <img src={imageUrl} alt={name} className="image" />
      <div className="details">
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}
export default TravelList
