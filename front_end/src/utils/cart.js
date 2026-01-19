const CART_KEY = "cart";

/* =======================
   GET CART
======================= */
export const getCart = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
};

/* =======================
   SAVE CART
======================= */
const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

/* =======================
   ADD TO CART
======================= */
export const addToCart = (product) => {
  const cart = getCart();
  const index = cart.findIndex(
    item => item.ProductID === product.ProductID
  );

  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
};

/* =======================
   UPDATE QUANTITY  ✅ QUAN TRỌNG
======================= */
export const updateQuantity = (id, delta) => {
  const cart = getCart();

  const updatedCart = cart.map(item => {
    if (item.ProductID === id) {
      const newQty = item.quantity + delta;
      return {
        ...item,
        quantity: newQty < 1 ? 1 : newQty
      };
    }
    return item;
  });

  saveCart(updatedCart);
};

/* =======================
   REMOVE
======================= */
export const removeFromCart = (id) => {
  const cart = getCart().filter(item => item.ProductID !== id);
  saveCart(cart);
};
