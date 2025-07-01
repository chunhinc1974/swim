"use client";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  variant?: "primary" | "secondary" | "whatsapp";
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hi, I'm interested in your swimming courses",
  variant = "whatsapp",
}) => {
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button inline-flex items-center gap-2 text-white font-semibold"
    >
      <span className="text-lg">💬</span>
      Contact via WhatsApp
    </a>
  );
};

export default WhatsAppButton; 