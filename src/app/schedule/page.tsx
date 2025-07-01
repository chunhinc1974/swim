"use client";
import React, { useState } from "react";
import { getSchedule, getCourses, bookAppointment } from "@/config";
import { ScheduleCalendar, BookingForm } from "@/components";
import type { BookingFormData } from "@/components/BookingForm";

export default function SchedulePage() {
  const [slots, setSlots] = React.useState<any[]>([]);
  const [courses, setCourses] = React.useState<any[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<any | null>(null);
  const [success, setSuccess] = useState<string>("");

  React.useEffect(() => {
    getSchedule().then(setSlots);
    getCourses().then(setCourses);
  }, []);

  const handleSelectSlot = (slot: any) => {
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
      <h1 className="text-3xl font-bold mb-6">Book a Lesson</h1>
      <ScheduleCalendar slots={slots} onSelectSlot={handleSelectSlot} />
      <div>
        <h2 className="text-xl font-semibold mb-2">Booking Form</h2>
        {success && <div className="text-green-600 mb-2">{success}</div>}
        <BookingForm
          courses={courses.map((c: any) => ({ id: c.id, title: c.title }))}
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