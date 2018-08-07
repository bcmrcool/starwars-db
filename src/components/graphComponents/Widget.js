import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Import styling
import '../styles/Widget.css'

class Widget extends Component {
    constructor(props) {
        super(props);

        // Create inline styles to make grid elements span multiple rows/columns
        this.spanStyles = {};
        if (props.colspan !== 1) {
            this.spanStyles.gridColumn = `span ${props.colspan}`;
        }
        if (props.rowspan !== 1) {
            this.spanStyles.gridRow = `span ${props.rowspan}`;
        }        
    }

    render() {
        return (
            <div className={this.props.clickable ? "clickable Widget": "Widget"} onClick={this.props.onClick} style={this.spanStyles}>
                <div className="header">
                    <h2>{this.props.heading}</h2>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Widget.defaultProps = {
    heading: "Unnamed Widget",
    colspan: 1,
    rowspan: 1
}

Widget.propTypes = {
    heading: PropTypes.string,
    colspan: PropTypes.number,
    rowspan: PropTypes.number,
}

export default Widget;