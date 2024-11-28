import "../Cart/CartItems.css"

function CartItems(){
 return(
   <>
    {/**---CART ITEMS---- */}

    <div className="cart-items">
            <h2>Cart (COUNTER)</h2>
            <hr />

            <div className="cart-items-section">
              <div className="cart-items-details">
              <img src="https://placehold.jp/100x100.png" alt="Product Image" />
              <div className="cart-items-titles">
                <h2>Product Name</h2>
                <h3>small small details</h3>
                <h6>smaller smaller details</h6>

              </div>

              </div>
              <hr />

              <div className="cart-items-prices">
              <h2>Ksh (Price)</h2>
              <h4>Ksh (Discount)</h4>
              <hr />

              <div className="cart-item-increment">
                <button>-</button>
                <input type="text" readOnly />
                <button>+</button>
              </div>
              </div>
            <button className="cart-remove-btn"><RiDeleteBinLine/> </button>

            </div>

          </div>
   </>
 );
}

export default CartItems;