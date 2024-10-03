import React from 'react'

function Quizzes() {


    return (
        <>
            <h1 className='text-light mt-4 ms-1' style={{ fontWeight: "bolder", fontSize: "30px" }}>Explore wide range of Exoplanet Quizzes to boost and test your knowledge !!</h1>
            <div class="card-group container mt-4 gap-5">
                <div class="card nb-quiz-card">
                    <img src={require("../Static/Quizzes/Kepler.png")} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div class="card nb-quiz-card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div class="card nb-quiz-card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quizzes