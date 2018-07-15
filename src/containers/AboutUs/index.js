import React, {Component} from 'react';
import PropTypes from 'prop-types'

import ItemAboutUs from './components/ItemAboutUs'
import configs from './config.js'
import './style.css'

class Example extends Component {
    render() {
        return (
            <div className="AboutUs">
                {
                    configs.map(item => (
                        <ItemAboutUs
                            data={item}
                        />
                    ))
                }
            </div>
        )
    }
}
Example.propTypes = {}

export default Example