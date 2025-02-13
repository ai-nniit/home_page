// import { FiArrowRight , FiZap} from "react-icons/fi";
// import React, { useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import Blob from "../../assets/blob.svg";
// import { motion } from "framer-motion";
// import BannerCarousel from "../Banner/Banner";
// import { FaGraduationCap, FaMicroscope } from "react-icons/fa";

// // Indian States List
// const indianStates = [
//   "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
//   "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
//   "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
//   "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
//   "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
//   "Uttar Pradesh", "Uttarakhand", "West Bengal", 
//   "Andaman and Nicobar Islands", "Chandigarh", 
//   "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", 
//   "Ladakh", "Lakshadweep", "Puducherry"
// ];

// export const FadeUp = (delay) => {
//   return {
//     initial: {
//       opacity: 0,
//       y: 50,
//     },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         duration: 0.5,
//         delay: delay,
//         ease: "easeInOut",
//       },
//     },
//   };
// };

// const Hero = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     state: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//     console.log(formData);
//   };


  
//   return (
//     <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 overflow-hidden relative">
//       <Navbar />
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <BannerCarousel/>
//       <div className="container grid grid-cols-1 lg:grid-cols-2  min-h-[50px]  relative">
//         {/* Brand Info */}
//           <div className="flex flex-col justify-center py-5 md:py-5 relative">
//                               <div className="text-start md:text-left space-y-2 lg:max-w-[400px]">
//                     <motion.h1
//                       variants={FadeUp(0.6)}
//                       initial="initial"
//                       animate="animate"
//                       className="font-sans text-5xl font-semibold text-[rgb(97,97,97)]"
//                     >
//                       Revolutionizing{" "}
//                       <span className="bg-gradient-to-br from-gray-400 via-pink-400 to-green-400 text-transparent bg-clip-text">
//                         Education
//                       </span>{" "}
//                       with{" "}
//                       <span className="bg-gradient-to-br from-gray-400 via-pink-400 to-green-400 text-transparent bg-clip-text">
//                         AI
//                       </span>
//                     </motion.h1>
//                         <motion.h6
//                           variants={FadeUp(0.8)}
//                           initial="initial"
//                           animate="animate"
//                           className="font-sans text-2xl font-medium text-[rgb(97,97,97)]"
//                         >
//                           Experience the future of learning with AI-driven online
//                           education solutions.
//                         </motion.h6>
//           </div>
//           <br/>
//           <div className="flex justify-start items-center space-x-8">
//               <motion.button
//                 className="flex items-center bg-blue-500 text-white rounded-[5%] p-2 sm:text-left hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition-all"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 IIT JEE
//                 {/* <FiArrowRight className="ml-2 text-lg" /> */}
//                 <FaGraduationCap className="ml-2 text-lg"/>
//               </motion.button>
    
//                 <motion.button
//                   className="flex items-center bg-blue-500 text-white rounded-[5%] p-2 sm:text-left hover:bg-blue-700 focus:ring-2 focus:ring-gray-400 transition-all"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   NEET
//                   {/* <FiZap className="ml-2 text-lg" /> */}
                  
