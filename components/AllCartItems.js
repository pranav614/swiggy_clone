import React from "react";
import { subMenuImg_Url } from "../utils/constants";
import { setCount } from "../utils/totalPrice";
import { addPrice, decreasePrice } from "../utils/totalPrice";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";



const AllCartItems = (props) => {
  const { item } = props;
  const count = useSelector((store) => store.total.counts[item?.arrayRes?.card?.info?.id] || 1);
  const store=useSelector((store)=> store.cart.cartItems)
  console.log(store)
  const dispatch=useDispatch();
  const name = item?.arrayRes?.card?.info?.name;
  const description = item?.arrayRes?.card?.info?.description;
  const price = item?.arrayRes?.card?.info?.price;
  const defaultPrice = item?.arrayRes?.card?.info?.defaultPrice;
  const imageId = item?.arrayRes?.card?.info?.imageId;
  const id = item?.arrayRes?.card?.info?.id;
  const handleIncrement=(price,id)=>{
    dispatch(addPrice(price));
    dispatch(setCount({ itemId: id, count: count + 1 }));
  }
  const handleDecrement=(price,id)=>{
    dispatch(decreasePrice(price));
    dispatch(setCount({ itemId: id, count: count -1  }));
  }
  const handleRemove=(id)=>{
    dispatch(removeItem(id));
  }

  return (
    <div>
      <div className="cart-container">
        <div className="cart-data mb-4">
          <div className="col g-0">
            <div className="inner-data menuDescription">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                  <strong>Rs</strong> {price / 100 || defaultPrice / 100}
                  <small className="text-body-secondary"></small>
                </p>
                <div className="cart-increment-decrement">
                 {count>1?<span onClick={()=>handleDecrement(price/100||defaultPrice/100,id)} ><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-440v-80h560v80H200Z"/></svg></span>:
                  <span ><svg onClick={()=>handleRemove(id)} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></span>
                  
                 } 
                  <span> {count}</span>
                  <span onClick={()=>handleIncrement(price/100||defaultPrice/100,id)} ><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></span>
                </div>
              </div>
              <div className="col-md-4 menu-img">
                <img
                  src={subMenuImg_Url + imageId}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCartItems;