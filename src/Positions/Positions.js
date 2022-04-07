import RadioGroup from '../RadioGroup/RadioGroup.js'
import { useState } from 'react'
import './Positions.css'

const Positions = function({selectedPosition, handleRadioClick, sportSelection}) {
  const [positionOptions ] = useState({
    'headCoach' : 'Head Coach',
    'assistantCoach': 'Assistant Coach',
    'referee' : 'Referee',
    'assistant Referee':'Assistant Referee',
    'player':'Player',
    'leader':'Leader',
  })

  return (
    <div className="positionContainer">
      <RadioGroup 
        label="Positions"
        options={positionOptions}
        value={selectedPosition}
        handleRadioClick={(selection) => handleRadioClick(selection)}
        displayNumber={sportSelection ? Object.keys(positionOptions).length: 0}
      />
      {!sportSelection ? <div className="instruction">
        Select a Sport First
      </div> : ''}
    </div>
  )
}

export default Positions