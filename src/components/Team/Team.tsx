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
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },

  {
    id: 2,
    name: "Ankit Verma",
    role: "Director",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
];

const Team = () => {
  return (
    <section
      className="
      relative
      overflow-hidden
      py-20
      bg-gradient-to-b
      from-green-50
      via-white
      to-green-50
    "
    >

      {/* BG GLOW */}
      <div className="absolute top-0 left-0 w-[260px] h-[260px] bg-green-200/30 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-green-300/20 blur-[90px] rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-14"
        >

          {/* BADGE */}
          <div
            className="
            inline-flex
            items-center
            bg-green-100
            text-green-700
            px-5 py-2.5
            rounded-full
            text-sm
            font-semibold
            mb-5
          "
          >

            Our Leadership

          </div>

          {/* TITLE */}
          <h2
            className="
            text-3xl
            md:text-5xl
            font-black
            leading-tight
            mb-4
          "
          >

            Meet Our

            <span className="gradient-text block">
              Team Experts
            </span>

          </h2>

          {/* TEXT */}
          <p
            className="
            text-gray-600
            text-base
            md:text-lg
            max-w-2xl
            mx-auto
            leading-relaxed
          "
          >

            Dedicated healthcare professionals
            delivering trusted pharmacy and
            wellness solutions.

          </p>

        </motion.div>

       {/* TEAM GRID */}
<div
  className="
  grid
  sm:grid-cols-2
  gap-6
  lg:gap-8
  max-w-4xl
  mx-auto
"
>

  {team.map((member) => (

    <motion.div
      key={member.id}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-[26px]
      h-[300px]
      md:h-[360px]
      cursor-pointer
      shadow-[0_15px_35px_rgba(0,0,0,0.12)]
    "
    >

      {/* IMAGE */}
      <img
        src={member.image}
        alt={member.name}
        className="
        w-full
        h-full
        object-cover
        grayscale
        group-hover:grayscale-0
        group-hover:scale-105
        transition duration-700
      "
      />

      {/* OVERLAY */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/90
        via-black/10
        to-transparent
      "
      ></div>

      {/* GREEN GLOW */}
      <div
        className="
        absolute
        top-0
        right-0
        w-28
        h-28
        bg-green-400/20
        blur-[70px]
        rounded-full
      "
      ></div>

      {/* CONTENT */}
      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        p-5
        text-white

        opacity-0
        translate-y-10

        group-hover:opacity-100
        group-hover:translate-y-0

        transition-all
        duration-500
      "
      >

        {/* ROLE */}
        <p
          className="
          text-green-300
          uppercase
          tracking-[3px]
          text-xs
          font-semibold
          mb-2
        "
        >

          {member.role}

        </p>

        {/* NAME */}
        <h3
          className="
          text-2xl
          md:text-3xl
          font-black
          mb-4
        "
        >

          {member.name}

        </h3>

        {/* SOCIALS */}
        <div className="flex items-center gap-3">

          {/* ICON */}
          <motion.div
            whileHover={{
              y: -4,
              scale: 1.08,
            }}
            className="
            w-10
            h-10
            rounded-2xl
            bg-white/15
            backdrop-blur-xl
            border border-white/20
            flex items-center justify-center
            text-sm
            hover:bg-green-500
            transition duration-300
          "
          >

            <FaFacebookF />

          </motion.div>

          {/* ICON */}
          <motion.div
            whileHover={{
              y: -4,
              scale: 1.08,
            }}
            className="
            w-10
            h-10
            rounded-2xl
            bg-white/15
            backdrop-blur-xl
            border border-white/20
            flex items-center justify-center
            text-sm
            hover:bg-green-500
            transition duration-300
          "
          >

            <FaInstagram />

          </motion.div>

          {/* ICON */}
          <motion.div
            whileHover={{
              y: -4,
              scale: 1.08,
            }}
            className="
            w-10
            h-10
            rounded-2xl
            bg-white/15
            backdrop-blur-xl
            border border-white/20
            flex items-center justify-center
            text-sm
            hover:bg-green-500
            transition duration-300
          "
          >

            <FaLinkedinIn />

          </motion.div>

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