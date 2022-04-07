import React, { useCallback, useEffect, useState, useRef } from "react"
import "./MultiRangeSlider.css"

const MultiRangeSlider = ({ min, max, minVal, maxVal, onChange, categoryLabel, step, type }) => {
  const [minPos, setMinPos] = useState(min*9.4)
  const [maxPos, setMaxPos] = useState(max*9.4)
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef(null)
  const multiplier = 73.5/(max-min)

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  // Reset values to default
  const handleClearClick = () => {
    minValRef.current=min
    maxValRef.current=max
    onChange(type, { min: min, max: max })
  }

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    // set bubble position
    setMinPos((minVal-min) * multiplier)

    // set slider position
    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent, min, multiplier])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    // set bubble position
    setMaxPos(Number(((maxVal-min)*multiplier)))

    // set slider position
    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent, min, multiplier])

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
            minValRef.current = value
            onChange(type, { min: value, max: maxVal })
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
            maxValRef.current = value
            onChange(type, { min: minVal, max: value })
          }}
          className="thumb thumb--right"
          step={step}
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
          <div className="slider__left-value">{minVal}</div>
          <div className="maxBubbleContainer" style={{left: `${maxPos}vw`}}>
            <div className="maxBubble bubble"> {maxVal===max ? 'Over' : ''} {type==="height" ? `${Math.floor(maxVal/12)}' ${maxVal%12}"`:maxVal}
            </div>
            <div className="arrowDown maxArrow"></div>
          </div>
          <div className="slider__right-value">{maxVal}</div>
          <div className="minBubbleContainer" style={{left: `${minPos}vw`}}>
            <div className="bubble"> {minVal===min ? 'Under' : ''} {type==="height" ? `${Math.floor(minVal/12)}' ${minVal%12}"`:minVal} </div>
            <div className="arrowDown"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultiRangeSlider
