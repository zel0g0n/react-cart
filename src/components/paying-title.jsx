import React from 'react'
class PayingTitle extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="paying__title">
        <h3 className="paying__title-title">Card Details</h3>
        <img src="./user-ave.png" alt="ave" className="paying__title-img" />
      </div>
    )
  }
}

export {PayingTitle}