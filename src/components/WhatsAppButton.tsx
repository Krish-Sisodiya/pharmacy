import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917389812435"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-2xl hover:scale-110 transition"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;