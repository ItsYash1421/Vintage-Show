import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-[#0d0d0d] text-white pt-[45px] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-[#1a1a1a] p-10 rounded-2xl shadow-lg border border-gray-800"
      >
        <h1 className="text-5xl font-extrabold text-[#facc15] tracking-wide text-center">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-center mt-3">
          Let's create something amazing together. Reach out to collaborate!
        </p>

        <div className="mt-8 space-y-6">
          {/* About */}
          <div>
            <h2 className="text-xl font-semibold text-[#facc15]">About Me</h2>
            <p className="text-gray-300">
              I'm a B.Tech CSE student at IIIT Nagpur (2022-2026), specializing in frontend development, web technologies, and machine learning.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xl font-semibold text-[#facc15]">Experience</h2>
            <ul className="list-disc pl-5 text-gray-300">
              <li>Frontend Developer Intern at Prodigy Infotech</li>
              <li>Developed Connect App, a social platform using React & Appwrite.</li>
              <li>Built an Online Voting System with PHP & MySQL.</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xl font-semibold text-[#facc15]">Skills</h2>
            <p className="text-gray-300">
              Proficient in React.js, Next.js, Tailwind CSS, TypeScript, Appwrite, C++, Python, SQL, and Power BI.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold text-[#facc15]">Contact Info</h2>
            <p className="text-gray-300">
              📧 Email: <a href="mailto:yashamanmeena2@gmail.com" className="text-[#facc15] hover:underline">yashamanmeena2@gmail.com</a> <br />
              💼 LinkedIn: <a href="https://linkedin.com/in/your-profile" className="text-[#facc15] hover:underline">linkedin.com/in/your-profile</a> <br />
              🖥️ GitHub: <a href="https://github.com/your-github" className="text-[#facc15] hover:underline">github.com/your-github</a>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 w-full bg-[#facc15] text-black py-3 rounded-lg font-semibold tracking-wider text-lg shadow-md hover:bg-[#eab308] transition"
        >
          Let's Connect
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Contact;
