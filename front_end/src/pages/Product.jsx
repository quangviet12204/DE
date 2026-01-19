import { useEffect, useState } from "react";
import api from "../api";
import "./style/Product.css";

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
        params: {
          q: search || undefined,
          brand_id: brandId || undefined,
          page,
        },
      });

      setProducts(res.data.data);
      setLastPage(res.data.last_page);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Không tải được danh sách sản phẩm");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [search, brandId, page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container py-4">
      <h2 className="mb-3">Product list</h2>

      {/* Search & filter */}
      <div className="d-flex gap-2 mb-3">
        <input
          className="form-control"
          placeholder="Tìm sản phẩm..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
        />

        <input
          className="form-control"
          type="number"
          placeholder="Brand ID"
          value={brandId}
          onChange={(e) => {
            setPage(1);
            setBrandId(e.target.value);
          }}
          style={{ maxWidth: 150 }}
        />
      </div>

      {/* Product list */}
      <div className="row g-3">
        {products.map((p) => (
          <div className="col-md-3" key={p.ProductID}>
            <div className="card h-100">

              {/* IMAGE */}
              <img
                src={
                  p.image
                    ? `http://127.0.0.1:8000/${p.image}`
                    : "https://via.placeholder.com/300"
                }
                className="card-img-top"
                style={{ height: 160, objectFit: "cover" }}
                alt={p.name}
              />

              <div className="card-body">
                <h6 className="card-title">{p.name}</h6>

                <p className="mb-1">
                  Giá: {Number(p.price).toLocaleString("vi-VN")} ₫
                </p>

                <p className="mb-0 text-muted">
                  Brand ID: {p.BrandID}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
        <button
          className="btn btn-outline-secondary"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous page
        </button>

        <span>
          Page {page} / {lastPage}
        </span>

        <button
          className="btn btn-outline-secondary"
          disabled={page === lastPage}
          onClick={() => setPage(page + 1)}
        >
          Next page
        </button>
      </div>
    </div>
  );
}
