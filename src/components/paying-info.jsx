function PayingInfo() {

  return (
    <div className="paying__info">
      <div className="paying__info-stroke"></div>
      <div className="paying__info-item">
        <p className="paying__info-item--title">Subtotal</p>
        <p className="paying__info-item--value">$1,668</p>
      </div>
      <div className="paying__info-item">
        <p className="paying__info-item--title">Shipping</p>
        <p className="paying__info-item--value">$4</p>
      </div>
      <div className="paying__info-item">
        <p className="paying__info-item--title">Total (Taxi incl.)</p>
        <p className="paying__info-item--value">$1,672</p>
      </div>
    </div>
  )
}

export {PayingInfo}