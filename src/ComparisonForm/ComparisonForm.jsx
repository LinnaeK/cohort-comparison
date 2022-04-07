import React from "react";
import styles from './ComparisonForm.module.css'
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider'
import Sports from '../Sports/Sports'
import Positions from '../Positions/Positions'

class ComparisonForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleRangeChange=this.handleRangeChange.bind(this)
    this.handleRadioClick=this.handleRadioClick.bind(this)
    this.handleCancelClick=this.handleCancelClick.bind(this)
    this.handleSubmitClick=this.handleSubmitClick.bind(this)
    this.state = {
      form: {
        sport: '',
        position: '',
        weight: {
          min: 70,
          max: 295
        },
        height: {
          min: 62,
          max: 82
        }
      },
      startingWeight: {
        min: 70,
        max: 295
      },
      startingHeight: {
        min:62, 
        max: 82
      },
    }
  }

  handleRangeChange = (rangeType, ranges) => {
    console.log('handleRangeChange', rangeType, ranges)
    const updatedForm = {
      ...this.state.form,
      [rangeType]: ranges
    }
    this.setState({
      form: updatedForm
    })
  }

  handleRadioClick = (radioType, e) => {
    console.log('radioType', radioType, 'e', e.target.value)
    const updatedForm = {
      ...this.state.form,
      [radioType]:e.target.value,
    }
    console.log('updatedForm', updatedForm)
    this.setState({
      form: updatedForm
    })
    console.log('set', this.state.form.sport)
  }

  handleCancelClick = () => {
    this.setState({
      form: {
        sport: '',
        position: '',
        weight: {
          min: 70,
          max: 295
        },
        height: {
          min: 62,
          max: 82
        }
      },
    })
  }

  handleSubmitClick = () => {
    console.log(`You have selected: ${JSON.stringify(this.state.form)}`)
  }

  render() {
    return (
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.MainHeader}>Cohort Comparison Filters</div>
          <MultiRangeSlider
            key="weight" 
            min={this.state.startingWeight.min}
            max={this.state.startingWeight.max}
            minVal={this.state.form.weight.min}
            maxVal={this.state.form.weight.max}
            onChange={this.handleRangeChange}
            categoryLabel="Weight Range (lbs)"
            type="weight"
            step={15}
          />
          <MultiRangeSlider
            key="height" 
            min={this.state.startingHeight.min}
            max={this.state.startingHeight.max}
            minVal={this.state.form.height.min}
            maxVal={this.state.form.height.max}
            onChange={this.handleRangeChange}
            categoryLabel="Height Range (feet-inches)"
            type="height"
            step={4}
          />
          <Sports
            key="sportRadio"
            value={this.state.form.sport}
            handleRadioClick={(selection)=>this.handleRadioClick('sport', selection)}
          />
          <Positions
            key="positionRadio"
            selectedPosition={this.state.form.position}
            handleRadioClick={(selection)=>this.handleRadioClick('position', selection)}
            sportSelection={!!this.state.form.sport}
          />
        </div>
        <div className={styles.MainFooter}>
          <input
            className={styles.cancelButton}
            type="button"
            onClick={this.handleCancelClick}
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