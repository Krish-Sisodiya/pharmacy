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
  },

  {
    id: 2,
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    value: "+91 9999999999",
  },

  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    title: "Office Address",
    value: "Raipur, Chhattisgarh",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="
      relative
      overflow-hidden
      py-24
      bg-gradient-to-b
      from-white
      via-green-50/40
      to-white
    "
    >

      {/* BG GLOW */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-green-200/30 blur-[110px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-green-300/20 blur-[100px] rounded-full"></div>

      <div
        className="
        container-custom
        relative
        z-10
        grid
        lg:grid-cols-2
        gap-14
        items-center
      "
      >

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >

          {/* BADGE */}
          <div
            className="
            inline-flex
            items-center
            bg-green-100
            text-green-700
            px-5 py-3
            rounded-full
            font-semibold
            mb-6
          "
          >

            Contact PharmaCare

          </div>

          {/* TITLE */}
          <h2
            className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-black
            leading-tight
            mb-6
          "
          >

            Let's Connect

            <span className="gradient-text block">
              With Us
            </span>

          </h2>

          {/* CONTACT CARDS */}
          <div className="space-y-5">

            {contactData.map((item) => (

              <motion.div
                key={item.id}
                whileHover={{
                  x: 8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                group
                flex
                items-center
                gap-5
                bg-white/70
                backdrop-blur-xl
                border border-green-100
                rounded-3xl
                p-5
                shadow-lg
              "
              >

                {/* ICON */}
                <div
                  className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-green-100
                  flex
                  items-center
                  justify-center
                  text-green-600
                  text-xl
                  group-hover:bg-green-600
                  group-hover:text-white
                  transition duration-300
                "
                >

                  {item.icon}

                </div>

                {/* TEXT */}
                <div>

                  <h3
                    className="
                    text-lg
                    font-bold
                    mb-1
                  "
                  >

                    {item.title}

                  </h3>

                  <p className="text-gray-500">

                    {item.value}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-10">

            {/* ICON */}
            <motion.div
              whileHover={{
                y: -5,
                scale: 1.08,
              }}
              className="
              w-12
              h-12
              rounded-2xl
              bg-green-100
              text-green-600
              flex
              items-center
              justify-center
              text-lg
              cursor-pointer
              hover:bg-green-600
              hover:text-white
              transition duration-300
            "
            >

              <FaFacebookF />

            </motion.div>

            {/* ICON */}
            <motion.div
              whileHover={{
                y: -5,
                scale: 1.08,
              }}
              className="
              w-12
              h-12
              rounded-2xl
              bg-green-100
              text-green-600
              flex
              items-center
              justify-center
              text-lg
              cursor-pointer
              hover:bg-green-600
              hover:text-white
              transition duration-300
            "
            >

              <FaInstagram />

            </motion.div>

            {/* ICON */}
            <motion.div
              whileHover={{
                y: -5,
                scale: 1.08,
              }}
              className="
              w-12
              h-12
              rounded-2xl
              bg-green-100
              text-green-600
              flex
              items-center
              justify-center
              text-lg
              cursor-pointer
              hover:bg-green-600
              hover:text-white
              transition duration-300
            "
            >

              <FaLinkedinIn />

            </motion.div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="relative"
        >

          {/* MAIN IMAGE */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            overflow-hidden
            rounded-[35px]
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          "
          >

            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88"
              alt="Contact"
              className="
              w-full
              h-[500px]
              object-cover
            "
            />

          </motion.div>

          {/* FLOATING CARD */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            absolute
            bottom-6
            left-6
            bg-white/20
            backdrop-blur-2xl
            border border-white/20
            rounded-3xl
            px-6 py-5
            shadow-2xl
          "
          >

            <h3
              className="
              text-white
              text-xl
              font-bold
              mb-2
            "
            >

              PharmaCare

            </h3>

            <p className="text-green-100">

              Trusted Healthcare &
              Wellness Solutions

            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default Contact;