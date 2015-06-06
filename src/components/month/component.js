import React from 'react';

import Date from '../date/component';

export default class Month extends React.Component {
  render() {
    return (
      <section className="sd-month">
        <ul className="sd-days">
          <li className="sd-day">Sun</li>
          <li className="sd-day">Mon</li>
          <li className="sd-day">Tue</li>
          <li className="sd-day">Wed</li>
          <li className="sd-day">Thu</li>
          <li className="sd-day">Fri</li>
          <li className="sd-day">Sat</li>
        </ul>

        {this.props.dates.map((date) => (<Date date={date} {...this.props} />))}
      </section>
    )
  }
}