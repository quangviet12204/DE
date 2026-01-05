import "./style/Booking.css";
import React from "react";
import { useState } from "react";

const branches = [
 "NoName Baber, Privia Khang Dien, Binh Tan",
"NoName Baber, Dien Bien Phu, District 10",
"NoName Baber, Tran Quang Khai, District 1",
"NoName Baber, District 3",
"NoName Baber, District 7",
"NoName Baber, Phu Nhuan",
"NoName Baber, Go Vap",
"NoName Baber, Tan Binh",
"NoName Baber, Thu Duc",
];

const services = ["Cut Hair", "Shampoo + Styling", "Combo (Cut + Shampoo + Trim)", "Hair Dye", "Hair Curl"];

const barbers = ["Recommended Shop", "Barber Tuan", "Barber Minh", "Barber Long"];

const times = ["10:00", "10:30", "11:00", "11:30", "14:00", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="booking-page">
      <div className="booking-container">

        <h2>Book a Haircut</h2>

        <div className="steps">
          {[1, 2, 3, 4, 5].map(s => (
            <span key={s} className={step === s ? "active" : ""}>Step {s}</span>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="step-card text-left">
            <h3 className="step-title">Choose Branch</h3>
            <p className="step-desc">
              Please select the branch you want to book a service at
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
            <h3 className="step-title">Choose Service</h3>
            <p className="step-desc">
              Please select a service that suits your needs
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
                ← Return
              </button>
              <button onClick={nextStep} disabled={!data.service}>
                Next →
              </button>
            </div>
          </div>
        )}
        {/* STEP 3 */}
        {step === 3 && (
          <div className="step-card text-left">
            <h3 className="step-title">Choose Barber</h3>
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
                ← Return
              </button>
              <button onClick={nextStep} disabled={!data.barber}>
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="step-card text-left">
            <h3 className="step-title">Choose Date & Time</h3>
            <p className="step-desc">
              Please select a suitable time to book an appointment
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
            <h3 className="step-title">Confirm Information</h3>
            <p className="step-desc">
              Please enter your information to complete the booking
            </p>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Nguyen Van A"
                value={data.name || ""}
                onChange={e => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="0xxx xxx xxx"
                value={data.phone || ""}
                onChange={e => setData({ ...data, phone: e.target.value })}
              />
            </div>

            <div className="actions">
              <button className="btn-back" onClick={prevStep}>
                ← Return
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
                Confirm your appointment
              </button>
            </div>
          </div>

        )}
      </div>
    </div>
  );
}