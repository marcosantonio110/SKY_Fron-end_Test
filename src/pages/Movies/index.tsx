import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";

import {ApplicationState} from "~/store";
import {Movies} from "~/store/ducks/movies/types";
import * as productsActions from "~/store/ducks/movies/actions";

import Swiper from "react-id-swiper";

import SkyCarousel from "~/components/Carousel";

import {Container} from "./styles";
import {IoIosArrowBack, IoIosArrowForward, MdShoppingCart} from "react-icons/all";
import {Link} from "react-router-dom";

const paramsH = {
  slidesPerView: 6,
  spaceBetween: 8,
  slidesPerGroup: 5,
  updateOnWindowResize: true,
  breakpoints: {
    '@0.00': {
      updateOnWindowResize: true,
      slidesPerGroup: 3,
      width: 100,
      slidesPerView: 1,
      spaceBetween: 10,
    },
    '@1.00': {
      slidesPerView: 6,
      spaceBetween: 8,
      slidesPerGroup: 5,
      updateOnWindowResize: true,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  renderPrevButton: () => <IoIosArrowBack className="swiper-button-prev"/>,
  renderNextButton: () => <IoIosArrowForward className="swiper-button-next"/>,
};


interface StateProps {
  highlightMovies: Movies[];
  rest: Movies[];
  osMaisTemidos: Movies[];
  Infantil: Movies[];
  acaoAventura: Movies[];
}

interface DispatchProps {
  getListMoviesRequest(): void;
}

type Props = StateProps & DispatchProps;

class SkyMovies extends Component<Props> {
  componentDidMount() {
    const {getListMoviesRequest} = this.props;
    getListMoviesRequest();
    document.title = "Filmes - New SKY Play ";
  }

  renderCarouselPortrait = (movies: Movies, index: number) => {
    return (
      <Link to="" key={index}>
        <div className="sky-app" title={movies.title}>
          <MdShoppingCart className="shopping-cart" />
          <img
            src={movies.images[0].url}
            alt={movies.title}
          />
        </div>
      </Link>
    )
  };

  render() {
    const {highlightMovies, rest, osMaisTemidos, Infantil, acaoAventura} = this.props;

    return (
      <Container>
         <SkyCarousel movies={highlightMovies} />

        <h4 className="title-content principal">
          Os mais temidos
        </h4>

        <div className="categories">
          <Swiper {...paramsH}>
            {osMaisTemidos?.map(this.renderCarouselPortrait)}
          </Swiper>
        </div>

        <h4 className="title-content">
          Infantil
        </h4>

        <div className="categories">
          <Swiper {...paramsH}>
            {Infantil.map(this.renderCarouselPortrait)}
          </Swiper>
        </div>

        <h4 className="title-content">
          Ação e aventura
        </h4>

        <div className="categories">
          <Swiper {...paramsH}>
            {acaoAventura.map(this.renderCarouselPortrait)}
          </Swiper>
        </div>

        <h4 className="title-content">
          Drama e Comédia
        </h4>

        <div className="categories">
          <Swiper {...paramsH}>
            {rest.map(this.renderCarouselPortrait)}
          </Swiper>
        </div>

      </Container>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  highlightMovies: state.movies.data[0].items,
  osMaisTemidos: state.movies.data[2].movies.filter((movies: Movies): Movies | null => {
    if (movies.categories.includes('Suspense') || movies.categories.includes('Terror')) {
      return movies
    }
    return null
  }),
  Infantil: state.movies.data[2].movies.filter((movies: Movies): Movies | null => {
    if (movies.categories.includes('Infantil')) {
      return movies
    }
    return null
  }),
  acaoAventura: state.movies.data[2].movies.filter((movies: Movies): Movies | null => {
    if (movies.categories.includes('Ação e Aventura') && !movies.categories.includes('Suspense') && !movies.categories.includes('Infantil')) {
      return movies
    }
    return null
  }),
  rest: state.movies.data[2].movies.filter((movies: Movies): Movies | null => {
    if (!movies.categories.includes('Ação e Aventura') &&
      !movies.categories.includes('Suspense') &&
      !movies.categories.includes('Infantil') &&
      !movies.categories.includes('Terror')) {
      return movies
    }
    return null
  })
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators(productsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SkyMovies);

