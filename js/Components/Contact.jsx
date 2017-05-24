import React from 'react'

class Contact extends React.Component {
    constructor(){
        super();
        this.state = {
            email: 'elegant.shop@example.com'
        }
    }

    render() {
        return <div>
            <h4>Contact with us:</h4><br/>

            <address>
                <strong className='contact-elements'>Address:</strong>
                <br/>70 Bowman St. <br/>South Windsor, CT 06074
            </address>

            <address>
                <strong className='contact-elements'>Phone number:</strong><br/> +1-202-555-0111
            </address>
            <address>
                <strong className='contact-elements'>E-mail:</strong>
                <br/>
                    <a href={"mailto:" + this.state.email}>{this.state.email}</a>
            </address>
            <address>
                <strong className='contact-elements'>Question?:</strong><br/>
                    <form>
                        <div className="form-group">
                            <textarea placeholder='Enter message' className="form-control contact-form " rows="3" /><br/>
                            <label htmlFor="exampleInputEmail1">Enter your e-mail address: </label><br/>
                            <input type="email" className="form-control contact-form " id="exampleInputEmail1" placeholder="email" /><br/>
                            <button type='submit' className='btn btn-warning pull-left'>Send</button>
                        </div>

                    </form>


            </address>
            </div>
    }
}



export default Contact
