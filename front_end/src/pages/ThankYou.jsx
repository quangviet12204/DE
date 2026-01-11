import React from 'react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="container text-center py-5">
      <div className="mb-4">
        <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '5rem' }}></i>
      </div>
      <h2 className="fw-bold">ĐẶT HÀNG THÀNH CÔNG!</h2>
      <p className="text-muted">Cảm ơn bạn đã tin tưởng NoName. Đơn hàng của bạn đang được xử lý.</p>
      <Link to="/" className="btn btn-dark rounded-0 px-4 mt-3">TIẾP TỤC MUA SẮM</Link>
    </div>
  );
}