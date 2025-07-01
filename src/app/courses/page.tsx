import { getCourses, type Course } from "@/config";
import { CourseCard } from "@/components";

export default async function CoursesPage() {
  const courses = await getCourses();
  return (
    <main className="max-w-4xl mx-auto py-8 px-4">
      <h1 style={{
        color: '#111827',
        fontSize: '32px',
        fontWeight: '800',
        marginBottom: '24px',
        textAlign: 'center' as const,
        lineHeight: '1.2'
      }}>
        All Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course: Course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </main>
  );
} 