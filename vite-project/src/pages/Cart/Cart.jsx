import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../components/Context/StoreContext';
import {useNavigate} from 'react-router-dom';

const Cart = () => {

const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Produits</p>
          <p>Titres</p>
          <p>Prix</p>
          <p>Quantité</p>
          <p>Total</p>
          <p>Supprimé</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if(cartItems[item._id] > 0)
          {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}  €</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price*cartItems[item._id]}  €</p>
                  <p className='cross' onClick={()=> removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </div>

            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sous-total</p>
              <p>{getTotalCartAmount()} €</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Frais de livraison</p>
              <p>{getTotalCartAmount() + 2} €</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <b>Total</b>
            <b>{0}</b>
            </div>
            <button onClick={() => navigate('/order')} >PAYER</button>
          </div>
        </div>
        <div className="cart-promo">
            <div>
              <p>Code Promo</p>
              <div className='cart-promo-input'>
                <input type="text" placeholder='Code Promo' />
                <button>Soumettre</button>
              </div>
            </div>
          </div>
      </div>     
    </div>
  )
}

export default Cart
