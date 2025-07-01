// Configuration and mock data for Swimming App
// Replace mock API functions with real endpoints in production

// --- Types ---
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  targetAudience: string;
  level: string;
  image: string;
}

export interface Achievement {
  year: number;
  title: string;
}

export interface CoachProfile {
  name: string;
  bio: string;
  certifications: string[];
  achievements: Achievement[];
  phoneNumber: string;
}

export interface ScheduleSlot {
  id: number;
  courseId: string;
  date: string;
  time: string;
  available: boolean;
}

export interface BookingRequest {
  courseId: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}

// --- Mock Data ---

export const COURSES: Course[] = [
  {
    id: 'beginner',
    title: 'Beginner Swimming',
    description: 'Learn the basics of swimming, water safety, and confidence in the water.',
    duration: '8 weeks',
    price: 200,
    targetAudience: 'Kids, Adults',
    level: 'Beginner',
    image: '/images/courses/beginner.jpg',
  },
  {
    id: 'intermediate',
    title: 'Intermediate Swimming',
    description: 'Improve your technique, stamina, and learn new strokes.',
    duration: '8 weeks',
    price: 250,
    targetAudience: 'Teens, Adults',
    level: 'Intermediate',
    image: '/images/courses/intermediate.jpg',
  },
  {
    id: 'advanced',
    title: 'Advanced Swimming',
    description: 'Master advanced techniques, speed, and competition skills.',
    duration: '10 weeks',
    price: 300,
    targetAudience: 'Adults, Athletes',
    level: 'Advanced',
    image: '/images/courses/advanced.jpg',
  },
  {
    id: 'triathlon',
    title: 'Triathlon Prep',
    description: 'Specialized training for triathletes focusing on endurance and transitions.',
    duration: '12 weeks',
    price: 400,
    targetAudience: 'Triathletes',
    level: 'Advanced',
    image: '/images/courses/triathlon.jpg',
  },
];

export const COACH_PROFILE: CoachProfile = {
  name: 'Coach Alex Lee',
  bio: 'Certified swim coach with 15+ years of experience. Passionate about helping swimmers of all ages achieve their goals.',
  certifications: [
    'Certified Swim Instructor (ASI)',
    'First Aid & CPR',
    'Level 2 Competitive Swim Coach',
  ],
  achievements: [
    { year: 2015, title: 'Gold Medal, National Championships' },
    { year: 2017, title: 'Silver Medal, State Open Water Swim' },
    { year: 2019, title: 'Coach of the Year, Swim Association' },
  ],
  phoneNumber: '1234567890', // For WhatsApp
};

export const SCHEDULE: ScheduleSlot[] = [
  // Example slots (normally fetched from an API)
  { id: 1, courseId: 'beginner', date: '2024-07-01', time: '10:00', available: true },
  { id: 2, courseId: 'intermediate', date: '2024-07-02', time: '14:00', available: true },
  { id: 3, courseId: 'advanced', date: '2024-07-03', time: '16:00', available: false },
  { id: 4, courseId: 'triathlon', date: '2024-07-04', time: '08:00', available: true },
];

// --- Simulated API Functions ---

/**
 * Simulate GET request for courses
 */
export async function getCourses(): Promise<Course[]> {
  // Replace with actual API call
  return Promise.resolve(COURSES);
}

/**
 * Simulate GET request for schedule
 */
export async function getSchedule(): Promise<ScheduleSlot[]> {
  // Replace with actual API call
  return Promise.resolve(SCHEDULE);
}

/**
 * Simulate POST request for booking
 * @param booking Booking details
 */
export async function bookAppointment(booking: BookingRequest): Promise<{ success: boolean; message: string }> {
  // Replace with actual API call
  // Simulate success response
  return Promise.resolve({ success: true, message: 'Booking confirmed!' });
}

/**
 * Simulate GET request for coach profile
 */
export async function getCoachProfile(): Promise<CoachProfile> {
  // Replace with actual API call
  return Promise.resolve(COACH_PROFILE);
} 