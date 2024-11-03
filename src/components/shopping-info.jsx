import React from "react"
import PropTypes from 'prop-types'
class ShoppingInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const length = this.props.products.length
    return (
      <div className="shopping__info">
        <p className="shopping__info-title">
          Shopping cart
        </p>
        <p className="shopping__info-data">
          You have <span className="shopping__info--num">{length}</span> item in your cart
        </p>
      </div>
    )
  }
}
ShoppingInfo.propTypes = {
  products: PropTypes.array
}
export {ShoppingInfo}