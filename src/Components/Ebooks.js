import React from 'react'
import { Link } from 'react-router-dom'

function Ebooks() {
    return (
        <>
            <div className="container d-flex nb-ebook-card mt-5">
                <Link to="https://www.google.co.in/books/edition/Exoplanets/VlSVmxgPgGYC?hl=en&gbpv=1&pg=PR7&printsec=frontcover" target='_blank'><img src={require('../Static/Ebooks/Ebook1.png')} alt="" className="mx-4" /></Link>
                <Link to="https://link.springer.com/book/10.1007/978-3-319-27458-4" target='_blank'><img src={require('../Static/Ebooks/Ebook2.png')} alt="" className="mx-4" /></Link>
                <Link to="https://books.google.co.in/books?id=zIUBEAAAQBAJ&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false" target='_blank'><img src={require('../Static/Ebooks/Ebook3.png')} alt="" className="mx-4" /></Link>
                <Link to="https://www.google.co.in/books/edition/Transiting_Exoplanets/cqOKqhfm4ywC?hl=en&gbpv=1&dq=exoplanets&printsec=frontcover" target='_blank'><img src={require('../Static/Ebooks/Ebook4.png')} alt="" className="mx-4" /></Link>
            </div>
            <div className="container d-flex nb-ebook-card mt-4">
                <Link to="https://www.google.co.in/books/edition/Exoplanets/mNJmDwAAQBAJ?hl=en&gbpv=1&dq=exoplanets&printsec=frontcover" target='_blank'><img src={require('../Static/Ebooks/Ebook5.png')} alt="" className="mx-4" /></Link>
                <Link to="https://www.saraseager.com/wp-content/uploads/2020/07/SeagerDeming2010.pdf" target='_blank'><img src={require('../Static/Ebooks/Ebook6.jpg')} alt="" className="mx-4" /></Link>
            </div>
        </>
    )
}

export default Ebooks