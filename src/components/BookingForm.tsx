'use client';

import React, { useState } from "react";

interface BookingFormProps {
  courses: { id: string; title: string }[];
  onSubmit: (data: BookingFormData) => void;
  initialValues?: Partial<BookingFormData>;
}

export interface BookingFormData {
  courseId: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ courses, onSubmit, initialValues = {} }) => {
  const [form, setForm] = useState<BookingFormData>({
    courseId: initialValues.courseId || "",
    name: initialValues.name || "",
    email: initialValues.email || "",
    phone: initialValues.phone || "",
    date: initialValues.date || "",
    time: initialValues.time || "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!form.courseId || !form.name || !form.email || !form.phone || !form.date || !form.time) {
      setError("All fields are required.");
      return;
    }
    setError("");
    onSubmit(form);
  };

  const labelStyle = {
    color: '#111827 !important',
    fontWeight: '600 !important',
    fontSize: '14px !important',
    marginBottom: '8px !important',
    display: 'block !important'
  };

  const inputStyle = {
    color: '#111827 !important',
    backgroundColor: '#ffffff !important',
    border: '2px solid #d1d5db !important',
    borderRadius: '8px !important',
    padding: '12px 16px !important',
    fontSize: '14px !important',
    width: '100% !important',
    boxSizing: 'border-box' as const
  };

  return (
    <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-neutral-200 font-sans" onSubmit={handleSubmit} style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <h2 style={{ color: '#111827', fontWeight: '700', fontSize: '20px', marginBottom: '16px' }}>Book an Appointment</h2>
      
      <div>
        <label style={labelStyle}>Course</label>
        <select
          name="courseId"
          value={form.courseId}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="" style={{ color: '#6b7280' }}>Select a course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id} style={{ color: '#111827' }}>
              {course.title}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label style={labelStyle}>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Enter your full name"
          required
        />
      </div>
      
      <div>
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Enter your email address"
          required
        />
      </div>
      
      <div>
        <label style={labelStyle}>Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Enter your phone number"
          required
        />
      </div>
      
      <div className="flex gap-4">
        <div className="flex-1">
          <label style={labelStyle}>Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div className="flex-1">
          <label style={labelStyle}>Time</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
      </div>
      
      {error && (
        <div style={{ 
          color: '#dc2626', 
          fontSize: '14px', 
          fontWeight: '500', 
          backgroundColor: '#fef2f2', 
          padding: '12px', 
          borderRadius: '8px', 
          border: '1px solid #fecaca' 
        }}>
          {error}
        </div>
      )}
      
      <button
        type="submit"
        style={{
          width: '100%',
          backgroundColor: '#2563eb',
          color: '#ffffff',
          padding: '14px 24px',
          borderRadius: '8px',
          fontWeight: '600',
          fontSize: '16px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.2s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#1d4ed8';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#2563eb';
        }}
      >
        Book Appointment
      </button>
    </form>
  );
};

export default BookingForm; 