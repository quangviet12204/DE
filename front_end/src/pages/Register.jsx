
import "./style/Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-page">
      {/* Title */}
      <div className="text-center mb-5">
        <h1 className="register-title">Đăng Ký</h1>
        <p className="register-breadcrumb">
          Trang Chủ <span>/</span> Đăng Ký
        </p>
      </div>

      {/* Register Form */}
      <div className="register-box mx-auto">
        <h3 className="mb-4">Tạo Tài Khoản Mới</h3>

        <form>
          <div className="mb-3">
            <label className="form-label">Tên Tài Khoản</label>
            <input type="text" className="form-control register-input" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control register-input" />
          </div>

          <div className="mb-3">
            <label className="form-label">Số Điện Thoại Nhận Hàng</label>
            <input type="text" className="form-control register-input" />
          </div>

          <div className="mb-3">
            <label className="form-label">Mật Khẩu</label>
            <input type="password" className="form-control register-input" />
          </div>

          <div className="mb-4">
            <label className="form-label">Xác Nhận Mật Khẩu</label>
            <input type="password" className="form-control register-input" />
          </div>

          <button type="submit" className="btn register-btn w-100 mb-3">
            ĐĂNG KÝ
          </button>
        </form>
        

        <p className="text-center mb-2">Bạn Đã Có Tài Khoản?</p>

        <Link to="/login" className="btn register-btn w-100">
          ĐĂNG NHẬP
        </Link>
      </div>
    </div>
  );
}

export default Register;
