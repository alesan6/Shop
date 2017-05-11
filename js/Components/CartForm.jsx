import React from 'react'
import config from '../config.js'
import AdditionalCartForm from './Libraries/AdditionalCartForm.jsx'
import { hashHistory } from 'react-router'

class CartForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            street: '',
            local: '',
            postcode: '',
            city: '',
            payment: '',
            paymentMethods: [
                'Card',
                'On-line transfer',
                'Cash on delivery'
            ],
            invoice: false,
            nip: '',
            companyName: '',
            extraInfo: '',
            sent: false,
            timeToRedirect: 5

        }
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleSurnameChange = event => {
        this.setState({
            surname: event.target.value
        })
    }

    handleStreetChange = event => {
        this.setState({
            street: event.target.value
        })
    }

    handleLocalChange = event => {
        this.setState({
            local: event.target.value
        })
    }

    handlePostcodeChange = event => {
        this.setState({
            postcode: event.target.value
        })
    }

    handleCityChange = event => {
        this.setState({
            city: event.target.value
        })
    }

    handlePaymentChange = event => {
        this.setState({
            payment: event.target.value
        })
    }

    handleInvoiceChange = event => {
        this.setState({
            invoice: event.target.checked
        })
    }

    handleNipChange = event => {
        this.setState({
            nip: event.target.value
        })
    }

    handleCompanyNameChange = event => {
        this.setState({
            companyName: event.target.value
        })
    }

    handleExtraInfoChange = event => {
        this.setState({
            extraInfo: event.target.value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()
        console.log('Zamówiono!');
        fetch(config.apiUrl + '/createOrderFromCart', {
            method: 'POST',
            body: JSON.stringify({
                cartId: this.props.params.id
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            this.setState({
                sent: true
            })
            localStorage.setItem('cart', responseJson['cartId'])
            let inter = setInterval(()=> {
                this.setState({
                    timeToRedirect: this.state.timeToRedirect -1
                }, () => {
                    if (this.state.timeToRedirect === 0) {
                        clearInterval(inter)
                        hashHistory.push('/')
                    }
                })
            }, 1000)
        })
    }

    render() {
        if (this.state.sent) {
            return <div className='row text-center'>
                <h1>Thank you for your order</h1>
                <p>You will be redirect to main page in ... {this.state.timeToRedirect}</p>
            </div>
        }
        return <div className='row'>
            <div className='col-md-12 col-sm-12'>
                <div className='col-md-12 form-group'>
                    <h2 className='text-center'>Insert data for shipment</h2>
                </div>
                <form onSubmit={this.handleFormSubmit}>
                    <div className='col-md-6'>
                        <div className='col-md-12 form-group'>
                            <input type='text' className="form-control" onChange={this.handleNameChange} placeholder='name' />
                        </div>
                        <div className='col-md-12 form-group'>
                            <input type='text' className="form-control" onChange={this.handleStreetChange} placeholder='street' />
                        </div>
                        <div className='col-md-12 form-group'>
                            <input type='text' className="form-control" onChange={this.handlePostcodeChange} placeholder='postCode' />
                        </div>
                        <div className='col-md-12 form-group'>
                            <select className="form-control" onChange={this.handlePaymentChange}>
                                {
                                    this.state.paymentMethods.map((element, index) => {
                                        return <option key={index}>{element}</option>
                                    })
                                }

                            </select>
                        </div>
                            {
                                this.state.invoice ? <AdditionalCartForm handleNipChange={this.handleNipChange}
                                                                         handleCompanyNameChange={this.handleCompanyNameChange} /> : null
                            }
                    </div>
                    <div className='col-md-6'>
                        <div className='col-md-12 form-group'>
                            <input type='text' className="form-control" onChange={this.handleSurnameChange} placeholder='surname' />
                        </div>
                        <div className='col-md-12 form-group'>
                            <input type='text' placeholder='number/local' onChange={this.handleLocalChange} className="form-control" />
                        </div>
                        <div className='col-md-12 form-group'>
                            <input type='text' className="form-control" onChange={this.handleCityChange} placeholder='city' />
                        </div>
                        <div className='col-md-12 form-group'>
                            <input type='checkbox' onChange={this.handleInvoiceChange} /> Invoice
                        </div>
                        <div className='col-md-12 form-group'>
                            <textarea placeholder='info' className="form-control" rows="3" onChange={this.handleExtraInfoChange}/>
                        </div>
                        <div className='col-md-12 form-group'>
                            <button type='submit' className='btn btn-warning pull-right'>Confirm</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default CartForm
