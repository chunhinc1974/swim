import { getCoachProfile } from "@/config";
import { WhatsAppButton } from "@/components";

export default async function ContactPage() {
  const coach = await getCoachProfile();
  return (
    <main className="max-w-xl mx-auto py-8 px-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-4">For questions or to book a lesson, contact the coach directly via WhatsApp:</p>
      <WhatsAppButton phoneNumber={coach.phoneNumber} />
    </main>
  );
} 