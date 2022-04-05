import React, { useCallback, useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import "./Slider.css"

const MultiRangeSlider = ({ min, max, onChange, categoryLabel, step }) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const [minPos, setMinPos] = useState(min*9.4)
  const [maxPos, setMaxPos] = useState(max*9.4)
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef(null)

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  const handleClearClick = () => {
    setMinVal(min)
    minValRef.current=min
    setMaxVal(max)
    maxValRef.current=max
  }

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)
    const multiplier = 73.5/(max-min)

    setMinPos((minVal-min) * multiplier)

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent, max, min])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)
    const multiplier = 73.5/(max-min)

    // setMaxPos(Number((maxVal-min) * 33.6))
    setMaxPos(Number(((maxVal-min)*multiplier)))

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent, max, min])

  return (
    <div>
      <div className="label">
        <div>{categoryLabel}</div>
        <div  
          onClick={handleClearClick}
          className="clear"
        >Clear</div>
      </div>
      <div className="container">
        <input
          id="minValue"
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1)
            setMinVal(value)
            minValRef.current = value
            onChange({ min: minVal, max: maxVal })
          }}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 && "5" }}
          step={step}
        />
        <input
          id="maxValue"
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1)
            setMaxVal(value)
            maxValRef.current = value
            onChange({ min: minVal, max: maxVal })
          }}
          className="thumb thumb--right"
          step={step}
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
          <div className="slider__left-value">{minVal}</div>
          <div className="maxBubbleContainer" style={{left: `${maxPos}vw`}}>
            <div className="maxBubble bubble"> {maxVal===max ? 'Over' : ''} {maxVal} </div>
            <div className="arrowDown maxArrow"></div>
          </div>
          <div className="slider__right-value">{maxVal}</div>
          <div className="minBubbleContainer" style={{left: `${minPos}vw`}}>
            <div className="bubble"> {minVal===min ? 'Under' : ''} {minVal} </div>
            <div className="arrowDown"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  categoryLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  step: PropTypes.number
}

export default MultiRangeSlider
