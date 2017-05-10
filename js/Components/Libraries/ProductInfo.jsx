import React from 'react'
import AddToCartForm from './AddToCartForm.jsx'

class ProductInfo extends React.Component {
    render() {
        return <div className='product-info'>
            <div className='title'>
                <h2>{this.props.name}</h2>
                <span>({this.props.price} PLN)</span>
            </div>
            <hr />
            <p className='description'>
                {this.props.description}
            </p>
            <hr />
            <div className='add-to-cart'>
                {
                    this.props.available ? <AddToCartForm
                    btnHandleClick={this.props.btnHandleClick}
                    qntHandleChange={this.props.handleQuantityChange}
                    quantity={this.props.quantity} /> : <span className='unavailable'>Product unavailable</span>

                }
            </div>

        </div>
    }
}

export default ProductInfo
