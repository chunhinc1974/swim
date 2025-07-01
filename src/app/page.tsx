import { getCoachProfile, getCourses, type Course } from "@/config";
import { WhatsAppButton, CoachProfile, CourseCard } from "@/components";

export default async function HomePage() {
  const coach = await getCoachProfile();
  const courses = await getCourses();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="hero-card p-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 style={{
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '24px',
            lineHeight: '1.1',
            color: '#ffffff'
          }}>
            Achieve balance in<br/>
            <span className="text-blue-200">mind, body, and soul.</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Professional swimming coaching for all levels. From water safety to competitive techniques, 
            we help you build confidence and achieve your swimming goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton phoneNumber={coach.phoneNumber} />
            <a href="/courses" className="modern-button">
              View Courses
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="modern-card feature-card-blue p-8 text-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">🏊‍♀️</span>
          </div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '700',
            marginBottom: '12px',
            color: '#111827',
            lineHeight: '1.3'
          }}>
            Improved<br/>Flexibility
          </h3>
          <p className="text-[#64748b] text-sm leading-relaxed">
            Build strength, flexibility, and endurance through our comprehensive swimming programs.
          </p>
        </div>

        <div className="modern-card feature-card-purple p-8 text-center">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">🧘‍♂️</span>
          </div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '700',
            marginBottom: '12px',
            color: '#111827',
            lineHeight: '1.3'
          }}>
            Stress<br/>Reduction
          </h3>
          <p className="text-[#64748b] text-sm leading-relaxed">
            Experience the calming effects of water and mindful swimming techniques.
          </p>
        </div>

        <div className="modern-card feature-card-green p-8 text-center md:col-span-2 lg:col-span-1">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">🏆</span>
          </div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '700',
            marginBottom: '12px',
            color: '#111827',
            lineHeight: '1.3'
          }}>
            Join Us for a<br/>Class Today!
          </h3>
          <p className="text-[#64748b] text-sm leading-relaxed mb-4">
            Start your swimming journey with expert guidance and personalized coaching.
          </p>
          <a href="/schedule" className="modern-button text-sm">
            Book Now
          </a>
        </div>
      </section>

      {/* Coach Profile */}
      <section>
        <CoachProfile
          bio={coach.bio}
          certifications={coach.certifications}
          achievements={coach.achievements}
        />
      </section>

      {/* Featured Courses */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 style={{
            fontSize: '32px',
            fontWeight: '800',
            color: '#111827',
            marginBottom: '16px'
          }}>
            Featured Courses
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto">
            Choose from our range of swimming courses designed for different skill levels and goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.slice(0, 2).map((course: Course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        <div className="text-center">
          <a href="/courses" className="modern-button">
            View All Courses
          </a>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-card">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '16px'
            }}>
              Student Testimonials
            </h3>
            <p className="text-[#64748b] mb-4 leading-relaxed">
              &ldquo;The coaching was exceptional. I went from being afraid of water to swimming confidently 
              in just a few months. The personalized approach made all the difference.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">JD</span>
              </div>
              <div>
                <div className="font-semibold text-[#1a1a1a]">John Doe</div>
                <div className="text-sm text-[#64748b]">Beginner Course Graduate</div>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl"></div>
            <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl"></div>
            <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl"></div>
            <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
