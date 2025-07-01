import { getCoachProfile } from "@/config";
import { WhatsAppButton } from "@/components";

export default async function ContactPage() {
  const coach = await getCoachProfile();
  return (
    <main className="max-w-xl mx-auto py-12 px-4 space-y-6">
      <h1 style={{
        color: '#111827',
        fontSize: '32px',
        fontWeight: '800',
        marginBottom: '24px',
        textAlign: 'center' as const,
        lineHeight: '1.2'
      }}>
        Contact
      </h1>
      <p style={{
        marginBottom: '16px',
        fontSize: '16px',
        color: '#374151',
        textAlign: 'center' as const,
        lineHeight: '1.6'
      }}>
        For questions or to book a lesson, contact the coach directly via WhatsApp:
      </p>
      <div className="flex justify-center">
        <WhatsAppButton phoneNumber={coach.phoneNumber} />
      </div>
    </main>
  );
} 