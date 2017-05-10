import React from 'react'
import { Link } from 'react-router'

class CartTableRows extends React.Component {
    render() {
        return <tr>
                <td>
                    <img className='mini-photo' src={this.props.photo} alt="photo" />
                </td>
                <td className="cartView">
                    <span className="name">
                        {this.props.name}
                    </span>
                    <span className="price">
                        ({this.props.price} PLN)
                    </span>
                    <span className="quantity">
                    Quantity: {this.props.quantity}
                    </span><br/>
                    <span className="productSum">
                    Sum: {this.props.productSum} PLN
                    </span>
                    <button onClick={this.props.deleteButton} data-id={this.props.id} className="btn btn btn-danger delete-product-button">
                        Delete
                    </button>

                </td>
            </tr>

    }
}

export default CartTableRows
