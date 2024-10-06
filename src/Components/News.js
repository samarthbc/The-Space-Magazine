import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'

function News() { 

    const [articles, setArticles] = useState([])
    const [totalresults, setTotalresults] = useState(0)

    const newsdata = {
        "status": "ok",
        "totalResults": 49213,
        "articles": [
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Jonathan O’Callaghan",
            "title": "Billionaire Finally Launches on First Private Space-Walk Mission",
            "description": "Hampered last month by bad weather, launch tower problems, and issues with its ride from SpaceX, the Polaris Dawn mission is at last on its way.",
            "url": "https://www.wired.com/story/polaris-dawn-private-spacewalk-crew-dragon-spacex/",
            "urlToImage": "https://media.wired.com/photos/66ccab8df696d6176cf50847/191:100/w_1280,c_limit/Polaris-Tourist-SpaceWalk-Sci-2166058680.jpg",
            "publishedAt": "2024-09-10T09:25:25Z",
            "content": "One of the most ambitious space tourism missions in history has launched, with the all-commercial crew set to hit a number of milestones during its five days in space, including the first-ever privat… [+2761 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Yahoo Entertainment"
            },
            "author": "Karissa Bell",
            "title": "Cards Against Humanity is suing SpaceX for trespassing and filling its property with ‘space garbage’",
            "description": "Cards Against Humanity is the latest entity to take on Elon Musk in court. The irreverent party game company filed a $15 million lawsuit against SpaceX for trespassing on property it owns in Texas, which happens to sit near SpaceX facilities.\nAccording to a l…",
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_eb751818-a27c-45c8-8027-b7a8423ffa3f",
            "urlToImage": null,
            "publishedAt": "2024-09-20T18:18:28Z",
            "content": "If you click 'Accept all', we and our partners, including 239 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Katy Clough, Sebastian Khan, Tim Dietrich",
            "title": "Alien Spaceships Could Be Detected Using Gravitational Waves",
            "description": "The concept of space-time makes Star Trek-style warp drives theoretically possible, and researchers have proposed a way of detecting their use.",
            "url": "https://www.wired.com/story/alien-spaceships-could-be-detected-using-gravitational-waves/",
            "urlToImage": "https://media.wired.com/photos/66d9be4c5644024170a4ba40/191:100/w_1280,c_limit/GettyImages-1866780987.jpg",
            "publishedAt": "2024-09-08T12:00:00Z",
            "content": "You could say that this is exactly what Isaac Newtons picture of gravity doesgiving a relation between an objects mass and the gravitational force it exerts. And you would be right. But the concept o… [+2995 chars]"
          },
          {
            "source": {
              "id": "wired",
              "name": "Wired"
            },
            "author": "Eric Berger, Ars Technica",
            "title": "An International Space Station Leak Is Getting Worse—and Keeping NASA Up at Night",
            "description": "A NASA inspector general report gives new details on a leak that has plagued the ISS for five years, and reveals that the agency considers it the highest-level risk.",
            "url": "https://www.wired.com/story/international-space-station-leak-getting-worse-nasa-up-at-night/",
            "urlToImage": "https://media.wired.com/photos/66f6e5bdadd364054d56481c/191:100/w_1280,c_limit/GettyImages-200175238-001.jpg",
            "publishedAt": "2024-09-28T15:30:00Z",
            "content": "US space officials do not like to talk about the perils of flying astronauts on the aging International Space Station, elements of which are now more than a quarter of a century old.\r\nHowever, a new … [+4468 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "James Whitbrook",
            "title": "Water Wet, Sky Blue, Henry Cavill Playing Space Marine 2",
            "description": "The Warhammer mega fan and occasional actor won't be letting you know if you're facing the former Man of Steel in multiplayer, though.",
            "url": "https://gizmodo.com/warhammer-space-marine-2-henry-cavill-2000502646",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/henry-cavill-space-marine-2-warhammer.jpg",
            "publishedAt": "2024-09-24T16:00:45Z",
            "content": "Actors! They’re just like us. Especially when they’re Henry Cavill, who, when he’s busy not playing Superman or not playing Geralt of Rivia any more, is now dedicating his free time to perhaps the le… [+2629 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "George Dvorsky",
            "title": "Gizmodo Science Fair: Beaming Solar Energy From Space to Earth",
            "description": "A Caltech experiment demonstrated space-based solar power’s potential, marking a key step in harnessing orbital renewable energy.",
            "url": "https://gizmodo.com/science-fair-space-solar-power-1851355705",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/caltech-solar-collecting-satellite_r.jpg",
            "publishedAt": "2024-09-24T12:00:23Z",
            "content": "A multidisciplinary team from the California Institute of Technology is a winner of the 2024 Gizmodo Science Fair for testing a satellite that proves it’s possible to collect solar energy in space an… [+9408 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "James Whitbrook",
            "title": "Vic Fontaine Was the Escape Deep Space Nine Needed",
            "description": "James Darren, the actor behind Star Trek's crooning hologram, passed away this week—but the warmth and light he brought to Deep Space Nine at its darkest hour will never be forgotten.",
            "url": "https://gizmodo.com/james-darren-star-trek-deep-space-nine-vic-fontaine-2000495832",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/star-trek-deep-space-nine-vic-fontaine.jpg",
            "publishedAt": "2024-09-06T20:50:21Z",
            "content": "Earlier this week, James Darrenthe actor and singer best known for his roles in the Gidget films, and, to sci-fi fans, his turn as the kooky lounge singer hologram Vic Fontaine on Star Trek: Deep Spa… [+5610 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Passant Rabie",
            "title": "Radar Catches Oddly Shaped Stadium-Sized Asteroid Zooming Past Earth",
            "description": "The potentially hazardous asteroid might be two space rocks fused together.",
            "url": "https://gizmodo.com/radar-catches-oddly-shaped-stadium-sized-asteroid-zooming-past-earth-2000503746",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/2020-ON-Asteroid.jpeg",
            "publishedAt": "2024-09-26T16:36:56Z",
            "content": "The potentially hazardous asteroid 2024 ON looks like an adorable space peanut or a chunky snowman tumbling its way through the solar system in new close-up images of the ancient space rock.\r\nThe Dee… [+2559 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "Thankfully, Trump Is Still Alive. Unfortunately, So Is His Misguided Crypto Project",
            "description": "Donald Trump officially announced details of his cryptocurrency project during an X space Monday night.",
            "url": "https://gizmodo.com/thankfully-trump-is-still-alive-unfortunately-so-is-his-misguided-crypto-project-2000499496",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/Donald-Trump-speaks-at-a-campaign-event-in-Tucson-Arizona.jpg",
            "publishedAt": "2024-09-17T18:20:21Z",
            "content": "Donald Trump dodged another bullet this weekend when a second assassination attempt against him was foiled at his golf course in West Palm Beach. In an apparent show of resilience on Monday, Trump ap… [+5933 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Passant Rabie",
            "title": "Russian Cosmonauts Smash Record for Longest Stay on the ISS",
            "description": "The pair exceeded the previous record of 370 consecutive days spent on board the space station.",
            "url": "https://gizmodo.com/russian-cosmonauts-smash-record-for-longest-stay-on-the-iss-2000501477",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/ISS-Expedition-71.jpg",
            "publishedAt": "2024-09-20T20:30:54Z",
            "content": "Two cosmonauts have set the record for the most days spent continuously aboard the International Space Station (ISS), surpassing the previous record holders, NASA astronaut Frank Rubio, and Russian c… [+2396 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Isaac Schultz",
            "title": "Satellite Images Reveal Hurricane Helene’s Devastating Aftermath",
            "description": "Images from space show vast swaths of the American southeast without power days after the storm.",
            "url": "https://gizmodo.com/satellite-images-reveal-hurricane-helenes-devastating-aftermath-2000507474",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/10/NOAA-20-satellite-helene-power.jpg",
            "publishedAt": "2024-10-04T16:20:39Z",
            "content": "Satellite images of the American southeast taken over the past few days are showcasing the disastrous impacts of Hurricane Helene at scale.\r\nThe images were taken by National Oceanic and Atmospheric … [+3345 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Passant Rabie",
            "title": "Gizmodo Science Fair: A Light-Propelled Spacecraft Soars Without Fuel",
            "description": "Instead of rocket fuel, LightSail 2 used photons, demonstrating the viability of solar sailing for future space missions.",
            "url": "https://gizmodo.com/science-fair-lightsail2-1851396629",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/Planetary-Society-Lightsail2_r.jpg",
            "publishedAt": "2024-09-24T12:00:01Z",
            "content": "The Planetary Societys LightSail 2 is a winner of the 2024 Gizmodo Science Fair for testing the feasibility of using photons from the Sun as a form of propulsion for satellites.\r\nThe question\r\nCan so… [+7313 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Isaac Schultz",
            "title": "Meet LISA: The $1.6 Billion Space Telescope That Will Redefine Astronomy",
            "description": "The $1.6 billion mission is an extremely complicated engineering challenge and will make gravitational wave detections in space.",
            "url": "https://gizmodo.com/lisa-gravitational-wave-observatory-how-it-works-2000499746",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/LISA-illustration-black-holes.jpg",
            "publishedAt": "2024-09-28T10:00:17Z",
            "content": "In about 11 years, one of humankind’s most ambitious missions is set to launch into space. Decades in the making, the Laser Interferometer Space Antenna, or LISA, could revolutionize our understandin… [+13324 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Gizmodo Deals",
            "title": "Forget Black Friday: The New Echo Spot with Alexa Hits Record Low Prices with 44% Off",
            "description": "Transform your space into a smart haven with the Echo Spot 2024 where sleek design meets powerful Alexa.",
            "url": "https://gizmodo.com/forget-black-friday-the-new-echo-spot-with-alexa-hits-record-low-prices-with-44-off-2000506140",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/10/echo-spot-2024.jpg",
            "publishedAt": "2024-10-02T12:20:44Z",
            "content": "The new Echo Spot (released early 2024) has quickly become one of the best-selling products on Amazon, and for good reason. Currently available at an astonishing price of $44.99down from its original… [+2159 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Passant Rabie",
            "title": "Gizmodo Science Fair: A Cosmic Experiment to Decode an ‘Alien’ Signal",
            "description": "\"A Sign in Space\" simulated an extraterrestrial communication to see whether humans are prepared for the real deal.",
            "url": "https://gizmodo.com/science-fair-sign-in-space-1851478609",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/SETI-ESA-Sign-in-Space_r.jpg",
            "publishedAt": "2024-09-24T12:00:59Z",
            "content": "A collaborative project dubbed “A Sign in Space” is a winner of the 2024 Gizmodo Science Fair for simulating a message to Earth from intelligent aliens. The project involved beaming an encoded messag… [+7078 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Passant Rabie",
            "title": "NASA Pulls Off Delicate Thruster Swap, Keeping Voyager 1 Mission Alive",
            "description": "Engineers needed to swap out the clogged thrusters on the spacecraft as it continues its journey through interstellar space.",
            "url": "https://gizmodo.com/nasa-pulls-off-delicate-thruster-swap-keeping-voyager-1-mission-alive-2000497434",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/The-Voyager-Spacecraft.jpeg",
            "publishedAt": "2024-09-11T16:35:02Z",
            "content": "The Voyager 1 spacecraft has been cruising through the cosmos for 47 years, collecting precious data beyond the solar system. All that interstellar travel, however, is taking its toll on the probe. R… [+4139 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Adam Kovac",
            "title": "So-Called ‘Space Balloon’ Completes Crucial Test Ahead of Tourist Flights",
            "description": "Space Perspective is hoping to have commercial operations underway in 2025, but a seat on the luxurious balloon is gonna cost you.",
            "url": "https://gizmodo.com/so-called-space-balloon-completes-crucial-test-ahead-of-tourist-flights-2000501035",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/space-balloon-test-flight-tourism.jpg",
            "publishedAt": "2024-09-19T20:05:01Z",
            "content": "The dream, if you can call it that, of ballooning to not-quite-space, has gotten closer. Space Perspective, a company founded with the goal of floating people high in the Earths atmosphere in lavish … [+3485 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "James Whitbrook",
            "title": "Star Wars: Skeleton Crew Wants to Explore a New Age of Space Piracy",
            "description": "The new Star Wars series' post-Return of the Jedi setting makes for a lawless galaxy far, far away.",
            "url": "https://gizmodo.com/star-wars-skeleton-crew-pirates-disney-lucasfilm-2000500233",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/star-wars-skeleton-crew-kids.jpg",
            "publishedAt": "2024-09-18T14:30:29Z",
            "content": "The next Star Wars TV show is whisking us back to the post-Return of the Jedi setting of the likes of Book of Boba Fett, Ahsoka, and The Mandalorian, which we’ve already seen plenty of as a pretty la… [+3453 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "George Dvorsky",
            "title": "Gizmodo Science Fair: A $10,000 Student-Built Satellite Could Be the Future of Space Exploration",
            "description": "A team of college students built the SBUDNIC satellite using off-the-shelf components, including AA batteries.",
            "url": "https://gizmodo.com/science-fair-sbudnic-student-satellite-1851404135",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/SBUDNIC-student-satellite_r.jpg",
            "publishedAt": "2024-09-24T12:00:22Z",
            "content": "A team of Brown University students is a winner of the 2024 Gizmodo Science Fair for demonstrating an innovative and cost-effective approach to satellite design.\r\nIt normally takes five to six years … [+7344 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.com"
            },
            "author": "Michael E. Fossum, The Conversation",
            "title": "Starliner Is Back on Earth, but Its Crew Remains in Space. What’s Next for Boeing and NASA?",
            "description": "A former astronaut explains what Starliner’s return means for the future of NASA, Boeing’s troubled space program, and the crew left behind on the ISS.",
            "url": "https://gizmodo.com/starliner-is-back-on-earth-but-its-crew-remains-in-space-whats-next-for-boeing-and-nasa-2000496341",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/09/Boeing-Starliner-Undocking-ISS.jpg",
            "publishedAt": "2024-09-09T16:40:44Z",
            "content": "Boeings crew transport space capsule, the Starliner, returned to Earth without its two-person crew right after midnight Eastern time on Sept. 7, 2024. Its remotely piloted return marked the end of a … [+6291 chars]"
          }
        ]
      }

    const updateNews = async () => {
        // const url = `https://newsapi.org/v2/everything?q=space&apiKey=a7742701b0824034b7519ea4cd424fe8&page=1&pageSize=100`

        // let data = await fetch(url)
        // let parsedData = await data.json()

        // setArticles(parsedData.articles)
        // setTotalresults(parsedData.totalResults)
        setArticles(newsdata.articles);
        setTotalresults(newsdata.totalResults);
    }

    useEffect(() => {
        updateNews()
        //eslient-disable-next-line
    }, [])


    return (
        <>
            <h3 className='text-light text-center mt-3' style={{ fontFamily: "'Caveat', cursive", fontWeight: "bolder", fontSize: "40px" }}>Space News Across the Globe <i class="fa-solid fa-globe"></i></h3>
            <div className="container">
            <h6 className='text-light text-center'>Source: https://newsapi.org/</h6>
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