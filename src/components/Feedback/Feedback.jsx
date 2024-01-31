import React, { Component } from 'react';
// --- Options ---
import Options from './Options.jsx';
// --- Statistics ---
import Statistics from './Statistics.jsx';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    return Math.round((good / totalFeedbacks) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedbacks = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Options
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        ></Options>
        {totalFeedbacks !== 0 && (
          <Statistics
            title="Statistics 📊"
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedbacks={totalFeedbacks}
            positivePercentage={positivePercentage}
          ></Statistics>
        )}
      </>
    );
  }
}