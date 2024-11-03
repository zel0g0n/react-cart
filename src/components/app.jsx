import React from "react"
import { Title } from "./shopping-title"
import { Stroke } from "./stroke"
import { ShoppingInfo } from "./shopping-info"
import { ShoppingList } from "./shopping-list"
import { PayingTitle } from "./paying-title"
import { Cards } from "./cards"
import { PayingForm } from "./paying-form"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          src: './food-1.png',
          alt: 'food-1', 
          foodNumber: 1, 
          price: 628,
          name: 'Italian Pizza',
          descr: 'Extra cheese and toping',
          id: 1
        },
        {
          src: './food-2.png',
          alt: 'food-2', 
          foodNumber: 1, 
          price: 628,
          name: 'Combo Plate',
          descr: 'Extra cheese and toping',
          id: 2
        },
        {
          src: './food-3.png',
          alt: 'food-3', 
          foodNumber: 1, 
          price: 628,
          name: 'Spanish Rice',
          descr: 'Extra garllic',
          id: 3
        },
      ],
      id: 4
    }
  }

  onDelete = (index) => {
    const arr = this.state.products.filter(item => item.id!=index)
    this.setState({products: arr})
  }
  counterIncrement = (index,counter) => {
    if(counter < 10) {
      const arr = this.state.products.map(item => (item.id == index)?{...item,foodNumber: item.foodNumber+1}:item)
      this.setState({products: arr})
    }
  }
  counterDecrement = (index,counter) => {
    if(counter>=1) {
      const arr = this.state.products.map(item => (item.id == index)?{...item,foodNumber: item.foodNumber-1}:item)
      this.setState({products: arr})
    }
    
  }
  render() {
    const {products} = this.state

    return (
      <>
        <div className="app">
          <div className="wrapper">
            <div className="shopping">
              <Title/>
              <Stroke/>
              <ShoppingInfo products={products}/>
              <ShoppingList counterIncrement={this.counterIncrement} counterDecrement={this.counterDecrement} onDelete={this.onDelete} products={products}/>

            </div>
            <div className="paying">
              <PayingTitle/>
              <Cards/>
              <PayingForm/>
            </div>
          </div>
        </div>
      </>
    )
  }
}


export default App
