import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'

function Subtotal() {

    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                <>
                    <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType="text"
                thousandSeparator={true}
                prefix={"$"}
            />
            <button
                // onClick={(e) => {
                // dispatch({
                //     type: "SET_DRAWER",
                //     toggle: false,
                // });
                // history.push("/payment");
                // }}
            >
                Proceed to checkout
            </button>
    </div>
    )
}

export default Subtotal