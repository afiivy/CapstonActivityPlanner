import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import style from '@/styles/Carousel.module.css';

const CarouselPage = () => {
  return (
    <>
      <Head>
        <title>Things to do</title>
      </Head>

      <div id="carouselExampleCaptions" className={`carousel slide ${style.carousel}`} data-bs-ride="carousel">
        <div className={style.carouselIndicators}>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className={style.carouselIndicatorButton}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            className={style.carouselIndicatorButton}
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            className={style.carouselIndicatorButton}
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            className={style.carouselIndicatorButton}
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            className={style.carouselIndicatorButton}
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            className={style.carouselIndicatorButton}
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="6"
            className={style.carouselIndicatorButton}
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="7"
            className={style.carouselIndicatorButton}
            aria-label="Slide 8"
          ></button>
        </div>

        {/* Photos */}
        <div className={`carousel-inner ${style.carouselInner}`}>
          <div className={`carousel-item active ${style.carouselItem}`}>
            <div className={style.imageContainer}>
              <Image
                src="/Broke-Brewing.jpg"
                fill
                className={style.carouselImage}
                alt="First slide"
              />
            </div>
            <div className={style.carouselCaption}>
              <h5>Broke Brewing Company</h5>
              <p>Located on Route 66 in the Skyline District, Broke Brewing Co. offers a welcoming, family-friendly atmosphere with over 30 years of brewing expertise. Enjoy a variety of handcrafted ales, stouts, and blondes, or try their coffee, seltzer water, and kombucha—perfect for all ages.

Take a behind-the-scenes tour, then relax in the tasting room with vinyl spinning in the background. Broke Brewing Co. is a must-visit spot in Oklahoma City for craft beer lovers and curious visitors alike.
</p>
            </div>
          </div>
          <div className={`carousel-item ${style.carouselItem}`}>
            <div className={style.imageContainer}>
              <Image
                src="/echo-canyon-spa-resort.jpg"
                fill
                className={style.carouselImage}
                alt="Second slide"
              />
            </div>
            <div className={style.carouselCaption}>
              <h5>Echo Canyon Spa Resort</h5>
              <p>Nestled on 27 scenic acres in the Arbuckle Mountains, Echo Canyon Spa Resort offers luxury and seclusion with gourmet dining, a top-notch spa, and elegant accommodations featuring double Jacuzzis and private decks. Enjoy the serene surroundings with bicycle, boat, canoe, or horse rentals. 

Indulge in a variety of spa treatments at the on-site Aloha Spa, from relaxing massages to rejuvenating facials and body therapies. Spa packages are available for a complete pampering experience.
.</p>
            </div>
          </div>
          <div className={`carousel-item ${style.carouselItem}`}>
            <div className={style.imageContainer}>
              <Image
                src="/Plaza-District-Festival-at-Night.jpg"
                fill
                className={style.carouselImage}
                alt="Third slide"
              />
            </div>
            <div className={style.carouselCaption}>
              <h5>Plaza District</h5>
              <p>The Plaza District is a lively hub of art and entertainment in the heart of Oklahoma City. With its mix of local shops, art galleries, restaurants, and creative businesses, it’s a magnet for artists and creatives. Discover vintage finds, enjoy performances at the renovated Lyric Theatre, and don’t miss LIVE on the Plaza—a monthly art walk showcasing emerging talent every second Friday.
              </p>
            </div>
          </div>
          <div className={`carousel-item ${style.carouselItem}`}>
            <div className={style.imageContainer}>
              <Image
                src="/rusty-nail-winery-sign.jpg"
                fill
                className={style.carouselImage}
                alt="Fourth slide"
              />
            </div>
            <div className={style.carouselCaption}>
              <h5>The Rusty Nail Winery</h5>
              <p>Located in Sulphur, The Rusty Nail Winery offers a cozy boutique experience where you can sip handcrafted wines, explore a unique gift shop, and enjoy delicious bites from the Rusty Nail Bistro. Housed in a historic 1906 building, this charming venue is perfect for private events. Each wine, named after a shoe with a rusty nail heel, is crafted on-site. Stop by for a personalized tasting, but don’t forget to call ahead for group reservations!
              </p>
            </div>
          </div>
          <div className={`carousel-item ${style.carouselItem}`}>
            <div className={style.imageContainer}>
              <Image
                src="/skyway-balloon-sunset.jpg"
                fill
                className={style.carouselImage}
                alt="Fifth slide"
              />
            </div>
            <div className={style.carouselCaption}>
              <h5>Skyway Balloons</h5>
              <p>Experience Oklahoma’s stunning landscapes from above with Skyway Balloons. Whether it’s a romantic evening, a team-building event, or a unique arrival at your next big gathering, Skyway offers customizable hot air balloon rides for up to eight passengers. With a licensed pilot and rides lasting up to 40 minutes, each flight promises a peaceful and unforgettable adventure in the sky.</p>
            </div>
          </div>
          <div className={`carousel-item ${style.carouselItem}`}>
            <div className={style.imageContainer}>
              <Image
                src="/c1.jpg"
                fill
                className={style.carouselImage}
                alt="Sixth slide"
              />
            </div>
            <div className={style.carouselCaption}>
              <h5> Tulsa Cave House</h5>
              <p>Just west of downtown Tulsa, the Cave House stands as one of the city&apos;s most unique buildings. Originally built in the 1920s as the Cave Garden Restaurant, it later became a speakeasy with a hidden tunnel leading to a secret room. Today, the Cave House is a quirky museum filled with intriguing history and ghostly tales.
Book a guided tour to explore its winding halls, steep staircase, and eccentric decor, which nods to its mysterious past. Featured on HGTV&apos;s &quot;Home Strange Home&quot; the Cave House is a must-see for anyone curious about Tulsa&apos;s offbeat history.
</p>
            </div>
          </div>
          <div className={`carousel-item ${style.carouselItem}`}>
            <div className={style.imageContainer}>
              <Image
                src="/Wake-board.jpeg"
                fill
                className={style.carouselImage}
                alt="Seventh slide"
              />
            </div>
            <div className={style.carouselCaption}>
              <h5>Oklahoma Wake Adventure</h5>
              <p>Let Oklahoma Wake Adventures handle the details while you enjoy a thrilling day on Skiatook Lake. Whether you&apos;re into surfing, wakeboarding, skiing, or tubing, their guided boat tours and hourly rentals come fully equipped, so all you need to do is show up and have fun. Enjoy the water while they take care of the rest!</p>
            </div>
          </div>
          <div className={`carousel-item ${style.carouselItem}`}>
            <div className={style.imageContainer}>
              <Image
                src="/glamping-orr.jpg"
                fill
                className={style.carouselImage}
                alt="Eighth slide"
              />
            </div>
            <div className={style.carouselCaption}>
              <h5>Glamping at Orr Family Farm</h5>
              <p>Spend the night in an air-conditioned Conestoga wagon or teepee at Orr Family Farm, complete with luxuries and creature comforts including a complimentary central campfire, s’mores and coffee, access to a swim spa, campfire dinners $10 per person and night access to activities on the property.</p>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <button
          className={style.carouselControlPrev}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className={style.carouselControlPrevIcon} aria-hidden="true">&lt;</span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className={style.carouselControlNext}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className={style.carouselControlNextIcon} aria-hidden="true">&gt;</span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default CarouselPage;
