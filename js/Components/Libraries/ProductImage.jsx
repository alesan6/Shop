import React from 'react'

class ProductImage extends React.Component {
    render() {
        return <img className="main-product-photo" src={this.props.url} />
    }
}

export default ProductImage
