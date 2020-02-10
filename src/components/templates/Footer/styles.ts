import styled from "styled-components";

export const Container = styled.div`
  background: #f1f2fa;
  border-top: 1px solid rgba(80, 80, 80, 0.15);

  hr {
    border-bottom: 1px solid rgba(80, 80, 80, 0.15);
    margin: 0;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 56px;
    padding-right: 30px;
    padding-left: 30px;
    margin-right: auto;
    margin-left: auto;

    .social-media {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .logo-sky {
        background-repeat: no-repeat;
        background-image: url('https://skyplay.sky.com.br/o/sky-play-theme/images/sky-light-default.svg');
        background-position: center center;
        width: 84px;
        height: 32px;
      }

      .icons {
        a {
          color: rgba(0, 0, 0, 0.6);

          svg {
              width: 25px;
              height: 25px;
              padding: 3px;
              margin: 8px;
          }

          &:hover {
            color: #db524f;
          }
        }
      }
    }
  }

  .content-footer {
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;

    .content-left {
      width: 50%;
      margin: 36px 0;

      .app-sky {
        display: flex;
        img {
          width: 48px;
          height: 48px;
          margin-right: 20px;
        }

        p {
          float: left;
          width: 300px;
          margin-top: 2px;
          font-weight: bold;
          color: rgba(0, 0, 0, 0.6);
          font-size: 1rem;
        }

        &:hover {
        cursor: pointer;
        }
      }

      .store {
        margin-left: 50px;

        .google-play {
          background-color: transparent;
          background-image: url('https://skyplay.sky.com.br/o/sky-play-theme/images/button-google-play-light-default.svg');
          background-repeat: no-repeat;
          background-size: 160px 54px;
          width: 160px;
          height: 54px;
          text-indent: -1000em;
          display: inline-block;
          margin: 10px;

          &:hover {
          cursor: pointer;
          filter: brightness(0.3);
          }
        }

        .apple-store {
          background-color: transparent;
          background-image: url('https://skyplay.sky.com.br/o/sky-play-theme/images/button-apple-store-light-over.svg');
          background-repeat: no-repeat;
          background-size: 160px 54px;
          width: 160px;
          height: 54px;
          text-indent: -1000em;
          display: inline-block;
          opacity: 0.67;
          margin: 10px;

          &:hover {
          cursor: pointer;
            opacity: 1;
          }
        }
      }
    }

    .content-right {
      width: 50%;

      .accordion {
        display: flex;
        flex-wrap: wrap;

        .card {
          width: 50%;
          background: none;
          border: none;

          .card-header {
            display: none;
          }

          .sky-collapse {
            display: block;

            .card-body {
              padding-bottom: 0;

              ul {
                list-style: none;
                padding: 0;
                margin: 0;

                .header-title {
                  color: rgba(0, 0, 0, 0.38);
                  padding: 16px 16px 16px 1px;
                  position: relative;
                  background-color: rgba(0, 0, 0, 0);
                  border: none;
                  display: block;
                  width: 100%;
                  text-align: left;
                  font-weight: bold;
                }

                li {

                  a {
                    color: rgb(101, 102, 105);
                    font-size: 0.875rem;
                    font-weight: 500;
                    line-height: 1.875rem;

                    &:hover {
                      color: #db524f;
                      text-decoration: none;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  }

  .privacy {
    background: #FFF;

    .content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 56px;
      padding-right: 30px;
      padding-left: 30px;
      margin-right: auto;
      margin-left: auto;

     a {
      color: rgba(0, 0, 0, 0.87);
      text-decoration: none;
      margin: 0 10px;
      font-size: 16px;

      &:hover {
        color: #db524f;
      }
     }
    }
  }

  .footer-content-bottom {
    margin: 5px 0;

    .footer-bottom {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 56px;
      padding-right: 30px;
      padding-left: 30px;
      margin-right: auto;
      margin-left: auto;

      p {
        font-size: 0.9rem;
        font-weight: normal;
        line-height: 1.43;
        color: rgba(0, 0, 0, 0.6);
        margin: 2rem 0;
      }
    }
  }

  @media (max-width: 768px) {
    .content-footer {
      flex-direction: column;

      .content-left {
        width: 100%;

        .store {
          display: none;
        }
      }

      .content-right {
        width: 100%;

        .accordion {
          flex-direction: column;

          .card {
            width: 100%;

            .card-header {
              display: block;
              background: none;
              margin: 5px 0;
              padding: 0;
              border: none;

              button {
                text-decoration: none;
                padding: 0;

                p {
                  margin: 0;
                  color: rgba(0,0,0,0.87);
                  font-weight: bold;
                }
              }

            }

            .collapse.show {
            margin-bottom: 20px;
            }

            .collapse {

            .card-body {
              padding: 0;

              ul {
                list-style: none;
                padding: 0;
                margin: 0;

                .header-title {
                  display: none;
                }

                li {

                  a {
                    color: rgb(101, 102, 105);
                    font-size: 0.875rem;
                    font-weight: 500;
                    line-height: 1.875rem;

                    &:hover {
                      color: #db524f;
                      text-decoration: none;
                    }
                  }
                }
              }
            }
          }
          }
        }
      }
    }

    .privacy {
        .content {
          flex-wrap: wrap;
          padding: 20px 30px;
          height: auto;
        }
      }

      .footer-content-bottom {
        .footer-bottom {
          height: auto;
          margin-bottom: 25px;

          p {
            text-align: center;
          }
        }
      }
  }
`;
