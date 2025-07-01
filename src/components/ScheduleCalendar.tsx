import React from "react";
import type { ScheduleSlot } from "@/config";

interface ScheduleCalendarProps {
  slots: ScheduleSlot[];
  onSelectSlot: (slot: ScheduleSlot) => void;
}

const ScheduleCalendar: React.FC<ScheduleCalendarProps> = ({ slots, onSelectSlot }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-neutral-200 p-6 mb-6 font-sans">
      <h2 style={{ 
        color: '#111827', 
        fontWeight: '700', 
        fontSize: '24px', 
        marginBottom: '24px' 
      }}>
        Available Time Slots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {slots.map((slot) => (
          <button
            key={slot.id}
            style={{
              padding: '16px',
              border: slot.available ? '2px solid #3b82f6' : '2px solid #d1d5db',
              borderRadius: '12px',
              backgroundColor: slot.available ? '#eff6ff' : '#f9fafb',
              color: slot.available ? '#111827' : '#6b7280',
              cursor: slot.available ? 'pointer' : 'not-allowed',
              textAlign: 'left' as const,
              width: '100%',
              transition: 'all 0.2s ease'
            }}
            onClick={() => slot.available && onSelectSlot(slot)}
            disabled={!slot.available}
            onMouseOver={(e) => {
              if (slot.available) {
                e.currentTarget.style.backgroundColor = '#dbeafe';
                e.currentTarget.style.borderColor = '#2563eb';
              }
            }}
            onMouseOut={(e) => {
              if (slot.available) {
                e.currentTarget.style.backgroundColor = '#eff6ff';
                e.currentTarget.style.borderColor = '#3b82f6';
              }
            }}
          >
            <div style={{ 
              fontWeight: '700', 
              fontSize: '16px', 
              marginBottom: '8px',
              color: '#111827'
            }}>
              {slot.date} at {slot.time}
            </div>
            <div style={{ 
              fontSize: '14px', 
              marginBottom: '4px',
              color: '#374151'
            }}>
              Course: {slot.courseId}
            </div>
            <div style={{ 
              fontSize: '12px', 
              fontWeight: '500',
              color: slot.available ? '#059669' : '#dc2626'
            }}>
              {slot.available ? "Available" : "Booked"}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCalendar; 