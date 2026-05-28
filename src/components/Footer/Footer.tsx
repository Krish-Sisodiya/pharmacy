import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
      relative
      overflow-hidden
      bg-gradient-to-b
      from-[#062b16]
      via-[#041f11]
      to-black
      text-white
      pt-20
      pb-8
    "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-green-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[260px] h-[260px] bg-green-400/10 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* TOP GRID */}
        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-12
          pb-14
          border-b
          border-white/10
        "
        >

          {/* LOGO */}
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-4 mb-6">

              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.05,
                }}
                className="
                w-16
                h-16
                rounded-3xl
                bg-gradient-to-br
                from-green-500
                to-green-700
                flex items-center justify-center
                text-3xl
                font-black
                shadow-[0_10px_40px_rgba(34,197,94,0.4)]
              "
              >

                P

              </motion.div>

              <div>

                <h2 className="text-3xl font-black">
                  PharmaCare
                </h2>

                <p className="text-green-300 text-sm">
                  Healthcare Platform
                </p>

              </div>

            </div>

            {/* TEXT */}
            <p
              className="
              text-gray-300
              leading-relaxed
              text-[15px]
            "
            >

              Premium pharmacy and wellness
              platform providing trusted
              healthcare, skincare, and
              wellness products with
              modern service experiences.

            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8">

              {[FaFacebookF, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      y: -6,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-white/10
                    backdrop-blur-xl
                    border border-white/10
                    flex items-center justify-center
                    text-lg
                    cursor-pointer
                    hover:bg-green-500
                    transition duration-300
                  "
                  >

                    <Icon />

                  </motion.div>

                )
              )}

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3
              className="
              text-2xl
              font-bold
              mb-7
            "
            >
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                "Home",
                "Products",
                "Services",
                "About",
                "Contact",
              ].map((item) => (

                <motion.li
                  key={item}
                  whileHover={{
                    x: 6,
                  }}
                  className="
                  text-gray-300
                  hover:text-green-400
                  cursor-pointer
                  transition duration-300
                  w-fit
                "
                >

                  <a href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>

                </motion.li>

              ))}

            </ul>

          </div>

          {/* SERVICES */}
          <div>

            <h3
              className="
              text-2xl
              font-bold
              mb-7
            "
            >
              Services
            </h3>

            <ul className="space-y-4">

              {[
                "Healthcare",
                "Wellness",
                "Skincare",
                "Medical Support",
                "Pharmacy Products",
              ].map((item) => (

                <motion.li
                  key={item}
                  whileHover={{
                    x: 6,
                  }}
                  className="
                  text-gray-300
                  hover:text-green-400
                  cursor-pointer
                  transition duration-300
                  w-fit
                "
                >

                  {item}

                </motion.li>

              ))}

            </ul>

          </div>

          {/* EXTRA LINKS */}
          <div>

            <h3
              className="
              text-2xl
              font-bold
              mb-7
            "
            >
              Legal
            </h3>

            <ul className="space-y-4">

              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Support",
                "Disclaimer",
                "Help Center",
              ].map((item) => (

                <motion.li
                  key={item}
                  whileHover={{
                    x: 6,
                  }}
                  className="
                  text-gray-300
                  hover:text-green-400
                  cursor-pointer
                  transition duration-300
                  w-fit
                "
                >

                  {item}

                </motion.li>

              ))}

            </ul>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
          pt-8
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-5
        "
        >

          {/* COPYRIGHT */}
          <p
            className="
            text-gray-400
            text-sm
            text-center
            md:text-left
          "
          >

            © 2026 PharmaCare. All Rights Reserved.

          </p>

          {/* MADE BY */}
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="
            px-5
            py-3
            rounded-full
            bg-white/5
            border border-white/10
            text-sm
            text-gray-300
            backdrop-blur-xl
          "
          >

            Made With ❤️ By
            <span className="text-green-400 font-semibold">
              {" "}Sylect Us
            </span>

          </motion.div>

          {/* SCROLL TOP */}
          <motion.a
            href="#home"
            whileHover={{
              y: -5,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-br
            from-green-500
            to-green-700
            flex items-center justify-center
            shadow-[0_10px_40px_rgba(34,197,94,0.4)]
            cursor-pointer
          "
          >

            <FaArrowUp className="text-xl" />

          </motion.a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;