import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const contactData = [
  {
    id: 1,
    icon: <FaEnvelope />,
    title: "Email Address",
    value: "aushadhiwalah@gmail.com",
    href: "mailto:aushadhiwalah@gmail.com",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    value: "+91 9691190195",
    href: "tel:+919691190195",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    title: "Office Address",
    value: "Industrial Area Sanwer Road, Indore",
    href: "https://maps.google.com/?q=Industrial+Area+Sanwer+Road+Indore",
  },
];

const socialIcons = [
  { 
    icon: <FaFacebookF />, 
    label: "Facebook",
    url: "https://www.facebook.com/share/1Bxnsrkg85/?mibextid=wwXIfr" 
  },
  { 
    icon: <FaInstagram />, 
    label: "Instagram",
    url: "https://www.instagram.com/aushadhiwalah?stkn=eDE1NTB0cWNoZ2lm" 
  },
  { 
    icon: <FaLinkedinIn />, 
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/aushadhi-walah/" 
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-x-hidden py-10 sm:py-16 lg:py-24"
    >
      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* LEFT — TEXT + CONTACT CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 flex flex-col"
          >
            {/* BADGE */}
            <div className="inline-flex items-center self-start bg-green-100 text-green-700 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
              Contact Aushadhi Walah
            </div>

            {/* TITLE */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight mb-3">
              Let's Connect
              <span className="gradient-text block">With Us</span>
            </h2>

            {/* SUBTITLE */}
            <p className="text-gray-600 text-xs sm:text-base leading-relaxed mb-6 max-w-md">
              Have a question or need help? Reach out to us anytime —
              we're here to provide trusted healthcare guidance.
            </p>

            {/* CONTACT CARDS */}
            <div className="space-y-3 mb-6 sm:mb-8">
              {contactData.map((item, index) => (
                <motion.a
                  href={item.href}
                  key={item.id}
                  target={item.id === 3 ? "_blank" : undefined}
                  rel={item.id === 3 ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-3 sm:gap-4 bg-white border border-green-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300 cursor-pointer"
                >
                  {/* ICON BOX */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-green-50 flex items-center justify-center text-green-600 text-sm sm:text-lg shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-0.5">
                      {item.title}
                    </p>
                    <h3 className="text-gray-800 text-xs sm:text-base font-bold truncate">
                      {item.value}
                    </h3>
                  </div>

                  {/* ARROW */}
                  <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-500 opacity-60 group-hover:opacity-100 transition-all duration-300">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-[11px] sm:text-xs font-medium">Follow Us</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-green-100 text-green-700 flex items-center justify-center text-xs sm:text-base cursor-pointer hover:bg-green-600 hover:text-white transition duration-300 shadow-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 w-full max-w-lg mx-auto lg:max-w-none"
          >
            {/* DECORATIVE RINGS (Desktop only) */}
            <div className="hidden lg:block absolute -top-6 -right-6 w-72 h-72 rounded-full border-2 border-dashed border-green-200/60 pointer-events-none" />
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-48 h-48 rounded-full border border-green-300/40 pointer-events-none" />

            {/* IMAGE WRAPPER */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[36px] shadow-lg lg:shadow-[0_25px_70px_rgba(0,0,0,0.13)] border border-green-100"
            >
              <img
                src="../../../public/img/categries 3.jpeg"
                alt="Contact Aushadhi Walah"
                className="w-full h-[200px] xs:h-[240px] sm:h-[340px] lg:h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;