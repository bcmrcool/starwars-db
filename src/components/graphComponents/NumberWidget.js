import React, { Component } from 'react';
import PropTypes from 'prop-types'
// Import components
import Widget from './Widget';
import NumberDisplay from './NumberDisplay';

//Import styling
import '../styles/NumberWidget.css';

class NumberWidget extends Component {
    showWidget() {
        if (this.props.value === undefined) {
            return <p>Loading...</p>;
        }

        return <div className="NumberWidget">
            <NumberDisplay max={this.props.max} value={this.props.value} />
            Born: &nbsp; {this.props.era}
            {/* show the progress bar */}
        </div>
    }


    render() {
        return (
            <Widget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} loading={this.props.loading}>
                {this.showWidget()}
            </Widget>
        );
    }
}

// Enforce the type of props to send to this component
NumberWidget.propTypes = {
    heading: PropTypes.string,
    colspan: PropTypes.number,
    rowspan: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
}

export default NumberWidget;