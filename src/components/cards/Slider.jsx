import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = ({ media = [] }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (!Array.isArray(media) || media.length === 0) {
    return <div>No media available</div>;
  }

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {media.map((item, index) =>
        item.endsWith(".mp4") ? (
          <iframe
            key={index}
            src={item}
            style={{
              display: "block",
              height: "100%",
              margin: "auto",
              width: "100%",
            }}
            allowFullScreen
            title={`video-${index}`}
          ></iframe>
        ) : (
          <img
            key={index}
            src={item}
            alt={`media-${index}`}
            style={{
              display: "block",
              height: "100%",
              margin: "auto",
              width: "100%",
            }}
          />
        )
      )}
    </Carousel>
  );
};

export default Slider;
