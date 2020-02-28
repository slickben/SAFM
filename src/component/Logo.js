import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/logo.css'

export default class Logo extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="logo__wraper">
                <div className="logo__frame">
                    <div className="frame-two">
                      <p className="logo__text">SA<span className="logo__stand_out">F</span>M </p>  
                    </div>
                </div>
                <div className="signin-login">
                    <p><a href="#">Sign<span className="sign-in__stand_out">In</span></a>/<a href="#">Log<span className="sign-in__stand_out">In</span></a></p>
                </div>
            </div>
        )
    }
}
