import React, {Component} from 'react';
import PropTypes from 'prop-types'

import pensil from '../../../../assets/icon.png'
import './style.css'

class ItemAboutUs extends Component {
    render() {
        const {data} = this.props
        return (
            <div className="ItemAboutUs">
                <img src={data.img} alt="image"/>
                <h3>{data.title}</h3>
                <p>
                    {data.description}
                </p>
            </div>
        )
    }
}
ItemAboutUs.propTypes = {}
export default ItemAboutUs



