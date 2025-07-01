import { getCoachProfile } from "@/config";
import { CoachProfile } from "@/components";

export default async function AboutPage() {
  const coach = await getCoachProfile();
  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">About the Coach</h1>
      <CoachProfile
        bio={coach.bio}
        certifications={coach.certifications}
        achievements={coach.achievements}
      />
    </main>
  );
} 