import React from "react";
import Swiper from "react-id-swiper";
import {Link} from 'react-router-dom'
import {IoMdArrowBack, IoMdArrowForward} from 'react-icons/all'

import {Container} from "./styles";
import {Movies} from "~/store/ducks/movies/types";

const params = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  updateOnWindowResize: true,
  centeredSlides: true,
  breakpoints: {
    '@0.00': {
      updateOnWindowResize: true,
      width: 700,
      slidesPerView: 3,
      // spaceBetween: 10,
    },

    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 8,
      updateOnWindowResize: true,
    },
    '@1.50': {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  renderPrevButton: () => <IoMdArrowBack className="swiper-button-prev"/>,
  renderNextButton: () => <IoMdArrowForward className="swiper-button-next"/>,
};

interface Iprops extends React.ButtonHTMLAttributes<HTMLDivElement> {
  movies: Movies[];
}

const MutipleSlidesPerView: React.FC<Iprops> = ({movies, ...shared}) => {

  const renderHighlightMovies = (movie: Movies, index: number) => {
    return (
      <Link to="" key={index}>
        <div className="sky-app" title={movie.title}>
          <img
            src={movie.images[0].url}
            alt={movie.title}
          />
        </div>
      </Link>
    )
  };

  return (
    <Container  {...shared}>
      <Swiper {...params}>
        {movies?.map(renderHighlightMovies)}
      </Swiper>
    </Container>
  );
};

export default MutipleSlidesPerView

