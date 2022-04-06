import React from "react";
import styles from './ComparisonForm.module.css'
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider'
import Sports from '../Sports/Sports'
import Positions from '../Positions/Positions'

class ComparisonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        sport: '',
        position: ''
      },
      startingWeightRange: {
        min: 70,
        max: 295
      },
      currentWeightRange: {
        min: 70,
        max: 295
      },
      startingHeightRange: {
        min:56, 
        max: 84
      },
      currentHeightRange: {
        min: 56,
        max: 84
      }
    }
  }

  handleRangeChange = (rangeType, ranges) => {
    this.setState({
      ...this.state,
      [rangeType]: ranges
    })
  }

  handleRadioClick = (radioType, e) => {
    console.log('radioType', radioType, 'e', e.target.value)
    this.setState({
      ...this.state,
      [radioType]: e.target.value
    })
  }

  handlCancelClick = () => {
    console.log('handle cancel')
  }

  handleSubmitClick = () => {
    console.log(JSON.stringify(this.state.form))
  }

  render() {
    return (
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.MainHeader}>Cohort Comparison Filters</div>
          <MultiRangeSlider
            key="weight" 
            min={this.state.startingWeightRange.min}
            max={this.state.startingWeightRange.max}
            onChange={(ranges) => this.handleRangeChange(ranges)}
            categoryLabel="Weight Range (lbs)"
            type="number"
            step={15}
          />
          <MultiRangeSlider
            key="height" 
            min={this.state.startingHeightRange.min}
            max={this.state.startingHeightRange.max}
            onChange={(ranges) => this.handleRangeChange(ranges)}
            categoryLabel="Height Range (feet-inches)"
            type="feet-inches"
            step={4}
          />
          <Sports
            key="sportRadio"
            selectedSport={this.state.form.sport}
            handleRadioClick={(selection)=>this.handleRadioClick('sport', selection)}
          />
          <Positions
            key="positionRadio"
            selectedPosition={this.state.form.position}
            handleRadioClick={(selection)=>this.handleRadioClick('position', selection)}
          />
        </div>
        <div className={styles.MainFooter}>
          <input
            className={styles.cancelButton}
            type="button"
            onClick={this.handlCancelClick}
            value="Cancel"
          />
          <div className={styles.outerSubmitButton}>
            <input
              className={styles.submitButton}
              type="button"
              onClick={this.handleSubmitClick}
              value="Apply Filters"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ComparisonForm