import { useEffect, useState } from "react";
import api from "../api";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [brandId, setBrandId] = useState("");
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const res = await api.get("/products", {
        params: { q: search || undefined, brand_id: brandId || undefined, page },
      });

      setProducts(res.data.data);
      setLastPage(res.data.last_page);
      setError("");
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401 || err.response?.status === 403)
        setError("Bạn không có quyền truy cập");
      else setError("Không tải được danh sách sản phẩm");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, [search, brandId, page]);

  if (loading) return <p>Đang tải sản phẩm...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
      <div className="container py-4">
      <h2 className="mb-3">Danh sách sản phẩm</h2>

        {/* Search & filter */}
      <div className="d-flex gap-2 mb-3">
          <input
            className="form-control"
            placeholder="Tìm sản phẩm..."
            value={search}
          onChange={(e) => { setPage(1); setSearch(e.target.value); }}
          />
          <input
            className="form-control"
            type="number"
            placeholder="Brand ID"
            value={brandId}
          onChange={(e) => { setPage(1); setBrandId(e.target.value); }}
            style={{ maxWidth: 150 }}
          />
        </div>

      {/* Product list */}
      <div className="row g-3">
          {products.map((p) => (
          <div className="col-md-3" key={p.ProductID}>
            <div className="card h-100">
              {p.Image && (
                  <img
                    src={`http://127.0.0.1:8000/storage/${p.Image}`}
                  className="card-img-top"
                  style={{ height: 160, objectFit: "cover" }}
                  />
              )}
              <div className="card-body">
                <h6 className="card-title">{p.ProductName}</h6>
                <p className="mb-1">Giá: {Number(p.Price).toLocaleString()} đ</p>
                <p className="mb-1">Kho: {p.Stock}</p>
                <p className="mb-0 text-muted">Brand: {p.brand?.BrandName || "-"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
        <button className="btn btn-outline-secondary" disabled={page === 1} onClick={() => setPage(page-1)}>Trang trước</button>
        <span>Trang {page} / {lastPage}</span>
        <button className="btn btn-outline-secondary" disabled={page === lastPage} onClick={() => setPage(page+1)}>Trang sau</button>
      </div>
    </div>
  );
}
