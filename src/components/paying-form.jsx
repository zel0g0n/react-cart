import { PayingInfo } from "./paying-info"
import { PayingButton } from "./paying-button"
function PayingForm() {


  return (
    <form action="" className="paying__form">
      <div className="playing__form-name playing__form-item">
        <p className="name-title">Name on card</p>
        <input type="text" placeholder="Name" name="name" className="name-inp" />
      </div>
      <div className="playing__form-number playing__form-item">
        <p className="name-title">Card Number</p>
        <input type="number" placeholder="1111 2222 3333 4444" name="card-number" className="card-num-inp" />
      </div>
      <div className="addiotanal-data playing__form-item">
        <div className="playing__form-date">
          <p className="name-title">Expiration date</p>
          <input type="number" placeholder="mm/yy" name="date" className="date-inp" />
        </div>
        <div className="playing__form-cvv">
          <p className="name-title">CVV</p>
          <input type="number" placeholder="123" name="cvv" className="cvv-inp" />
        </div>
      </div>
      <PayingInfo></PayingInfo>
      <PayingButton/>

    </form>
  )
}

export {PayingForm}