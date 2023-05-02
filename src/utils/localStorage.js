export const getLocalCart = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"))
  } else {
    return []
  }
}
