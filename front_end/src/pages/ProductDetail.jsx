import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/products";

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API_URL}/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
        setError("Không tìm thấy sản phẩm");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Đang tải sản phẩm...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!product) return null;

  return (
    <div style={{ padding: 20 }}>
      <Link to="/products">← Quay lại danh sách</Link>

      <div style={{ display: "flex", gap: 30, marginTop: 20 }}>
        {/* Image */}
        <div style={{ flex: 1 }}>
          {product.Image && (
            <img
              src={`http://127.0.0.1:8000/storage/${product.Image}`}
              alt={product.ProductName}
              style={{ width: "100%", maxWidth: 400 }}
            />
          )}
        </div>

        {/* Info */}
        <div style={{ flex: 2 }}>
          <h2>{product.ProductName}</h2>

          <p>
            <strong>Giá:</strong>{" "}
            {Number(product.Price).toLocaleString()} đ
          </p>

          <p>
            <strong>Thương hiệu:</strong>{" "}
            {product.brand?.BrandName}
          </p>

          <p>
            <strong>Tồn kho:</strong>{" "}
            {product.Stock}
          </p>

          <hr />

          <p>{product.Description}</p>

          <button
            style={{
              marginTop: 20,
              padding: "10px 20px",
              background: "#000",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}
