import "./style/Booking.css";
import React from "react";
import { useState } from "react";

const branches = [
  "NoName Baber, Privia Khang Dien, Binh Tan",
  "NoName Baber, Dien Bien Phu Street, District 10",
  "NoName Baber, Tran Quang Khai Street, District 1",
  "NoName Baber, District 3",
  "NoName Baber, District 7",
  "NoName Baber, Phu Nhuan",
  "NoName Baber, Go Vap",
  "NoName Baber, Tan Binh",
  "NoName Baber, Thu Duc",

];

const services = [
  { name: "Hair cutting", price: 80000 },
  { name: "Shampoo + Styling", price: 60000 },
  { name: "Combo (Haircut + Shampoo + Shave)", price: 150000 },
  { name: "Hair dying", price: 300000 },
  { name: "Hair perm", price: 400000 }
];;

const barbers = ["Recommended shop", "Barber Tuan", "Barber Minh", "Barber Long", "Barber Hieu", "Barber Nam"];

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

  alert("Appointment booked successfully!");
};

  return (
    <div className="booking-page">
      <div className="booking-container">

        <h2>Book a haircut appointment</h2>

        <div className="steps">
          {[1, 2, 3, 4, 5].map(s => (
            <span key={s} className={step === s ? "active" : ""}>Step {s}</span>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="step-card text-left">
            <h3 className="step-title">Select a branch</h3>
            <p className="step-desc">
              Please select the branch you want to book an appointment at
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
                Continue →
              </button>
            </div>
          </div>
        )}
        {/* STEP 2 */}
        {step === 2 && (
          <div className="step-card text-left animate-step">

            {/* TỔNG   KHÁCH */}
            <h3 class me="step-title">Total number of guests</h3>
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
            <h3 className="step-title">Select a service</h3>
            <p className="step-desc">Applied to all guests</p>

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
              Total price:{" "}
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
                ← Come back
              </button>

              <button
                onClick={nextStep}
                disabled={data.services.length === 0}
              >
                Continue →
              </button>
            </div>
          </div>
        )}



        {/* STEP 3 */}
        {step === 3 && (
          <div className="step-card text-left">
            <h3 className="step-title">Select a barber</h3>
            <p className="step-desc">
              You can choose your favorite barber
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
                ← Come back
              </button>
              <button onClick={nextStep} disabled={!data.barber}>
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="step-card text-left">
            <h3 className="step-title">Select date and time</h3>
            <p className="step-desc">
              Please select a suitable time to book an appointment
            </p>

            {/* ===== CHỌN NGÀY ===== */}
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={data.date || ""}
              onChange={e =>
                setData({
                  ...data,
                  date: e.target.value,
                  time: null // đổi ngày thì reset giờ
                })
              }
            />

            {/* ===== CHỌN GIỜ ===== */}
            <div className="time-grid">
              {times.map(t => {
                const today = new Date().toISOString().split("T")[0];
                const isToday = data.date === today;

                const currentHour = new Date().getHours();
                const hour = parseInt(t.split(":")[0]);

                const isPast = isToday && hour <= currentHour;

                return (
                  <button
                    key={t}
                    disabled={isPast}
                    className={`time-btn 
              ${data.time === t ? "active" : ""} 
              ${isPast ? "disabled" : ""}`}
                    onClick={() => {
                      if (isPast) return;
                      setData({ ...data, time: t });
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {/* ===== ACTIONS ===== */}
            <div className="actions">
              <button className="btn-back" onClick={prevStep}>
                ← Retun
              </button>
              <button
                onClick={nextStep}
                disabled={!data.date || !data.time}
              >
                Continue →
              </button>
            </div>
          </div>
        )}
        {/* STEP 5 */}
        {step === 5 && (
          <div className="step-card text-left">
            <h3 className="step-title">Confirm information</h3>
            <p className="step-desc">
              Please enter your information to complete the booking
            </p>

            <div className="form-group">
              <label>Full name</label>
              <input
                type="text"
                placeholder="Nguyen Van A"
                value={data.name || ""}
                onChange={e => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Phone number</label>
              <input
                type="text"
                placeholder="0xxx xxx xxx"
                value={data.phone || ""}
                onChange={e => setData({ ...data, phone: e.target.value })}
              />
            </div>

            <div className="actions">
              <button className="btn-back" onClick={prevStep}>
                ← Come back
              </button>

              <button onClick={submitBooking}>Confirm your appointment</button>
            </div>
          </div>

        )}
      </div>
    </div>
  );
}