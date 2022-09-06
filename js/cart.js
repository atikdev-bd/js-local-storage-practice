const getProductById = (id) => {
  const productValue = document.getElementById(id);
  const productValueText = productValue.value;
  productValue.value = "";
  return productValueText;
};

const addProduct = () => {
  const productValue = getProductById("Product-input");
  const quantityValue = getProductById("Quantity-input");
  display(productValue, quantityValue);
  setItemByLocalStorage(productValue, quantityValue);
};

const display = (productValue, quantityValue) => {
    const displayProduct = document.getElementById("display-product");
    const li = document.createElement("li");
    li.innerText = ` ${productValue} : ${quantityValue}`;
    displayProduct.appendChild(li);
  };

const getProductOnLocalStorage = () => {
  let saveCart = localStorage.getItem("cart");
  let cart = {};
  if (saveCart) {
    cart = JSON.parse(saveCart);
  }
  return cart;
};
const setItemByLocalStorage = (productValue, quantityValue) => {
  const cart = getProductOnLocalStorage();
  cart[productValue] = quantityValue;
  const cartStringfied = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringfied);
};



const displayStoreProduct = () => {
  const cart = getProductOnLocalStorage();
  for (const product in cart) {
    const quantity = cart[product]
    display(product,quantity)
  }
};
displayStoreProduct()
