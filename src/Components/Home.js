// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import './Home.css'

// function Home() {

//   const [APOD, setAPOD] = useState([]);

//   const getAPOD = async () => {
//     const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=FTAyielV11srYl8bPtd4qoc1LIJwxnmZ3dQRbUcs&date=2024-10-05`)
//     let apod = await response.json()
//     setAPOD(apod);
//   }

//   useEffect(() => {
//     getAPOD();
//   }, [])

//   const [selectedOption, setSelectedOption] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

//   const handleOptionClick = (index) => {
//     setSelectedOption(index);
//   };

//   const handleSubmit = () => {
//     setSubmitted(true);
//   };

//   const handleInputChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleEsubmit = (e) => {
//     e.preventDefault(); // Prevent the default form submission
//     setEsubmitted(true);
//   };

//   const [email, setEmail] = useState('');
//   const [esubmitted, setEsubmitted] = useState(false);

//   const members = [
//     { name: 'Lakshya Sharma', description: 'Astronomy Enthusiast and Space Scientist' },
//     { name: 'Likith Reddy', description: 'Astrophysicist and Researcher' },
//     { name: 'Samarth BC', description: 'Planetary Geologist and Explorer' },
//     { name: 'Sambhram', description: 'Cosmologist and Educator' },
//     { name: 'Vishal Krishna', description: 'Astrobiologist and Space Advocate' },
//   ];


//   return (
//     <>
//       <div className="main-container">
//         <div className="logo-container">
//           <img src={require("../Static/Logos/logo_main_circle_cropped_png.png")} alt="Logo" className="logo" />
//         </div>
//         <h1 className="main-title" style={{fontFamily:"Playwrite FR Moderne", fontSize:"40px"}}>The Space Magazine</h1>
//         <div className="description-container">
//           <p className="description">
//           Welcome to the Space Magazine, your hub for exploring the universe! Stay updated with the latest Space News, dive into our Weekly Magazines filled with fascinating discoveries, and explore in-depth content with our E-books. Challenge your knowledge through fun Quizzes, simulate random star systems to experience the cosmos firsthand, and embark on an Exoplanet search to uncover distant worlds. Explore space like never before!
//           </p>
//         </div>
//       </div>

//       <div className="container-box container">
//         {/* Image Section */}
//         <div className="image-section">
//           <img
//             src={APOD.hdurl}
//             alt="Placeholder"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="content-section">
//           <h2 style={{textDecoration:"underline"}}>ASTRONOMY IMAGE OF THE DAY</h2>
//           <h2>{APOD.title}</h2>
//           <p>
//             {APOD.explanation}
//           </p>
//           <p>
//             Source: NASA Astronomy Picture of The Day (APOD)
//           </p>
//         </div>
//       </div>

//       <div className="mt-4 container">
//         <div className="trivia-container">
//           <h2 className="text-white">Daily Trivia</h2>
//           <h2 className="question">What is the closest planet to the Sun?</h2>
//           <div className="options-container">
//             {options.map((option, index) => (
//               <div
//                 key={index}
//                 className={`option-box ${selectedOption === index ? 'selected' : ''}`}
//                 onClick={() => handleOptionClick(index)}
//               >
//                 {option}
//               </div>
//             ))}
//           </div>
//           <button className="submit-btn" onClick={handleSubmit}>
//             Submit
//           </button>
//           {submitted && <p className="submitted-text mb-0">Your answer has been recorded</p>}
//           {submitted && <p className="submitted-text my-0 py-0">The answer will be updated tomorrow</p>}
//         </div>
//       </div>

//       <div className="solar-container">
//         <h2 className="solar-title">Simulate a Star System</h2>
//         <p className="solar-description">
//           Convert your imaginations into simulations to visualise a random possible Star System
//         </p>
//         <Link to="https://threesolar.netlify.app/" target='_blank'><button className="solar-button">Simulate</button></Link>
//         <h6 className='text-center text-light mt-4'>Source: https://threesolar.netlify.app/</h6>
//       </div>

