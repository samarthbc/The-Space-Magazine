import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'

function News() {

    const [articles, setArticles] = useState([])
    const [totalresults, setTotalresults] = useState(0)

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/everything?q=space&apiKey=a7742701b0824034b7519ea4cd424fe8&page=1&pageSize=100`

        let data = await fetch(url)
        let parsedData = await data.json()

        setArticles(parsedData.articles)
        setTotalresults(parsedData.totalResults)
    }

    useEffect(() => {
        updateNews()
        //eslient-disable-next-line
    }, [])


    return (
        <>
            <h3 className='text-light text-center mt-3' style={{ fontFamily: "'Caveat', cursive", fontWeight: "bolder", fontSize: "40px" }}>Space News Across the Globe <i class="fa-solid fa-globe"></i></h3>
            <div className="container">
                <div className="row mt-4">
                    {articles.map((element) => {
                        return (
                            <div className="col-md-4 my-1">
                                <NewsItems
                                    title={element.title ? element.title : ""}
                                    author={element.author ? element.author : "Unknown"}
                                    name={element.source.name ? element.source.name : "Unknown"}
                                    description={element.description ? element.description : ""}
                                    publishedAt={element.publishedAt ? element.publishedAt : "Published recently"}
                                    url={element.url}
                                    urlToImage={element.urlToImage ? element.urlToImage : require("../Static/default/Default_News.png")}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default News