//                   <FaMicroscope className="ml-2 text-lg"/>
//                 </motion.button>
//                 <motion.button
//                   className="flex items-center bg-blue-500 text-white rounded-[5%] p-2 sm:text-left hover:bg-blue-700 focus:ring-2 focus:ring-gray-400 transition-all"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Explore
//                   <FiZap className="ml-2 text-lg" />
//                 </motion.button>
//               </div>
//               <br/>
//         </div>
//         {/* Form Section */}
//         <div className="flex justify-center items-center">
//           <motion.div 
//             variants={FadeUp(0.8)}
//             initial="initial"
//             animate="animate"
//             className="w-full max-w-[500px] md:max-w-[400px]"
//           >
//             <form 
//               onSubmit={handleSubmit}
//               className="space-y-4 w-full"
//             >
//               <input 
//                 type="text" 
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter Your Name"
//                 className="w-full p-3 border rounded-lg"
//                 required 
//               />
//               <div className="flex gap-2">
//                 <input 
//                   type="tel" 
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter Your Phone Number"
//                   className="flex-grow p-3 border rounded-lg"
//                   required 
//                 />
//                 <button 
//                   type="button" 
//                   className="bg-secondary text-white px-4 rounded-lg"
//                 >
//                   Send OTP
//                 </button>
//               </div>
//               <div className="flex space-x-4">
//               <input 
//                   type="otp" 
//                   name="otp"
//                   // value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter OTP Here"
//                   className="w-1/2 p-3 border rounded-lg"
//                   required 
//                 />
//                 <select 
//                     name="dropdown" 
//                     value={formData.dropdown} 
//                     onChange={handleChange} 
//                     className="w-1/2 p-3 px-4 border rounded-lg"
//                     required
//                   >
//                     <option value="" disabled>Select an option</option>
//                     <option value="iit/jee">IIT/JEE</option>
//                     <option value="neet">NEET</option>
//                     <option value="sat">SAT</option>
//                     <option value="ipmat">IPMAT</option>
//                     <option value="class 12">CLASS 12</option>
//                     <option value="class 11">CLASS 11</option>
//                     <option value="class 10">CLASS 10</option>
//                     <option value="class 9">CLASS 9</option>
//                     <option value="class 8">CLASS 8</option>
//                     <option value="class 7">CLASS 7</option>
//                     <option value="class 6">CLASS 6</option>
                    
//                   </select>
//               </div>
//               <select 
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg"
//                 required
//               >
//                 <option value="">Select Your State</option>
//                 {indianStates.map((state, index) => (
//                   <option key={index} value={state}>{state}</option>
//                 ))}
//               </select>
//               <button 
//                 type="submit" 
//                 className="primary-btn flex items-center gap-2 group w-full justify-center"
//               >
//                 Submit
//                 <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
//               </button>
//             </form>
//           </motion.div>
          
//           <motion.img
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
//             src={Blob}
//             alt=""
//             className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[-1] hidden md:block opacity-50"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { FiArrowRight, FiZap } from "react-icons/fi";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
//  import Blob from "../../assets/blob.svg";
import { motion } from "framer-motion";
import BannerCarousel from "../Banner/Banner";
import { FaGraduationCap, FaMicroscope } from "react-icons/fa";

const indianStates = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];


// Reusable CountUp Hook
const useCountUp = (target, duration, startCount) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

    const increment = Math.ceil(target / (duration / 10)); // Increment value per interval
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(interval);
        setCount(target); // Ensure the final value is set
      } else {
        setCount(current);
      }
    }, 20); // 10ms interval

    return () => clearInterval(interval);
  }, [target, duration, startCount]);

  return count;
};

// Fade Animation
export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

