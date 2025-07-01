import { getCoachProfile } from "@/config";
import { CoachProfile } from "@/components";

export default async function AboutPage() {
  const coach = await getCoachProfile();
  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 style={{
        color: '#111827',
        fontSize: '32px',
        fontWeight: '800',
        marginBottom: '24px',
        textAlign: 'center' as const,
        lineHeight: '1.2'
      }}>
        About the Coach
      </h1>
      <CoachProfile
        bio={coach.bio}
        certifications={coach.certifications}
        achievements={coach.achievements}
      />
    </main>
  );
} 