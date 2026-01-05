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

const services = ["Cắt tóc", "Gội đầu + Tạo Kiểu", "Combo (Cắt + Gội + Cạo)", "Nhuộm tóc", "Uốn tóc"];

const barbers = ["Tiệm đề xuất", "Barber Tuấn", "Barber Minh", "Barber Long"];

const times = ["10:00", "10:30", "11:00", "11:30", "14:00", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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
        {step === 1 && (
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
        {step === 2 && (
          <div className="step-card text-left">
            <h3 className="step-title">Chọn dịch vụ</h3>
            <p className="step-desc">
              Lựa chọn dịch vụ phù hợp với nhu cầu của bạn
            </p>

            {services.map(s => (
              <label key={s} className="item">
                <input
                  type="radio"
                  checked={data.service === s}
                  onChange={() => setData({ ...data, service: s })}
                />
                {s}
              </label>
            ))}

            <div className="actions">
              <button className="btn-back" onClick={prevStep}>
                ← Quay lại
              </button>
              <button onClick={nextStep} disabled={!data.service}>
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
              </label>
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

              <button
                className="btn-confirm"
                disabled={!data.name || !data.phone}
                onClick={() => {
                  alert("Đặt lịch thành công!");
                  setData({});
                  setStep(1);
                }}
              >
                Xác nhận đặt lịch
              </button>
            </div>
          </div>

        )}
      </div>
    </div>
  );
}