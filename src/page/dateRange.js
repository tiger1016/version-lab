import React, { Component } from "react";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./dateRange.css";

import { DateRangePicker } from "react-dates";

class DateRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    return (
      <div className="flex flex-col m-1 relative cursor-default flex-1">
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ startDate, endDate });
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => {
            this.setState({ focusedInput });
          }}
        />
      </div>
    );
  }
}

export default DateRange;
