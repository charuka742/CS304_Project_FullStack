import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  accessibility: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const items = [
  {
    id: 1,
    title: "Item 1",
    image: "https://www.pexels.com/photo/rippling-body-of-water-2692988/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Item 2",
    image: "https://via.placeholder.com/300",
    description:
      "Nulla euismod tellus ut ante consequat, ut gravida augue faucibus.",
  },
  {
    id: 3,
    title: "Item 3",
    image: "https://via.placeholder.com/300",
    description:
      "Pellentesque vel nulla euismod, faucibus ipsum sed, pharetra felis.",
  },
  {
    id: 4,
    title: "Item 4",
    image: "https://via.placeholder.com/300",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    title: "Item 5",
    image: "https://via.placeholder.com/300",
    description:
      "Nulla euismod tellus ut ante consequat, ut gravida augue faucibus.",
  },
  {
    id: 6,
    title: "Item 6",
    image: "https://via.placeholder.com/300",
    description:
      "Pellentesque vel nulla euismod, faucibus ipsum sed, pharetra felis.",
  },
  {
    id: 7,
    title: "Item 7",
    image: "https://via.placeholder.com/300",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    title: "Item 8",
    image: "https://via.placeholder.com/300",
    description:
      "Nulla euismod tellus ut ante consequat, ut gravida augue faucibus.",
  },
  {
    id: 9,
    title: "Item 9",
    image: "https://via.placeholder.com/300",
    description:
      "Pellentesque vel nulla euismod, faucibus ipsum sed, pharetra felis.",
  },
];

const Carousel = () => {
  return (
    <div className="h-full">
      cotinue the remaining lines, from it stoped
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover"
            />
            <div className="px-4">
              <h3 className="text-lg font-medium my-2">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
