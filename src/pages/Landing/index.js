import React, {Component} from 'react';
import PropTypes from 'prop-types'

import AboutUs from '../../containers/AboutUs'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import './style.css'

class Example extends Component {
    render() {
        return (
            <div>
                <AboutUs/>
            </div>
        )
    }
}
Example.propTypes = {}
export default Example



