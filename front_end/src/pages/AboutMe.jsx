import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



export default function NewsPage() {
  return (
    <div className="container news-wrapper">
      <div className="row">
        {/* MAIN */}
        <div className="col-lg-9">
          <h5 className="news-title">BÀI VIẾT MỚI NHẤT</h5>

          {/* FEATURE GRID */}
          <div className="featured-box">
            <img
              src="https://via.placeholder.com/900x420"
              className="featured-img"
            />
            <h4 className="featured-title">
              Top 15 Mẫu Tóc Nhuộm HOT TREND 2026 Cho Mùa Tết: Tóc Tím, Pastel, Đá Chàm
            </h4>
            <p className="featured-desc">
              Khám phá Top 15 mẫu tóc nhuộm hot trend 2026 dành cho nam giúp bạn
              nổi bật trong dịp Tết và các sự kiện lớn.
            </p>
          </div>

          {/* OTHER NEWS */}
          <h6 className="sub-title">CÁC BÀI VIẾT KHÁC</h6>

          <div className="row g-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div className="col-md-6" key={i}>
                <div className="news-item">
                  <img
                    src="https://via.placeholder.com/260x160"
                    className="news-thumb"
                  />
                  <div className="news-content">
                    <span className="news-tag">TIN TỨC</span>
                    <h6>
                      Thương hiệu GIVING COLLECTION 2026 – Chính thức ra mắt
                    </h6>
                    <p>
                      BST mới mang phong cách hiện đại, trẻ trung, phù hợp với
                      giới trẻ Việt Nam.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="pagination-wrap">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <span>…</span>
            <button>12</button>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="col-lg-3">
          <h6 className="sidebar-title">TIN NỔI BẬT</h6>

          {Array.from({ length: 6 }).map((_, i) => (
            <div className="sidebar-item" key={i}>
              <h6>Kiểu tóc nam ngắn gọn gàng, lịch lãm</h6>
              <span>12/01/2026</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


