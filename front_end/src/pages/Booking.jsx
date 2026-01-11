import "./style/Booking.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const services = [
  { name: "Cut Hair", price: 80000 },
  { name: "Combo (Cut + Shampoo + Trim)", price: 150000 },
  { name: "Hair Dye", price: 300000 },
  { name: "Hair Curl", price: 400000 },
];

const branches = [
  "NoName Barber, Privia Khang Dien, Binh Tan",
  "NoName Barber, Dien Bien Phu, District 10",
  "NoName Barber, Tran Quang Khai, District 1",
  "NoName Barber, District 3",
  "NoName Barber, District 7",
  "NoName Barber, Phu Nhuan",
  "NoName Barber, Go Vap",
  "NoName Barber, Tan Binh",
  "NoName Barber, Thu Duc",
];

const barbers = ["Suggested Barber", "Barber Tuan", "Barber Minh", "Barber Long"];
const times = ["10:00", "10:30", "11:00", "11:30", "14:00", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    guestCount: 1,
    services: [], // Danh sách các tên dịch vụ đã chọn
    branch: "",
    barber: "",
    date: "",
    time: "",
    name: "",
    phone: ""
  });

  const location = useLocation();

  useEffect(() => {
    const selectFromService = location.state?.selectedService;
    if (selectFromService) {
      setData((prevData) => ({
        ...prevData,
        services: [selectFromService],
      }));
    }
  }, [location]);

  // HÀM XỬ LÝ CHỌN DỊCH VỤ (FIX CHỖ NÀY)
  const handleServiceClick = (serviceName) => {
    let newServices = [...data.services];
    const isSelected = newServices.includes(serviceName);

    if (isSelected) {
      // Nếu đã chọn thì bỏ chọn
      newServices = newServices.filter((name) => name !== serviceName);
    } else {
      // Logic: Nếu chọn Combo thì bỏ Cut Hair và ngược lại
      if (serviceName === "Combo (Cut + Shampoo + Trim)") {
        newServices = newServices.filter((name) => name !== "Cut Hair");
      } else if (serviceName === "Cut Hair") {
        newServices = newServices.filter((name) => name !== "Combo (Cut + Shampoo + Trim)");
      }
      newServices.push(serviceName);
    }

    setData({ ...data, services: newServices });
  };

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
        <h2>Book an Appointment</h2>

        <div className="steps">
          {[1, 2, 3, 4, 5].map((s) => (
            <span key={s} className={step === s ? "active" : ""}>Step {s}</span>
          ))}
        </div>

        {step === 1 && (
          <div className="step-card text-left">
<<<<<<< HEAD
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

=======
            <h3 className="step-title">Select Services</h3>
            
            <h4 className="step-subtitle">Number of Guests</h4>
            <div className="guest-input">
              <button disabled={data.guestCount === 1} onClick={() => setData({ ...data, guestCount: Math.max(1, data.guestCount - 1) })}> − </button>
>>>>>>> dc5e65752bad77c5d578e2cbd4aca31eeb9f7ce8
              <span className="guest-number">{data.guestCount}</span>
              <button onClick={() => setData({ ...data, guestCount: data.guestCount + 1 })}> + </button>
            </div>

            <h4 className="step-subtitle">Service List</h4>
            <div className="service-dropdown">
              {services.map((s) => (
                <div
                  key={s.name}
                  className={`service-item ${data.services.includes(s.name) ? "active" : ""}`}
                  onClick={() => handleServiceClick(s.name)}
                >
                  <span>{s.name}</span>
                  <strong>{s.price.toLocaleString()} VND</strong>
                </div>
              ))}
            </div>

            <div className="total-price">
              Total: <strong>{(data.guestCount * services.filter((s) => data.services.includes(s.name)).reduce((sum, s) => sum + s.price, 0)).toLocaleString()} VND</strong>
            </div>

            <div className="actions">
              <button className="btn-next" onClick={nextStep} disabled={data.services.length === 0}>Next Step →</button>
            </div>
          </div>
        )}

        {/* Các Step 2, 3, 4, 5 giữ nguyên như bản trước của bạn... */}
        {step === 2 && (
          <div className="step-card text-left">
            <h3 className="step-title">Choose Branch</h3>
            {branches.map((b) => (
              <label key={b} className="item">
                <input type="radio" checked={data.branch === b} onChange={() => setData({ ...data, branch: b })} /> {b}
              </label>
            ))}
            <div className="actions">
              <button className="btn-back" onClick={prevStep}>← Back</button>
              <button className="btn-next" onClick={nextStep} disabled={!data.branch}>Next →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="step-card text-left">
            <h3 className="step-title">Select Barber</h3>
            {barbers.map((b) => (
              <label key={b} className="item">
                <input type="radio" checked={data.barber === b} onChange={() => setData({ ...data, barber: b })} /> {b}
              </label>
            ))}
            <div className="actions">
              <button className="btn-back" onClick={prevStep}>← Back</button>
              <button className="btn-next" onClick={nextStep} disabled={!data.barber}>Next →</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="step-card text-left">
            <h3 className="step-title">Date & Time</h3>
            <input type="date" className="date-picker" value={data.date || ""} onChange={(e) => setData({ ...data, date: e.target.value })} />
            <div className="time-grid">
              {times.map((t) => (
                <button key={t} className={`time-btn ${data.time === t ? "active" : ""}`} onClick={() => setData({ ...data, time: t })}>{t}</button>
              ))}
            </div>
            <div className="actions">
              <button className="btn-back" onClick={prevStep}>← Back</button>
              <button className="btn-next" onClick={nextStep} disabled={!data.date || !data.time}>Next →</button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="step-card text-left">
            <h3 className="step-title">Confirmation</h3>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" value={data.name || ""} onChange={(e) => setData({ ...data, name: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" value={data.phone || ""} onChange={(e) => setData({ ...data, phone: e.target.value })} />
            </div>
            <div className="actions">
<<<<<<< HEAD
              <button className="btn-back" onClick={prevStep}>
                ← Quay lại
              </button>

              <button onClick={submitBooking}>Xác nhận đặt lịch</button>
=======
              <button className="btn-back" onClick={prevStep}>← Back</button>
              <button className="btn-confirm" disabled={!data.name || !data.phone} onClick={() => { alert("Success!"); window.location.href = "/"; }}>Confirm</button>
>>>>>>> dc5e65752bad77c5d578e2cbd4aca31eeb9f7ce8
            </div>
          </div>
        )}
      </div>
    </div>
  );
}