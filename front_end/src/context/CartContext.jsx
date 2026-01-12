import { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // 1. Kiểm tra bộ nhớ trình duyệt với tên định danh NoName
    const saved = localStorage.getItem("NoName");
    
    // 2. Logic khởi tạo thông minh:
    // Nếu đã từng có dữ liệu (kể cả mảng rỗng []) thì lấy từ localStorage
    if (saved !== null) {
      return JSON.parse(saved);
    }

    // 3. Chỉ hiện dữ liệu mẫu (mockData) LẦN ĐẦU TIÊN khách vào trang
    return [
      {
        ProductID: 999,
        ProductName: "4RAU Winter Tote 2025",
        Price: 99000,
        Image: "https://4rau.vn/vnt_upload/product/12_2024/tote_winter_1.jpg",
        Stock: 85,
        quantity: 1,
      }
    ];
  });

  // TỰ ĐỘNG LƯU: Mỗi khi cartItems thay đổi, cập nhật ngay vào localStorage "NoName"
  useEffect(() => {
    localStorage.setItem("NoName", JSON.stringify(cartItems));
  }, [cartItems]);

  // Hàm thêm sản phẩm vào giỏ
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isExist = prevItems.find(
        (item) => item.ProductID === product.ProductID
      );

      if (isExist) {
        return prevItems.map((item) =>
          item.ProductID === product.ProductID
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    alert("Đã thêm sản phẩm vào giỏ hàng!");
  };

  // Hàm cập nhật số lượng (tăng/giảm)
  const updateQty = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.ProductID === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Hàm xóa 1 sản phẩm khỏi giỏ
  const removeItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.ProductID !== id)
    );
  };

  // Hàm xóa sạch giỏ hàng (Dùng sau khi thanh toán thành công hoặc nhấn nút xóa hết)
  const clearCart = () => {
    setCartItems([]); // Xóa trên giao diện
    localStorage.removeItem("NoName"); // Xóa hẳn túi đồ NoName trong localStorage
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQty, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;