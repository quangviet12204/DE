import ProtectedRoute from "../component/ProtectedRoute";

export default function AdminDashboard() {
  return (
    <ProtectedRoute role="Admin">
      <div className="container py-5">
        <h2>Admin Dashboard</h2>
        <p>Chỉ Admin mới xem được trang này.</p>
        <ul>
          <li>Quản lý sản phẩm</li>
          <li>Quản lý đơn hàng</li>
          <li>Quản lý người dùng</li>
        </ul>
      </div>
    </ProtectedRoute>
  );
}
