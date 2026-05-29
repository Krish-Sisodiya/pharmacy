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
    value: "pharmacy@gmail.com",
    href: "mailto:pharmacy@gmail.com",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    value: "+91 9999999999",
    href: "tel:+919999999999",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    title: "Office Address",
    value: "Raipur, Chhattisgarh",
    href: "#",
  },
];

const socialIcons = [
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaInstagram />, label: "Instagram" },
  { icon: <FaLinkedinIn />, label: "LinkedIn" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-x-hidden py-14 sm:py-20 lg:py-28"
    >
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT — TEXT + CONTACT CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 flex flex-col"
          >
            {/* BADGE */}
            <div className="inline-flex items-center self-start bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-4 lg:mb-5">
              Contact PharmaCare
            </div>

            {/* TITLE */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] mb-3 lg:mb-5">
              Let's Connect
              <span className="gradient-text block">With Us</span>
            </h2>

            {/* SUBTITLE */}
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 max-w-md">
              Have a question or need help? Reach out to us anytime —
              we're here to provide trusted healthcare guidance.
            </p>

            {/* CONTACT CARDS */}
            <div className="space-y-3 sm:space-y-4 mb-7 lg:mb-9">
              {contactData.map((item, index) => (
                <motion.a
                  href={item.href}
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-4 lg:gap-5 bg-white border border-green-100 rounded-2xl p-4 lg:p-5 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300 cursor-pointer"
                >
                  {/* ICON BOX */}
                  <div className="w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-green-50 flex items-center justify-center text-green-600 text-base lg:text-xl shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs font-medium mb-0.5 uppercase tracking-wider">
                      {item.title}
                    </p>
                    <h3 className="text-gray-800 text-sm sm:text-base lg:text-lg font-bold truncate">
                      {item.value}
                    </h3>
                  </div>

                  {/* ARROW */}
                  <div className="ml-auto shrink-0 w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-gray-400 text-xs font-medium">Follow Us</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-sm lg:text-base cursor-pointer hover:bg-green-600 hover:text-white transition duration-300"
                >
                  {social.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            {/* DECORATIVE RING — desktop only */}
            <div className="hidden lg:block absolute -top-6 -right-6 w-72 h-72 rounded-full border-2 border-dashed border-green-200/60 pointer-events-none" />
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-48 h-48 rounded-full border border-green-300/40 pointer-events-none" />

            {/* IMAGE WRAPPER */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative overflow-hidden rounded-3xl lg:rounded-[40px] shadow-[0_25px_70px_rgba(0,0,0,0.13)]"
            >
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80"
                alt="Contact PharmaCare"
                className="w-full h-[220px] sm:h-[360px] lg:h-[560px] object-cover"
              />

              {/* OVERLAY — subtle on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* FLOATING CARD — inside image, bottom */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6"
              >
                <div className="bg-white/15 backdrop-blur-2xl border border-white/25 rounded-2xl lg:rounded-3xl px-4 py-3 lg:px-6 lg:py-5">
                  <div className="flex items-center gap-3 lg:gap-4">
                    {/* ICON */}
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-green-500 flex items-center justify-center text-white text-base lg:text-lg shrink-0">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <p className="text-white/70 text-xs mb-0.5">Available 24/7</p>
                      <h3 className="text-white font-bold text-sm lg:text-base">
                        PharmaCare Support
                      </h3>
                      <p className="text-green-300 text-xs lg:text-sm">
                        Trusted Healthcare & Wellness
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;