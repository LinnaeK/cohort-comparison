import React, { useCallback, useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import "./Slider.css"
import ValueLabel from "../ValueLabel/ValueLabel"

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef(null)

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    const ele = document.querySelector('.minBubble')
    const arw = document.querySelector('.minArrow')
    if (ele && arw) {
      ele.style.left = `${Number(minVal * 10)}px`
      arw.style.left = `${Number(minVal * 10)}px`
    }

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent])

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    const ele = document.querySelector('.maxBubble')
    const arw = document.querySelector('.maxArrow')
    if (ele && arw) {
      ele.style.left = `${Number(maxVal * 10)}px`
      arw.style.left = `${Number(maxVal * 10)}px`
    }

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent])

  return (
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
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="maxBubble bubble"> {maxVal} </div>
        <div className="arrowDown maxArrow"></div>
        <div className="slider__right-value">{maxVal}</div>
        <div className="minBubble bubble"> {minVal} </div>
        <div className="arrowDown minArrow"></div>
      </div>
    </div>
  )
}

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default MultiRangeSlider
