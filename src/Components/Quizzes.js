import React from 'react'

function Quizzes() {


    return (
        <>
            <h1 className='text-light mt-4 ms-1' style={{ fontWeight: "bolder", fontSize: "30px" }}>Explore wide range of Exoplanet Quizzes to boost and test your knowledge !!</h1>
            <div class="card-group container mt-4 gap-5">
                <div class="card nb-quiz-card">
                    <img src={require("../Static/Quizzes/Kepler.png")} class="card-img-top" alt="..." style={{height:"200px"}}/>
                    <div class="card-body">
                        <h5 class="card-title">COSMOGRAPHIC MYSTERY</h5>
                        <p class="card-text">Test your knowledge of KELT-9b, a hot Jupiter, with questions on its temperature, characteristics, and unique atmospheric phenomena.</p>
                        <a class="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSfqd4Ma0Ni5ZmF7tgEkMjm1fSeRgcmUcN4G4GK4rtxMn2Ws_Q/viewform" role="button">Take quiz</a>
                        
                    </div>
                </div>
                <div class="card nb-quiz-card">
                    <img src={require("../Static/Quizzes/quiz_card2.png")} class="card-img-top" alt="..." style={{height:"200px"}} />
                    <div class="card-body">
                        <h5 class="card-title">CELESTIAL TRIVIA</h5>
                        <p class="card-text">Test your knowledge of exoplanets! Explore their discovery, characteristics, and potential for life in this exciting quiz challenge!</p>
                         <a class="btn btn-primary" href="https://docs.google.com/forms/d/1k8gQ-aZXHpKIGF6rFPI83wKK1GMlfrXB3Emov5W4J8E/" role="button">Take quiz</a>
                    </div>
                </div>
                <div class="card nb-quiz-card">
                    <img src={require("../Static/Quizzes/quiz_card3.png")} class="card-img-top" alt="..." style={{height:"200px"}}/>
                    <div class="card-body">
                        <h5 class="card-title">STELLAR SECRETS</h5>
                        <p class="card-text">
                        "Stellar Secrets" unveils the mysteries of stars, from their formation to death, revealing cosmic wonders beyond imagination.</p>
                         <a class="btn btn-primary" href="#" role="button">Take quiz</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quizzes