import React from "react";
import styles from './ComparisonForm.module.css'
import Slider from '../Slider/Slider'

class ComparisonForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startingSizeRange: {
        min: 0,
        max: 100
      },
      currentSizeRange: {
        min: 0,
        max: 100
      }
    }
  }

  handleRangeChange = (ranges) => {
    this.setState({
      ...this.state,
      currentSizeRange: ranges
    })
  }

  render() {
    return (
      <div className={styles.body}>
        <div className={styles.MainHeader}>Cohort Comparison Filters</div>
        <div className={styles.container}>
          <Slider 
            min={this.state.startingSizeRange.min}
            max={this.state.startingSizeRange.max}
            onChange={(ranges) => this.handleRangeChange(ranges)}
          />
          Main Form Elements
          Main Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form ElementsMain Form Elements
        </div>
        <div className={styles.MainFooter}>Footer with Buttons</div>
      </div>
    )
  }
}

export default ComparisonForm