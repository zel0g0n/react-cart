import React from "react";
import PropTypes from 'prop-types'

class ShoppingListItem extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const {src,alt,foodNumber,price,name,descr,id} = this.props.productData
    const {onDelete,counterIncrement,counterDecrement} = this.props
    return (
      <li className="shopping__list-item">
        <img src={src} alt={alt} className="product-img" />
        <div className="product__info">
          <p className="product__info-name">{name}</p>
          <p className="product__info-descr">{descr}</p>
        </div>
        <div className="product__count">
          <p style={{color: `${(foodNumber==0)?'red':''}`}} className="product__count-num">{foodNumber}</p>
          <div className="counter-buttons">
            <button onClick={() => counterIncrement(id,foodNumber)} className="inc">
              <img src="./counter-icon.png" alt="inc" />
            </button>
            <button onClick={() => counterDecrement(id,foodNumber)} className="dec">
              <img src="./counter-icon.png" alt="dec" />
            </button>
          </div>
        </div>
        <p className="product-price">${price}</p>
        <button onClick={() => onDelete(id)} className="delete-btn">
          <img src="./trash.png" alt="trash" />
        </button>
      </li>
    )
  }
}
ShoppingListItem.propTypes = {
  productData: PropTypes.object,
  onDelete: PropTypes.func,
  counterDecrement: PropTypes.func,
  counterIncrement: PropTypes.func,
}
export {ShoppingListItem}