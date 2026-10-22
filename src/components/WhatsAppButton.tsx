import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  whatsappUrl: string;
}

export function WhatsAppButton({ whatsappUrl }: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all hover:bg-[#1ebe57] hover:scale-110 active:scale-95"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}
