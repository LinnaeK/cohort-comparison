import RadioGroup from '../RadioGroup/RadioGroup.js'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Sports.css'

const Sports = function({value, handleRadioClick}) {
  const [sportOptions ] = useState({
    'all' : 'All',
    'baseball':'Baseball',
    'basketball': 'Basketball',
    'football': 'Football',
    'hockey':'Hockey',
    'soccer': 'Soccer',
    'softball' : 'Softball',
    'trackAndField': 'Track & Field',
    'volleyball':'Volleyball',
    'golf':'Golf',
    'tennis': 'Tennis',
    'weightlifting':'Weightlifting', 'moreSports':'More Sports'
  })
  const [displayNumber, setDisplayNumber] = useState(12)

  const handleShowAllClick = () => {
    setDisplayNumber(Object.keys(sportOptions).length)
  }

  return (
    <div className="sportContainer">
      <div> {value} </div>
      <RadioGroup 
        label="Sports"
        options={sportOptions}
        value={value}
        handleRadioClick={(selection) => handleRadioClick(selection)}
        displayNumber={displayNumber}
      />
      <div 
        onClick={handleShowAllClick}
        className="showSports"
      >
        <FontAwesomeIcon 
          icon={faChevronDown}
          className="icon"
        />
        <div>
          Show All Sports
        </div>
      </div>
    </div>
  )
}

export default Sports