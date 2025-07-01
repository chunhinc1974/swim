import React from "react";
import type { ScheduleSlot } from "@/config";

interface ScheduleCalendarProps {
  slots: ScheduleSlot[];
  onSelectSlot: (slot: ScheduleSlot) => void;
}

const ScheduleCalendar: React.FC<ScheduleCalendarProps> = ({ slots, onSelectSlot }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 mb-6 font-sans">
      <h2 className="text-xl font-bold mb-4 text-neutral-900">Available Time Slots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {slots.map((slot) => (
          <button
            key={slot.id}
            className={`p-4 border rounded-xl shadow-sm flex flex-col items-start transition-colors duration-150 font-sans text-left ${
              slot.available
                ? "bg-blue-50 border-blue-200 hover:bg-blue-100 text-blue-900 cursor-pointer"
                : "bg-neutral-100 border-neutral-200 text-neutral-400 cursor-not-allowed"
            }`}
            onClick={() => slot.available && onSelectSlot(slot)}
            disabled={!slot.available}
            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
          >
            <div className="font-semibold text-base mb-1">{slot.date} at {slot.time}</div>
            <div className="text-sm text-neutral-500 mb-1">Course: {slot.courseId}</div>
            <div className="text-xs mt-1">{slot.available ? "Available" : "Booked"}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCalendar; 