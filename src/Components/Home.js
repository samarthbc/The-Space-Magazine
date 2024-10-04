import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {

  const [APOD, setAPOD] = useState([]);

  const getAPOD = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=FTAyielV11srYl8bPtd4qoc1LIJwxnmZ3dQRbUcs&date=2024-10-03`)
    let apod = await response.json()
    setAPOD(apod);
  }

  useEffect(() => {
    getAPOD();
  }, [])

  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEsubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setEsubmitted(true);
  };

  const [email, setEmail] = useState('');
  const [esubmitted, setEsubmitted] = useState(false);

  const members = [
    { name: 'Lakshya Sharma', description: 'Astronomy Enthusiast and Space Scientist' },
    { name: 'Likith Reddy', description: 'Astrophysicist and Researcher' },
    { name: 'Samarth BC', description: 'Planetary Geologist and Explorer' },
    { name: 'Sambhram', description: 'Cosmologist and Educator' },
    { name: 'Vishal Krishna', description: 'Astrobiologist and Space Advocate' },
  ];


  return (
    <>
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
          <h2>{APOD.title}</h2>
          <p>
            {APOD.explanation}
          </p>
          <p>
            Source: NASA Astronomy Picture of The Day (APOD)
          </p>
        </div>
      </div>

      <div className="d-flex container flex-column mt-4">
        <h1 className="text-light">The Space Magazine</h1>
        <h3 className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam suscipit nesciunt iure consequatur quibusdam repellendus voluptas! Nesciunt nihil quis soluta accusantium rerum, ducimus similique reiciendis, reprehenderit provident voluptas repellendus, minima vel officiis?</h3>
      </div>

      <div className="mt-4 container">
        <div className="trivia-container">
          <h2 className="text-white">Daily Trivia</h2>
          <h2 className="question">What is the closest planet to the Sun?</h2>
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
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
          {submitted && <p className="submitted-text mb-0">Your answer has been recorded</p>}
          {submitted && <p className="submitted-text my-0 py-0">The answer will be updated tomorrow</p>}
        </div>
      </div>

      <div className="solar-container">
                <h2 className="solar-title">Simulate a Star System</h2>
                <p className="solar-description">
                    Convert your imaginations into simulations to visualise a random possible Star System
                </p>
                <Link to="https://threesolar.netlify.app/" target='_blank'><button className="solar-button">Simulate</button></Link>
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

      <div className="member-container">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-description d-flex justify-content-evenly"><i class="fa-brands fa-github"></i><i class="fa-brands fa-linkedin"></i></p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home