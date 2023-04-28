import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { AmountButtons } from "../../index";
import { Wrapper } from "./AddToCartWrapper";

function AddToCart({ product }) {
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const increase = () => {
    if (amount < stock) {
      setAmount(amount + 1);
    }
  };

  const decrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    } else {
      setAmount(1);
    }
  };
  return (
    <Wrapper>
      <div className="colors">
        <span>colors :</span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? "color-btn active" : "color-btn"
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />

        <Link to="/cart" className="btn">
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
}

export default AddToCart;
