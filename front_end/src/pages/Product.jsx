import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/products";

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

      const res = await axios.get(API_URL, {
        params: {
          q: search,
          brand_id: brandId,
          page: page,
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

  if (loading) return <p>Đang tải sản phẩm...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách sản phẩm</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Tìm sản phẩm..."
        value={search}
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
        style={{ marginRight: 10 }}
      />

      {/* Brand filter (tạm nhập tay ID) */}
      <input
        type="number"
        placeholder="Brand ID"
        value={brandId}
        onChange={(e) => {
          setPage(1);
          setBrandId(e.target.value);
        }}
        style={{ width: 100 }}
      />

      <hr />

      {/* Product list */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {products.map((p) => (
          <div key={p.ProductID} style={{ border: "1px solid #ccc", padding: 10 }}>
            {p.Image && (
              <img
                src={`http://127.0.0.1:8000/storage/${p.Image}`}
                alt={p.ProductName}
                style={{ width: "100%", height: 150, objectFit: "cover" }}
              />
            )}

            <h4>{p.ProductName}</h4>
            <p>Giá: {Number(p.Price).toLocaleString()} đ</p>
            <p>Kho: {p.Stock}</p>
            <p>Brand: {p.brand?.BrandName}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ marginTop: 20 }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Trang trước
        </button>

        <span style={{ margin: "0 10px" }}>
          Trang {page} / {lastPage}
        </span>

        <button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
          Trang sau
        </button>
      </div>
    </div>
  );
}
