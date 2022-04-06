import './RadioGroup.css'

const RadioGroup = ({label, options, value, handleRadioClick, displayNumber}) => {
  return (
    <div>
      <div className="radioGroupLabel">{label}</div>
      <div className="radioGroup" >
        {
          Object.keys(options).map(function(option, i){ return i<displayNumber ? (
            <label 
              htmlFor={i} 
              className="radioLabel"
              key={i}
            >
              <input
                type="radio"
                value={option}
                name='sport'
                checked={value===option}
                onChange={option => handleRadioClick(option)}
                style={{'font-weight': value===option ? 700 : 'normal'}}
              /> {options[option]}
            </label> 
          ) :  ''})
        }
      </div>
    </div>
  )
}

export default RadioGroup