import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/form.css'
import axios from 'axios'

export default class SignUp extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor () {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    headleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    headleSubmit = (e) => {
        const api =  'http://localhost:3001/api/signup/';
        axios.post(api, {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,  
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        e.preventDefault()
    }

    render() {
        return (
            <div className="form__wraper">
                <form className="form" onSubmit={this.headleSubmit}>
                    <div className="form__group">
                        <label className="form__label">Email</label>
                        <input onChange={this.headleChange} name="email" className="form__control" type="email"></input>
                    </div>
                    <div className="form__group">
                        <label className="form__label">password</label>
                        <input onChange={this.headleChange} name="password" className="form__control" type="password"></input>
                    </div>
                    <div className="form__group">
                        <label className="form__label">School Name</label>
                        <input onChange={this.headleChange} name="name" className="form__control" type="text"></input>
                    </div>
                    <div className="btn__group">
                        <input className="btn" type="submit" value="Create"></input>
                    </div>
                </form>
            </div>
        )
    }
}
