import React from "react";
import styles from './ComparisonForm.module.css'
import Slider from '../Slider/Slider'

class ComparisonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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

  render() {
    return (
      <div className={styles.body}>
        <div className={styles.MainHeader}>Cohort Comparison Filters</div>
        <div className={styles.container}>
          <Slider 
            min={this.state.startingWeightRange.min}
            max={this.state.startingWeightRange.max}
            onChange={(ranges) => this.handleRangeChange(ranges)}
            categoryLabel="Weight Range (lbs)"
            type="number"
            step={15}
          />
          <Slider 
            min={this.state.startingHeightRange.min}
            max={this.state.startingHeightRange.max}
            onChange={(ranges) => this.handleRangeChange(ranges)}
            categoryLabel="Height Range (feet-inches)"
            type="number"
            step={4}
          />
        </div>
        <div className={styles.MainFooter}>Footer with Buttons</div>
      </div>
    )
  }
}

export default ComparisonForm