//       <div className="solar-container">
//         <h2 className="solar-title">Create your own exoplanet</h2>
//         <p className="solar-description">
//           Using various features and parameters, create and simulate your own exoplanet...
//         </p>
//         <Link to="https://dgreenheck.github.io/threejs-procedural-planets/" target='_blank'><button className="solar-button">Simulate</button></Link>
//         <h6 className='text-center text-light mt-4'>Source: https://dgreenheck.github.io/threejs-procedural-planets/</h6>
//       </div>

//       <div className="subscribe-container mt-4">
//         <h2>Subscribe to our weekly Space Magazines</h2>
//         <form onSubmit={handleEsubmit}>
//           <input
//             type="email"
//             value={email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//             required
//             className="email-input"
//           />
//           <button type="submit" className="submit-btn">Subscribe</button>
//         </form>
//         {esubmitted && <p className="submitted-text">Thank you for subscribing!</p>}
//       </div>

//       <div className="member-container">
//         {members.map((member, index) => (
//           <div className="member-card" key={index}>
//             <h3 className="member-name">{member.name}</h3>
//             <p className="member-description d-flex justify-content-evenly"><i className="fa-brands fa-github"></i><i className="fa-brands fa-linkedin"></i></p>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
//import './Random.css';

function Home() {
  const [APOD, setAPOD] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [email, setEmail] = useState('');
  const [esubmitted, setEsubmitted] = useState(false);

  const options = ['Proxima Centuri b', 'Kepler 186f', 'HD 209458 b', 'Gliese 667 Cc']; // Correct answer is 'Mercury'
  const correctAnswerIndex = 0; // Index of the correct answer

  const getAPOD = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=FTAyielV11srYl8bPtd4qoc1LIJwxnmZ3dQRbUcs&date=2024-10-05`);
      const apod = await response.json();
      setAPOD(apod);
    } catch (error) {
      console.error('Error fetching APOD:', error);
    }
  };

  useEffect(() => {
    getAPOD();
  }, []);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setSubmitted(false); // Reset submitted state
    setIsCorrect(null); // Reset correctness state
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setIsCorrect(selectedOption === correctAnswerIndex); // Check if the selected answer is correct
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEsubmit = (e) => {
    e.preventDefault();
    setEsubmitted(true);
  };

  const members = [
    { name: 'Lakshya Sharma', description: 'Astronomy Enthusiast and Space Scientist', giturl: "https://github.com/LakshyaSharma009/", linkedurl: "https://www.linkedin.com/in/lakshya-sharma-0719992a8" },
    { name: 'Likith Reddy', description: 'Astrophysicist and Researcher', giturl: "https://github.com/Likhithreddy98", linkedurl: "https://www.linkedin.com/in/likhithedu-undefined-940554330/" },
    { name: 'Samarth BC', description: 'Planetary Geologist and Explorer', giturl: "https://github.com/unknownalien1", linkedurl: "https://www.linkedin.com/in/samarth-bc-bb30b0129/" },
    { name: 'Sambhram', description: 'Cosmologist and Educator', giturl: "https://github.com/sambhramnaregal", linkedurl: "https://www.linkedin.com/in/sambhram-naregal-97477129b/?originalSubdomain=in" },
    { name: 'Vishal Krishna', description: 'Astrobiologist and Space Advocate', giturl: "https://github.com/Vkbhat3904", linkedurl: "http://www.linkedin.com/in/vishal-krishna-bhat-k-0ba93a32a" },
  ];


  return (
    <>
      <div className="main-container">
        <div className="logo-container">
          <img src={require("../Static/Logos/logo_main_circle_cropped_png.png")} alt="Logo" className="logo" />
        </div>
        <h1 className="main-title" style={{fontFamily:"Playwrite FR Moderne", fontSize:"40px"}}>The Space Magazine</h1>
        <div className="description-container">
          <p className="description">
          Welcome to the Space Magazine, your hub for exploring the universe! Stay updated with the latest Space News, dive into our Weekly Magazines filled with fascinating discoveries, and explore in-depth content with our E-books. Challenge your knowledge through fun Quizzes, simulate random star systems to experience the cosmos firsthand, and embark on an Exoplanet search to uncover distant worlds. Explore space like never before!
          </p>
        </div>
      </div>

      <div className="container-box container">
        {/* Image Section */}
        <div className="image-section">
          <img
            src={APOD.hdurl}
            alt="Placeholder"
          />
        </div>

        {/* Content Section */}
        <div className="content-section">
          <h2 style={{textDecoration:"underline"}}>ASTRONOMY IMAGE OF THE DAY</h2>
          <h2>{APOD.title}</h2>
          <p>
            {APOD.explanation}
          </p>
          <p>
            Source: NASA Astronomy Picture of The Day (APOD)
          </p>
        </div>
      </div>

      <div className="mt-4 container">
        <div className="trivia-container">
          <h2 className="text-white">Daily Trivia</h2>
          <h2 className="question">Which is the closest exo-planet to earth?</h2>
          <div className="options-container">
            {options.map((option, index) => (
              <div
                key={index}
                className={`option-box ${selectedOption === index ? 'selected' : ''}`}
                onClick={() => handleOptionClick(index)}
              >
                {option}
              </div>
            ))}
        </div>
          <button className="submit-btn" onClick={handleSubmit}>Submit</button>
          {submitted && (
            <p className="submitted-text">
              {isCorrect !== null ? (isCorrect ? 'Correct!' : 'Wrong answer. Try again!') : ''}
            </p>
          )}
        </div>
      </div>

      <div className="solar-container">
        <h2 className="solar-title">Simulate a Star System</h2>
        <p className="solar-description">
          Convert your imaginations into simulations to visualise a random possible Star System
        </p>
        <Link to="https://threesolar.netlify.app/" target='_blank'><button className="solar-button">Simulate</button></Link>
        <h6 className='text-center text-light mt-4'>Source: https://threesolar.netlify.app/</h6>
      </div>

      <div className="solar-container">
        <h2 className="solar-title">Create your own exoplanet</h2>
        <p className="solar-description">
          Using various features and parameters, create and simulate your own exoplanet...
        </p>
        <Link to="https://dgreenheck.github.io/threejs-procedural-planets/" target='_blank'><button className="solar-button">Simulate</button></Link>
        <h6 className='text-center text-light mt-4'>Source: https://dgreenheck.github.io/threejs-procedural-planets/</h6>
      </div>

      <div className="subscribe-container mt-4">
        <h2>Subscribe to our weekly Space Magazines</h2>
        <form onSubmit={handleEsubmit}>
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
            className="email-input"
          />
          <button type="submit" className="submit-btn">Subscribe</button>
        </form>
        {esubmitted && <p className="submitted-text">Thank you for subscribing!</p>}
      </div>

      <div className="solar-container" style={{backgroundColor:"rgba(0,0,0,0.1)"}}>
        <h4 className="mb-4">Other exciting exoplanet materials...</h4>
        <Link to="https://science.nasa.gov/exoplanets/planet-types/" target='_blank' className='mx-2'><button className="solar-button"><i className="fa-solid fa-rocket"></i></button></Link>
        <Link to="https://eyes.nasa.gov/apps/exo/#/" target='_blank' className='mx-2'><button className="solar-button"><i className="fa-solid fa-earth-americas"></i></button></Link>
        <Link to="https://hackanexoplanet.esa.int/tag/hackathon-activities/" target='_blank' className='mx-2'><button className="solar-button"><i className="fa-solid fa-sun"></i></button></Link>
        <Link to="https://www.asc-csa.gc.ca/eng/astronomy/beyond-our-solar-system/exoplanet-zoo.asp" target='_blank' className='mx-2'><button className="solar-button"><i className="fa-solid fa-meteor"></i></button></Link>
      </div>

      <div className="member-container">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-description d-flex justify-content-evenly"><Link to={member.giturl} target='_blank'><i className="fa-brands fa-github"></i></Link><Link to={member.linkedurl} target='_blank'><i className="fa-brands fa-linkedin"></i></Link></p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home