import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelList from '../TravelList'

import './index.css'

class TravelGuide extends Component {
  state = {
    travelData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTravelData()
  }

  getTravelData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    console.log(data)

    const packageData = data.packages.map(eachPackage => ({
      id: eachPackage.id,
      description: eachPackage.description,
      imageUrl: eachPackage.image_url,
      name: eachPackage.name,
    }))
    console.log(packageData)
    this.setState({travelData: packageData, isLoading: false})
  }

  render() {
    const {travelData, isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Travel Guide</h1>
        <ul className="travel-list-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={45} width={45} />
            </div>
          ) : (
            travelData.map(eachPackage => (
              <li key={eachPackage.id} className="list-item">
                <TravelList key={eachPackage.id} travelDetails={eachPackage} />
              </li>
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default TravelGuide
