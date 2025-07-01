"use client";
import React, { useState } from "react";
import { getSchedule, getCourses, bookAppointment, type Course, type ScheduleSlot } from "@/config";
import { ScheduleCalendar, BookingForm } from "@/components";
import type { BookingFormData } from "@/components/BookingForm";

export default function SchedulePage() {
  const [slots, setSlots] = React.useState<ScheduleSlot[]>([]);
  const [courses, setCourses] = React.useState<Course[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<ScheduleSlot | null>(null);
  const [success, setSuccess] = useState<string>("");

  React.useEffect(() => {
    getSchedule().then(setSlots);
    getCourses().then(setCourses);
  }, []);

  const handleSelectSlot = (slot: ScheduleSlot) => {
    setSelectedSlot(slot);
  };

  const handleSubmit = async (data: BookingFormData) => {
    const res = await bookAppointment(data);
    if (res.success) {
      setSuccess(res.message);
      setSelectedSlot(null);
    }
  };

  return (
    <main className="max-w-3xl mx-auto py-8 px-4 space-y-8">
      <h1 style={{
        color: '#111827',
        fontSize: '32px',
        fontWeight: '800',
        marginBottom: '24px',
        textAlign: 'center' as const,
        lineHeight: '1.2'
      }}>
        Book a Lesson
      </h1>
      <ScheduleCalendar slots={slots} onSelectSlot={handleSelectSlot} />
      <div>
        <h2 style={{
          color: '#111827',
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '16px'
        }}>
          Booking Form
        </h2>
        {success && (
          <div style={{
            color: '#059669',
            backgroundColor: '#ecfdf5',
            border: '2px solid #a7f3d0',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '16px',
            fontWeight: '600',
            fontSize: '14px'
          }}>
            {success}
          </div>
        )}
        <BookingForm
          courses={courses.map((c: Course) => ({ id: c.id, title: c.title }))}
          onSubmit={handleSubmit}
          initialValues={selectedSlot ? {
            courseId: selectedSlot.courseId,
            date: selectedSlot.date,
            time: selectedSlot.time,
          } : {}}
        />
      </div>
    </main>
  );
} 