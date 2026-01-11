import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

export default function CartPage() {
  const { cartItems, updateQty, removeItem, clearCart } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.Price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h4 className="mb-4 fw-bold text-uppercase">Giỏ hàng của bạn</h4>
        <div
          className="bg-white p-5 shadow-sm rounded border d-inline-block"
          style={{ minWidth: "400px" }}
        >
          <p className="text-muted">Giỏ hàng của bạn đang trống.</p>
          <Link to="/" className="btn btn-dark px-4 py-2">
            TIẾP TỤC MUA SẮM
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Tiêu đề căn giữa */}
      <h4 className="mb-5 fw-bold text-uppercase text-center">
        Giỏ hàng của bạn
      </h4>

      <div className="row g-4 justify-content-center">
        <div className="col-lg-6 offset-lg-1">
          <div className="cart-list bg-white rounded shadow-sm border p-3">
            {cartItems.map((item) => (
              <div
                key={item.ProductID}
                className="d-flex align-items-center border-bottom py-4 px-2"
              >
                <div className="flex-shrink-0" style={{ width: "80px" }}>
                  <img
                    src={
                      item.Image?.startsWith("http")
                        ? item.Image
                        : `/sanpham/${item.Image}`
                    }
                    className="img-fluid rounded"
                    alt={item.ProductName}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/80";
                    }}
                  />
                </div>

                {/* Thông tin sản phẩm */}
                <div className="ms-4 flex-grow-1">
                  <h6 className="fw-bold mb-1" style={{ fontSize: "0.95rem" }}>
                    {item.ProductName}
                  </h6>
                  <p className="text-muted mb-1" style={{ fontSize: "0.8rem" }}>
                    SIZE: {item.Size || "CÁI"}
                  </p>
                  <p className="text-danger fw-bold mb-0">
                    {Number(item.Price).toLocaleString()}đ
                  </p>
                </div>

                {/* Bộ tăng giảm */}
                <div className=" increaser d-flex align-items-center border rounded mx-3 bg-light">
                  <button
                    className="btn btn-sm px-2"
                    onClick={() => updateQty(item.ProductID, -1)}
                  >
                    -
                  </button>
                  <span
                    className="px-2 fw-bold "
                    style={{ fontSize: "0.9rem" }}
                  >
                    {item.quantity}
                  </span>
                  <button
                    className="btn btn-sm px-2"
                    onClick={() => updateQty(item.ProductID, 1)}
                  >
                    +
                  </button>
                </div>

                {/* Giá & Xóa */}
                <div className="text-end" style={{ minWidth: "100px" }}>
                  <p className="fw-bold mb-0" style={{ fontSize: "0.95rem" }}>
                    {(item.Price * item.quantity).toLocaleString()}đ
                  </p>
                  <button
                    className="btn btn-link text-danger text-decoration-none p-0"
                    style={{ fontSize: "0.8rem" }}
                    onClick={() => removeItem(item.ProductID)}
                  >
                    Xoá
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-3 ms-lg-4">
          <div
            className="card border-0 shadow-sm p-4 sticky-top"
            style={{ top: "120px", backgroundColor: "#fbfbfb" }}
          >
            <h5 className="fw-bold mb-4" style={{ fontSize: "1rem" }}>
              Tóm tắt đơn hàng
            </h5>
            <div className="d-flex justify-content-between mb-3">
              <span className="text-muted">Tạm tính</span>
              <span className="fw-bold">{totalPrice.toLocaleString()}đ</span>
            </div>
            <hr />
            <Link
              to="/checkout"
              className="btn btn-dark w-100 py-3 fw-bold text-uppercase mb-3"
              style={{
                letterSpacing: "1px",
                textDecoration: "none",
                display: "block",
                textAlign: "center",
              }}
            >
              Tiến hành thanh toán
            </Link>
            <div className="text-center">
              <Link
                to="/"
                className="text-dark small text-decoration-none border-bottom"
              >
                Tiếp tục mua sắm
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          className="btn btn-link text-muted text-decoration-none small"
          onClick={() => {
            if (window.confirm("Bạn có chắc chắn muốn xóa toàn bộ giỏ hàng?")) {
              clearCart();
            }
          }}
        >
          XÓA GIỎ HÀNG
        </button>
      </div>
    </div>
  );
}
