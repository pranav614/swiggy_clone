import { useSelector } from "react-redux";

const useRestaurantCart=()=>{
    const itemList = useSelector((store) => store.cart.cartItems);
    const incDecprice=useSelector((store)=>store.total.total);
    const arrayPrices = itemList.map((res) => {
      return res.arrayRes.card.info.price;
    });
    // i first filtered the prices in array then i reduced it.
    const arrayTotal = arrayPrices.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
    return {
        incDecprice,
        arrayTotal,
        itemList,
    }
}
export default useRestaurantCart;