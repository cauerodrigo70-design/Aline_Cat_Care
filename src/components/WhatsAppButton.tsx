import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps { whatsappUrl: string; }

export function WhatsAppButton({ whatsappUrl }: WhatsAppButtonProps) {
  return <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/25 transition hover:scale-110 hover:bg-[#1ebe57] active:scale-95 sm:bottom-7 sm:right-7"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" /><MessageCircle className="relative h-6 w-6" /></a>;
}
