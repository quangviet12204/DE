import "./style/Booking.css";
import React from "react";
import { useState } from "react";

const branches = [
  "NoName Baber, Privia Khang Điền, Bình Tân",
  "NoName Baber, Điện Biên Phủ, Quận 10",
  "NoName Baber, Trần Quang Khải, Quận 1",
  "NoName Baber, Quận 3",
  "NoName Baber, Quận 7",
  "NoName Baber, Phú Nhuận",
  "NoName Baber, Gò Vấp",
  "NoName Baber, Tân Bình",
  "NoName Baber, Thủ Đức",

];

const services = [
  { name: "Cắt tóc", price: 80000 },
  { name: "Gội đầu + Tạo Kiểu", price: 60000 },
  { name: "Combo (Cắt + Gội + Cạo)", price: 150000 },
  { name: "Nhuộm tóc", price: 300000 },
  { name: "Uốn tóc", price: 400000 }
];;

const barbers = ["Tiệm đề xuất", "Barber Tuấn", "Barber Minh", "Barber Long"];

const times = ["10:00", "10:30", "11:00", "11:30", "14:00", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    branch: "",
    barber: "",
    date: "",
    time: "",
    phone: "",
    guestCount: 1,
    services: []
  });


  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitBooking = async () => {
  const formData = new FormData();
  formData.append("employee_id", 1);
  formData.append("facilities_id", 2);
  formData.append("service_id", 1);
  formData.append(
    "appointment_time",
    `${data.date} ${data.time}:00`
  );

  await fetch("http://127.0.0.1:8000/api/appointments", {
    method: "POST",
    body: formData
  });

  alert("Đặt lịch thành công!");
};

  return (
    <div className="booking-page">
      <div className="booking-container">

        <h2>Đặt lịch cắt tóc</h2>

        <div className="steps">
          {[1, 2, 3, 4, 5].map(s => (
            <span key={s} className={step === s ? "active" : ""}>Bước {s}</span>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 2 && (
          <div className="step-card text-left">
            <h3 className="step-title">Chọn chi nhánh</h3>
            <p className="step-desc">
              Vui lòng chọn chi nhánh bạn muốn đặt lịch
            </p>

            {branches.map(b => (
              <label key={b} className="item">
                <input
                  type="radio"
                  checked={data.branch === b}
                  onChange={() => setData({ ...data, branch: b })}
                />
                {b}
              </label>
            ))}

            <div className="actions">
              <button onClick={nextStep} disabled={!data.branch}>
                Tiếp tục →
              </button>
            </div>
          </div>
        )}
        {/* STEP 2 */}
        {step === 1 && (
          <div className="step-card text-left animate-step">

            {/* TỔNG   KHÁCH */}
            <h3 class me="step-title">Tổng số khách</h3>
            <div clas ame="guest-input">
              <button 
                class me="btn-minus"
                disab d={data.guestCount === 1}
                onClick={() =>
                  setData({ ...data, guestCount: Math.max(1, data.guestCount - 1) })
                }
              >
                −
              </button>

              <span className="guest-number">{data.guestCount}</span>

              <button
                className="btn-plus"
                onClick={() =>
                  setData({ ...data, guestCount: data.guestCount + 1 })
                }
              >
                +
              </button>
            </div>

            {/* CHỌN DỊCH VỤ */}
            <h3 className="step-title">Chọn dịch vụ</h3>
            <p className="step-desc">Áp dụng cho tất cả khách</p>

            <div className="service-dropdown">
              {services.map(s => (
                <div
                  key={s.name}
                  className={`service-item ${data.services.includes(s.name) ? "active" : ""
                    }`}
                  onClick={() =>
                    setData({
                      ...data,
                      services: data.services.includes(s.name)
                        ? data.services.filter(x => x !== s.name)
                        : [...data.services, s.name]
                    })
                  }
                >
                  <span>{s.name}</span>
                  <strong>{s.price.toLocaleString()} đ</strong>
                </div>
              ))}
            </div>

            {/* TỔNG TIỀN */}
            <div className="total-price">
              Tổng tiền:{" "}
              <strong>
                {(
                  data.guestCount *
                  services
                    .filter(s => data.services.includes(s.name))
                    .reduce((sum, s) => sum + s.price, 0)
                ).toLocaleString()}
                đ
              </strong>
            </div>

            <div className="actions">
              <button className="btn-back" onClick={prevStep}>
                ← Quay lại
              </button>

              <button
                onClick={nextStep}
                disabled={data.services.length === 0}
              >
                Tiếp tục →
              </button>
            </div>
          </div>
        )}



        {/* STEP 3 */}
        {step === 3 && (
          <div className="step-card text-left">
            <h3 className="step-title">Chọn barber</h3>
            <p className="step-desc">
              Bạn có thể chọn barber mình yêu thích
            </p>

            {barbers.map(b => (
              <label key={b} className="item">
                <input
                  type="radio"
                  checked={data.barber === b}
                  onChange={() => setData({ ...data, barber: b })}
                />
                {b}
<<<<<<< Updated upstream
              </label>
=======
                </label>
>>>>>>> Stashed changes
            ))}

            <div className="actions">
              <button className="btn-back" onClick={prevStep}>
                ← Quay lại
              </button>
              <button onClick={nextStep} disabled={!data.barber}>
                Tiếp tục →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="step-card text-left">
            <h3 className="step-title">Chọn ngày & giờ</h3>
            <p className="step-desc">
              Vui lòng chọn thời gian phù hợp để đặt lịch
            </p>

            <input
              type="date"
              value={data.date || ""}
              onChange={e => setData({ ...data, date: e.target.value })}
            />

            <div className="time-grid">
              {times.map(t => (
                <button
                  key={t}
                  className={`time-btn ${data.time === t ? "active" : ""}`}
                  onClick={() => setData({ ...data, time: t })}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="actions">
              <button className="btn-back" onClick={prevStep}>
                ← Quay lại
              </button>
              <button
                onClick={nextStep}
                disabled={!data.date || !data.time}
              >
                Tiếp tục →
              </button>
            </div>
          </div>
        )}
        {/* STEP 5 */}
        {step === 5 && (
          <div className="step-card text-left">
            <h3 className="step-title">Xác nhận thông tin</h3>
            <p className="step-desc">
              Vui lòng nhập thông tin để hoàn tất đặt lịch
            </p>

            <div className="form-group">
              <label>Họ và tên</label>
              <input
                type="text"
                placeholder="Nguyễn Văn A"
                value={data.name || ""}
                onChange={e => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                type="text"
                placeholder="0xxx xxx xxx"
                value={data.phone || ""}
                onChange={e => setData({ ...data, phone: e.target.value })}
              />
            </div>

            <div className="actions">
              <button className="btn-back" onClick={prevStep}>
                ← Quay lại
              </button>

              <button onClick={submitBooking}>Xác nhận đặt lịch</button>
            </div>
          </div>

        )}
      </div>
    </div>
  );
}