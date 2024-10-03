import React from 'react'

function Ebooks() {
    return (
        <>
            <div className="container d-flex nb-ebook-card mt-5">
                <img src={require('../Static/Ebooks/Ebook1.jpg')} alt="" className="mx-4" />
                <img src={require('../Static/Ebooks/Ebook2.jpg')} alt="" className="mx-4" />
            </div>
        </>
    )
}

export default Ebooks