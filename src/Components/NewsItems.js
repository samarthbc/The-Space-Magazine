import React from 'react'

function NewsItems(props) {
  let { title, author, name, description, publishedAt, url, urlToImage } = props;
  return (
    <>
      <div className="card border-secondary" style={{ width: "18rem" }}>
        <img src={urlToImage} className="card-img-top nb-news-img" alt="..." style={{ height: "18rem" }} />
        <div className="card-body bg-dark nb-news-item">
          <h5 className="card-title text-light">{title}</h5>
          <p className="card-text text-light">Author: {author}</p>
          <p className="card-text text-light">Souce: {name}</p>
          <p className="card-text text-light">{description}</p>
          <a href={url} target="_blank" className="btn btn-success">Read More</a>
        </div>
      </div>
    </>
  )
}

export default NewsItems