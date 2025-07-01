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

  return (
    <form className="space-y-4 bg-white p-8 rounded-2xl shadow-lg border border-neutral-200 font-sans" onSubmit={handleSubmit} style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <h2 className="text-xl font-bold mb-4 text-neutral-900">Book an Appointment</h2>
      <div>
        <label className="block font-medium mb-1">Course</label>
        <select
          name="courseId"
          value={form.courseId}
          onChange={handleChange}
          className="w-full border border-neutral-200 rounded px-3 py-2"
          required
        >
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-neutral-200 rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-neutral-200 rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-neutral-200 rounded px-3 py-2"
          required
        />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border border-neutral-200 rounded px-3 py-2"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block font-medium mb-1">Time</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full border border-neutral-200 rounded px-3 py-2"
            required
          />
        </div>
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 transition text-base"
      >
        Book Appointment
      </button>
    </form>
  );
};

export default BookingForm; 