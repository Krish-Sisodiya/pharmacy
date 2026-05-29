import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const team = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: 2,
    name: "Ankit Verma",
    role: "Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
];

const socialIcons = [
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaInstagram />, label: "Instagram" },
  { icon: <FaLinkedinIn />, label: "LinkedIn" },
];

const Team = () => {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">

      
      <div className="container-custom relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 px-2"
        >
          {/* BADGE */}
          <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
            Our Leadership
          </div>

          {/* TITLE */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight mb-3">
            Meet Our
            <span className="gradient-text block">Team Experts</span>
          </h2>

          {/* TEXT */}
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Dedicated healthcare professionals delivering trusted
            pharmacy and wellness solutions.
          </p>
        </motion.div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg"
            >
              {/* IMAGE */}
              <div className="relative h-[300px] sm:h-[340px] md:h-[380px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* OVERLAY — mobile pe thoda zyada dark taaki text padhe */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />

                {/* GREEN GLOW */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-400/20 blur-[60px] rounded-full" />

                {/* CONTENT — mobile pe ALWAYS visible, desktop pe hover pe enhanced */}
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 text-white">

                  {/* ROLE */}
                  <p className="text-green-400 uppercase tracking-widest text-[10px] sm:text-xs font-semibold mb-1">
                    {member.role}
                  </p>

                  {/* NAME */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3">
                    {member.name}
                  </h3>

                  {/* SOCIALS — mobile pe always show, desktop pe hover */}
                  <div className="flex items-center gap-2.5
                    opacity-100 sm:opacity-0 sm:translate-y-4
                    sm:group-hover:opacity-100 sm:group-hover:translate-y-0
                    transition-all duration-400"
                  >
                    {socialIcons.map((social) => (
                      <motion.div
                        key={social.label}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                        className="
                          w-9 h-9 sm:w-10 sm:h-10
                          rounded-xl
                          bg-white/15 backdrop-blur-md
                          border border-white/20
                          flex items-center justify-center
                          text-sm
                          hover:bg-green-500
                          transition duration-300
                          cursor-pointer
                        "
                      >
                        {social.icon}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;