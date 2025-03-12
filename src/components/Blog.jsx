import React from "react";
import BlogCard from "./utils/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      meta: "22 Oct, 2020",
      comment: 246,
      image: "/public/images/blogImage1.png",
      url: "#",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      meta: "23 Oct, 2021",
      comment: 150,
      image: "/public/images/blogImage2.png",
      url: "#",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      meta: "22 Oct, 2020",
      comment: 246,
      image: "/public/images/blogImage1.png",
      url: "#",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      meta: "22 Oct, 2020",
      comment: 246,
      image: "/public/images/blogImage1.png",
      url: "#",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      meta: "22 Oct, 2020",
      comment: 246,
      image: "/public/images/blogImage1.png",
      url: "#",
    },
  ];

  return (
    <section id="blogs">
      <div className="container lg:pt-[100px]  ">
        <Swiper
          loop={true}
          modules={[Autoplay, Pagination]}
          pagination={{
            enabled: true,
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            450: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          spaceBetween={24}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          {blogs.map((item) => (
            <SwiperSlide key={item.id}>
              <BlogCard blog={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
