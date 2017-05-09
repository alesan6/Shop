import React from 'react'
import config from '../config.js'
import ProductImage from './Libraries/ProductImage.jsx'
import ProductImages from './Libraries/ProductImages.jsx'

//params - jesli w adresie url cos zmieniamy, dynamicznie, (product/:id), w didmount pobiera to ze state.
class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {},
            id: this.props.params.id
        }
    }

    componentDidMount() {
        fetch(config.apiUrl + '/product/' + this.state.id)
        .then(response => response.json())
        .then(responseJson => {
            this.setState({
                product: responseJson.product
            })
        })
    }

    render() {
        return <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
                <div className="col-md-6 col-sm-12">
                    

                </div>
                <div className="col-md-6 col-sm-12">
                </div>
            </div>

        </div>
    }

}

export default Product
