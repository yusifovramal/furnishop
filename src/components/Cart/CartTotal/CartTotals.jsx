
import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/formatPrice";
import { useSelector } from "react-redux";
import { Wrapper } from "./Wrapper";
const CartTotals = () => {
  const { total_amount} = useSelector((store) => store.cart);
  return (
    <Wrapper>
      <div>
        <article>
          <p className="subtotal">
            Subtotal : <span>{total_amount}</span>
          </p>
          {/* <p className="fee">
            Shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p> */}
          <hr />
          <h4>
            Order total : <span>{total_amount}</span>
          </h4>
        </article>
        <Link to="/checkout" className="btn">
          proceed to checkout
        </Link>
      </div>
    </Wrapper>
  );
};


export default CartTotals;
