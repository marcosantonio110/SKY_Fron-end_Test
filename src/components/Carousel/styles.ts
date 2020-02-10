import styled from "styled-components";

export const Container = styled.div`
  .swiper-slide {
    margin-bottom: 45px;

     img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.38);
     }
  }

  .swiper-pagination-bullet {
    border-radius: 5px;
    height: 4px;
    width: 16px;
  }

  .swiper-pagination-bullet-active {
    background: #f35c58;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #FFF !important;
    background-color: rgba(0, 0, 0, 0.6);
    width: 55px;
    height: 55px;
    border-radius: 50%;
    padding: 15px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    .swiper-button-next,
    .swiper-button-prev {
        display: block;
        opacity: 1;
    }
  }

  .swiper-slide-next {
    .sky-app {
      margin-top: 45px;
      width: 129%;
      position: absolute;
      left: 18%;
    }
  }

  .swiper-slide-prev {
    .sky-app {
      width: 129%;
      position: absolute;
      left: -48%;

      img {
          margin-top: 45px;
      }
    }
  }

  .swiper-slide-active {
    .sky-app {
      margin-top: 25px;
      width: 145%;
      left: -23%;
      position: relative;
    }
  }

  @media (max-width: 768px) {
    .swiper-slide {
      left: -47%;
    }
  }



`;