// Hero Component
const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
  });
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef();

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 overflow-hidden relative" >
      <Navbar />
      <br />
      <br/>
      
      <BannerCarousel />
      <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-[50px] relative">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-1 md:py-1 relative">
          <div className="text-start md:text-left space-y-2 lg:max-w-[500px]">
                                  <motion.h1
                          variants={FadeUp(0.6)}
                          initial="initial"
                          animate="animate"
                          className="font-sans text-3xl font-semibold text-[rgb(97,97,97)]"
                        >
                          Revolutionizing{" "}
                          <span
                            className="bg-gradient-to-r from-gray-400 via-blue-400 to-green-400 
                                      text-transparent bg-clip-text 
                                      animate-gradient bg-gradient-size"
                          >
                            Education
                          </span>{" "}
                          with{" "}
                          <span
                            className="bg-gradient-to-br from-gray-400 via-blue-400 to-green-400 
                                      text-transparent bg-clip-text 
                                      animate-gradient bg-gradient-size"
                          >
                            AI
                          </span>
                        </motion.h1>


            <motion.h6
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="font-sans text-2xl font-medium text-[rgb(97,97,97)]"
            >
              Experience the future of learning with AI-driven online education
              solutions.
            </motion.h6>
          </div>
          <br />
          <div className="flex justify-start items-center space-x-8">
            <motion.button
              className="flex items-center bg-[#5F81C3] text-white rounded-[5%] p-2 sm:text-left hover:bg-[#C3A15F] focus:ring-2 focus:ring-blue-400 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              IIT JEE
              <FaGraduationCap className="ml-2 text-lg" />
            </motion.button>

            <motion.button
              className="flex items-center bg-[#289DD7] text-white rounded-[5%] p-2 sm:text-left hover:bg-[#076228] focus:ring-2 focus:ring-gray-400 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              NEET
              <FaMicroscope className="ml-2 text-lg" />
            </motion.button>
            <motion.button
              className="flex items-center bg-[#F89E07] text-white rounded-[5%] p-2 sm:text-left hover:bg-[#0761F8] focus:ring-2 focus:ring-gray-400 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore
              <FiZap className="ml-2 text-lg" />
            </motion.button>
          </div>
          <br />

          {/* Statistics Section */}
          <div ref={statsRef} className="flex flex-col sm:flex-row justify-start space-y-1 sm:space-y-0 sm:space-x-5 ml-0">
            {/* Stat 1 */}
            <div className="text-center sm:text-left">
              <h3 className="text-4xl font-bold text-[#3577F2]">
                {useCountUp(95, 2000, startCount)}%
              </h3>
              <p className="text-gray-400">Personalization accuracy</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center sm:text-left">
              <h3 className="text-4xl font-bold text-[#3577F2]">
                {useCountUp(30, 2000, startCount)}%
              </h3>
              <p className="text-gray-400">Learning efficiency improvement</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center sm:text-left">
              <h3 className="text-4xl font-bold text-[#3577F2]">
                {useCountUp(100000, 2000, startCount).toLocaleString()}+
              </h3>
              <p className="text-gray-400">Active users utilizing the platform</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex justify-center items-center">
          <motion.div
            variants={FadeUp(0.8)}
            initial="initial"
            animate="animate"
            className="w-full max-w-[500px] md:max-w-[400px]"
          >
            <form onSubmit={handleSubmit} className="space-y-2 w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full p-2.5 border rounded-lg"
                required
              />
              <div className="flex gap-2">
                <input
                  type="tel"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  className="flex-grow p-2.5 border rounded-lg"
                  required
                />
                <button type="button" className="bg-secondary text-white px-4 rounded-lg">
                  Send OTP
                </button>
              </div>
              <div className="flex space-x-4">
                <input
                  type="otp"
                  name="otp"
                  onChange={handleChange}
                  placeholder="Enter OTP Here"
                  className="w-1/2 p-2.5 border rounded-lg"
                  required
                />
                <select
                  name="dropdown"
                  value={formData.dropdown}
                  onChange={handleChange}
                  className="w-1/2 p-2.5 px-4 border rounded-lg"
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="iit/jee">IIT/JEE</option>
                  <option value="neet">NEET</option>
                  <option value="sat">SAT</option>
                  <option value="ipmat">IPMAT</option>
                  <option value="class 12">CLASS 12</option>
                  <option value="class 11">CLASS 11</option>
                  <option value="class 10">CLASS 10</option>
                  <option value="class 9">CLASS 9</option>
                  <option value="class 8">CLASS 8</option>
                  <option value="class 7">CLASS 7</option>
                  <option value="class 6">CLASS 6</option>
                </select>
              </div>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2.5 border rounded-lg"
                required
              >
                <option value="">Select Your State</option>
                {/* Render States */}
                {indianStates.map((state, index) => (
                   <option key={index} value={state}>{state}</option>
                 ))}
              </select>
              <button type="submit" className="primary-btn flex items-center gap-2 group w-full justify-center">
                Submit
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </form>
          </motion.div>

          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            // src={Blob}
            alt=""
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[-1] hidden md:block opacity-50"
          />
        </div>
      </div>
      <br/>
    </section>
  );
};

export default Hero;
