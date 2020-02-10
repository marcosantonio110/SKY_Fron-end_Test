import styled from "styled-components";

export const Container = styled.div`
  background: #fafaff;
  padding-bottom: 100px;

  .title-content {
    margin-left: 70px;
    font-size: 1rem;
    line-height: 1.38;
    font-weight: bold;
    margin-top: 25px;
    margin-bottom: 12px;
  }

   .principal {
      margin-top: 10px;
    }

  .categories {
    .swiper-wrapper {
        margin-left: 70px;
    }

    &:hover {
      .swiper-button-next,
      .swiper-button-prev {
          display: block;
          opacity: 1;
      }
    }

   .swiper-button-prev {
      position: absolute;
      left: -24px;
      padding: 0 10px 0 25px;
    }

    .swiper-button-next {
      position: absolute;
      right: -24px;
      padding: 0 25px 0 10px;
    }

    .swiper-button-next,
      .swiper-button-prev {
        color: #FFF !important;
        background-color: rgba(0, 0, 0, 0.6);
        width: 55px;
        height: 55px;
        border-radius: 50%;
        transition: all 0.5s ease-in-out;
        opacity: 0;
    }

    .sky-app {

      .shopping-cart {
        position: absolute;
        right: 10px;
        top: 10px;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        padding: 5px;
        border: 2px solid #FFF;
        color: #FFF;
      }

      img {
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.38);
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: #FFF !important;
      background-color: rgba(0, 0, 0, 0.6);
      width: 55px;
      height: 55px;
      border-radius: 50%;
      padding: 15px;
      transition: all 0.5s ease-in-out;
    }
  }


  @media (max-width: 768px) {

    .title-content {
    margin-left: 20px;
    }

    .categories {

      .swiper-wrapper {
        margin-left: 20px;
      }

      .sky-app {

        .shopping-cart {
          width: 30px;
          height: 30px;
        }
      }
    }

  }


`;
