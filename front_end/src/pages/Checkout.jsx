import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";

export default function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  // 1. State thông tin khách hàng
  const [customerInfo, setCustomerInfo] = useState({
    fullname: "",
    phone: "",
    addressDetail: "",
  });

  // State địa chỉ
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState(""); // Thêm state phường xã

  useEffect(() => {
    axios
      .get("https://provinces.open-api.vn/api/p/")
      .then((res) => setProvinces(res.data))
      .catch((err) => console.error("Lỗi:", err));
  }, []);

  const handleProvinceChange = (e) => {
    const code = e.target.value;
    setSelectedProvince(code);
    setDistricts([]);
    setWards([]);
    setSelectedDistrict("");
    setSelectedWard("");
    if (code)
      axios
        .get(`https://provinces.open-api.vn/api/p/${code}?depth=2`)
        .then((res) => setDistricts(res.data.districts));
  };

  const handleDistrictChange = (e) => {
    const code = e.target.value;
    setSelectedDistrict(code);
    setWards([]);
    setSelectedWard("");
    if (code)
      axios
        .get(`https://provinces.open-api.vn/api/d/${code}?depth=2`)
        .then((res) => setWards(res.data.wards));
  };

  // Hàm cập nhật thông tin input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Tính toán tiền
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.Price * item.quantity,
    0
  );
  const shippingFee = subtotal >= 1000000 || subtotal === 0 ? 0 : 30000;
  const total = subtotal + shippingFee;

  const handleConfirmOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (!user || !token) {
      alert("Vui lòng đăng nhập để đặt hàng!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/orders",
        {
          UsersID: user.id,
          FullName: customerInfo.fullname,
          Phone: customerInfo.phone,
          ProvinceID: selectedProvince,
          DistrictID: selectedDistrict,
          WardID: selectedWard,
          AddressDetail: customerInfo.addressDetail,
          TotalAmount: total,
          ShippingFee: shippingFee,
          PaymentMethod: document.querySelector('input[name="pay"]:checked').id,

          // ĐỔI TÊN THÀNH 'cart' VÀ VIẾT HOA KEY ĐỂ KHỚP BACKEND
          cart: cartItems.map((item) => ({
            ProductID: item.ProductID,
            Quantity: item.quantity,
            Price: item.Price,
          })),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 201) {
        alert("Đặt hàng thành công!");
        clearCart(); // Hàm này sẽ xóa giỏ hàng NoName trong Context
        window.location.href = "/thank-you";
      }
    } catch (error) {
      console.error("Lỗi:", error);
      alert(error.response?.data?.message || "Lỗi đặt hàng!");
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        padding: "30px 0",
      }}
    >
      <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
        <div className="bg-white p-4 rounded shadow-sm mb-4 border-0 text-start">
          <h6 className="fw-bold mb-4 small text-uppercase border-bottom pb-2">
            Thông tin giao hàng
          </h6>
          <div className="row g-3">
            <div className="col-md-7">
              <label className="small text-muted mb-1">Họ Và Tên (*)</label>
              <input
                type="text"
                name="fullname"
                className="form-control form-control-sm rounded-0"
                placeholder="Nguyễn Văn A"
                value={customerInfo.fullname}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-5">
              <label className="small text-muted mb-1">Số Điện Thoại (*)</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-sm rounded-0"
                placeholder="09xxxxxxxx"
                value={customerInfo.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-md-4">
              <label className="small text-muted mb-1">Tỉnh/Thành Phố</label>
              <select
                className="form-select form-select-sm rounded-0"
                onChange={handleProvinceChange}
                value={selectedProvince}
              >
                <option value="">-- Chọn Tỉnh --</option>
                {provinces.map((p) => (
                  <option key={p.code} value={p.code}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label className="small text-muted mb-1">Quận/Huyện</label>
              <select
                className="form-select form-select-sm rounded-0"
                onChange={handleDistrictChange}
                disabled={!selectedProvince}
                value={selectedDistrict}
              >
                <option value="">-- Chọn Quận --</option>
                {districts.map((d) => (
                  <option key={d.code} value={d.code}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label className="small text-muted mb-1">Phường/Xã</label>
              <select
                className="form-select form-select-sm rounded-0"
                disabled={!selectedDistrict}
                value={selectedWard}
                onChange={(e) => setSelectedWard(e.target.value)}
              >
                <option value="">-- Chọn Xã --</option>
                {wards.map((w) => (
                  <option key={w.code} value={w.code}>
                    {w.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12 mt-2">
              <label className="small text-muted mb-1">
                Địa chỉ cụ thể (*)
              </label>
              <input
                type="text"
                name="addressDetail"
                className="form-control form-control-sm rounded-0"
                placeholder="Ví dụ: 123 Lê Lợi"
                value={customerInfo.addressDetail}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6 mt-4">
              <div className="p-3 border rounded bg-light">
                <label className="fw-bold mb-2" style={{ fontSize: "11px" }}>
                  Phương thức thanh toán
                </label>
                <div className="d-flex gap-3">
                  <div className="form-check small">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pay"
                      id="cod"
                      defaultChecked
                    />
                    <label className="form-check-label fw-bold" htmlFor="cod">
                      COD
                    </label>
                  </div>
                  <div className="form-check small">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pay"
                      id="vnpay"
                    />
                    <label
                      className="form-check-label text-muted"
                      htmlFor="vnpay"
                    >
                      VNPay
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded shadow-sm mb-4 border-0 overflow-hidden text-start">
          <table className="table mb-0 align-middle">
            <thead>
              <tr className="small text-uppercase text-center border-bottom">
                <th className="py-2 border-0">Hình ảnh</th>
                <th className="py-2 border-0 text-start">Sản phẩm</th>
                <th className="py-2 border-0">Giá</th>
                <th className="py-2 border-0">SL</th>
                <th className="py-2 border-0">Tổng</th>
              </tr>
            </thead>
            <tbody className="small">
              {cartItems.map((item) => (
                <tr key={item.ProductID} className="text-center border-bottom">
                  <td className="py-2">
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
                  </td>
                  <td className="text-start">
                    <div
                      className="fw-bold text-uppercase"
                      style={{ fontSize: "11px" }}
                    >
                      {item.ProductName}
                    </div>
                    <div className="text-muted" style={{ fontSize: "10px" }}>
                      SIZE: {item.Size} | CÒN: {item.Stock}
                    </div>
                  </td>
                  <td>{Number(item.Price).toLocaleString()}đ</td>
                  <td>{item.quantity}</td>
                  <td className="fw-bold">
                    {(item.Price * item.quantity).toLocaleString()}đ
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="bg-white p-4 rounded shadow-sm border-0 text-start mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h6 className="fw-bold mb-3 small text-uppercase">Tổng giỏ hàng</h6>
          <div className="d-flex justify-content-between py-2 border-bottom small">
            <span className="text-muted">Tổng tiền hàng</span>
            <span className="fw-bold">{subtotal.toLocaleString()}đ</span>
          </div>
          <div className="d-flex justify-content-between py-2 border-bottom small">
            <span className="text-muted">Phí vận chuyển</span>
            <span className="fw-bold">{shippingFee.toLocaleString()}đ</span>
          </div>
          <div className="d-flex justify-content-between py-3 align-items-center">
            <span
              className="fw-bold text-uppercase"
              style={{ fontSize: "13px" }}
            >
              Thành tiền
            </span>
            <h4 className="text-danger fw-bold mb-0">
              {total.toLocaleString()}đ
            </h4>
          </div>
          <button
            className="btn btn-secondary w-100 rounded-0 py-2 fw-bold text-uppercase mt-2 shadow-sm"
            style={{ backgroundColor: "#8a9196", border: "none" }}
            onClick={handleConfirmOrder}
          >
            Xác nhận đặt hàng
          </button>
        </div>
      </div>
    </div>
  );
}
