function PayingButton() {

  const formHandler = (e) => {
    e.preventDefault()
  }

  return (
    <button className="paying-btn" onClick={e => formHandler(e)}>
      <p className="btn-price">$1,668</p>
      <p className="btn-dir">
        Checkout
        <span>
          <i className="fa-solid fa-arrow-right-long"></i>
        </span>
      </p>
    </button>
  )
}

export {PayingButton}