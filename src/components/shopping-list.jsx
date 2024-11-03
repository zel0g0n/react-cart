import React from "react";
import PropTypes from 'prop-types'
import { ShoppingListItem } from "./shopping-list-item";
class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {products,onDelete,counterIncrement,counterDecrement} = this.props
    return (
      <ul className="shopping__list">
        {
          products.map(item => {
            return (
              <ShoppingListItem counterIncrement={counterIncrement} counterDecrement={counterDecrement} onDelete={onDelete} key={item.id} productData={item}></ShoppingListItem>
            )
          })
        }
      </ul>
    )
  }
}
ShoppingList.propTypes = {
  products: PropTypes.array,
  onDelete: PropTypes.func,
  counterDecrement: PropTypes.func,
  counterIncrement: PropTypes.func,
}
export {ShoppingList}