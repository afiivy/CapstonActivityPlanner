// import React from 'react';
// import Head from 'next/head';
// import '../styles/Carousel.css'

// const CarouselPage = () => {
//   return (
//     <>
//       <Head>
//         {/* Bootstrap CSS */}
//         <link
//           href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
//           rel="stylesheet"
//           integrity="sha384-OKq4HXt1j1tuubQHE+k+qpeT2bmF5Q5B6o0Hn5P+u6u7Xl5c0/QsootT+efD3l8z"
//           crossorigin="anonymous"
//         />
//         <title> Things to do </title> {/* Optional title */}
//       </Head>

//       <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-indicators">
//           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src="Broke-Brewing-Co.jpg" className="d-block w-100" alt="First slide" />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>First Slide Heading</h5>
//               <p>Some representative placeholder content for the first slide.</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src="path_to_your_image_2.jpg" className="d-block w-100" alt="Second slide" />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>Second Slide Heading</h5>
//               <p>Some representative placeholder content for the second slide.</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src="path_to_your_image_3.jpg" className="d-block w-100" alt="Third slide" />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>Third Slide Heading</h5>
//               <p>Some representative placeholder content for the third slide.</p>
//             </div>
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </>
//   );
// };

// export default CarouselPage;

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import style from '@/styles/Carousel.module.css';

const CarouselPage = () => {
  return (
    <>
      <Head>
        {/* Bootstrap CSS */}
        <title>Things to do</title>
      </Head>

      <div id="carouselExampleCaptions" className={`carousel slide ${style.carousel}`} data-bs-ride="carousel">
        <div className={style.carouselIndicators}>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className={`${style.active} ${style.carouselIndicatorButton}`}
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
        </div>
        <div className={`carousel-inner ${style.carouselInner}`}>
          <div className={`carousel-item active ${style.carouselItem}`}>
            <Image
              src="/Broke-Brewing-Co.jpg"
              layout="responsive"
              width={800}
              height={600}
              className={`d-block w-100 ${style.carouselImage}`}
              alt="First slide"
            />
            <div className={`carousel-caption d-none d-md-block ${style.carouselCaption}`}>
              <h5>First Slide Heading</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className={`carousel-item ${style.carouselItem}`}>
            <Image
              src="/echocanyonspa.jpg"
              layout="responsive"
              width={800}
              height={600}
              className={`d-block w-100 ${style.carouselImage}`}
              alt="Second slide"
            />
            <div className={`carousel-caption d-none d-md-block ${style.carouselCaption}`}>
              <h5>Second Slide Heading</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className={`carousel-item ${style.carouselItem}`}>
            <Image
              src="/plaza-fest.jpg"
              layout="responsive"
              width={800}
              height={600}
              className={`d-block w-100 ${style.carouselImage}`}
              alt="Third slide"
            />
            <div className={`carousel-caption d-none d-md-block ${style.carouselCaption}`}>
              <h5>Third Slide Heading</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          className={`carousel-control-prev ${style.carouselControlPrev}`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className={`carousel-control-prev-icon ${style.carouselControlPrevIcon}`} aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className={`carousel-control-next ${style.carouselControlNext}`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className={`carousel-control-next-icon ${style.carouselControlNextIcon}`} aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default CarouselPage;
