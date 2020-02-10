import styled from "styled-components";

export const Header = styled.header`
  .icon-nav-toggle, .nav-open {
    display: none;
  }

  color: #fff;
  transition: all 0.1s ease-in-out;

  .top-header {
    border-bottom: 1px solid rgba(80, 80, 80, 0.15);

    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 56px;
      padding-right: 30px;
      padding-left: 30px;
      margin-right: auto;
      margin-left: auto;

      .content-left {
        display: flex;
        align-items: center;
        height: 100%;

        .logo {
          transition: all 0.1s ease-in-out;
          margin: 0 16px 0 0;
          height: 100%;
          display: flex;
          align-items: center;

          &:hover {
            background-color: rgba(36, 42, 44, 0.1);
          }
        }

        .icons {
          margin: 8px 4px 0 4px;

          button {
            transition: all 0.1s ease-in-out;
            border-radius: 50px;
            background-color: #ffffff;
            color: rgba(0, 0, 0, 0.58);
            border: none;
            width: 1.5rem;
            height: 1.5rem;
            padding: 0.0625rem 0.25rem;
            margin: 0 5px;
            outline: none;
            position: relative;
            font-size: 10px;
            font-weight: bold;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            touch-action: manipulation;
            cursor: pointer;
            line-height: 1.5;
            user-select: none;

            &:hover {
              background-color: #e3e3eb;
            }

            svg {
              font-size: 19px;
              position: absolute;
              top: 3px;
              right: 2px;
            }

            span {
              margin: 0 2px;
              position: absolute;
              top: 5px;
              left: 4px;
            }

            small {
              position: absolute;
              top: 5px;
              left: 14px;
              font-size: 11px;
            }
          }
        }
      }

      .content-right {
        height: 100%;
        display: flex;
        align-items: center;

        .login {
          transition: all 0.1s ease-in-out;
          display: flex;
          align-items: center;
          height: 100%;
          padding: 16px 17px;
          margin: 0 15px 0 0;
          color: rgba(0, 0, 0, 0.6);

          span {
            color: rgba(0, 0, 0, 0.6);
          }

          &:hover {
            background-color: #e5e5e5;
            color: #db524f;
            cursor: pointer;
          }

          svg {
            margin: 0px 10px 0 0;
          }
        }
      }
    }
  }

  nav {
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 56px;
      padding-right: 30px;
      padding-left: 30px;
      margin-right: auto;
      margin-left: auto;

      .content-left {
        display: flex;
        align-items: center;
        height: 100%;

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          height: 100%;

          li {
            transition: all 0.1s ease-in-out;
            height: 100%;
            display: flex;

            .active {
              color: #f35c58 !important;
            }

            &:hover {
              background-color: rgba(36, 42, 44, 0.1);
            }

            a {
              color: rgba(0, 0, 0, 0.6);
              font-size: ${props => props.theme.textZoom};
              font-weight: 700;
              padding: 16px 13px;
              margin: 0 12px;
              text-decoration: none;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
  .icon-nav-toggle, .nav-open {
    display: block;
  }

  .top-header {
          //position: absolute;
          //left: -32%;
          //width: 105%;
          //background: #FFF;

          .content-header {
            .content-left {
              .icons {
                display: none;
              }
            }

            .content-right {
               .login {
                  display: none;
                }

                .nav-open {
                  color: rgba(0, 0, 0, 0.42);
                  width: 50px;
                  height: 50px;
                  padding: 0 9px;
                  float: right;
                  margin-right: -10px;
                }
            }
          }
        }

    .background-nav-closed {
      right: -100% !important;
      left: unset !important;

    }


    .background-nav {
      background: rgba(0, 0, 0, 0.6);
      height: 100vh;
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;

      .icon-nav-toggle {
        position: absolute;
        color: rgba(0, 0, 0, 0.42);
        right: 0%;
        z-index: 99;
        width: 80%;
        height: 59px;
        background-color: #f1f2fa;

        svg {
          width: 50px;
          height: 50px;
          padding: 0 9px;
          float: right;
          margin: 5px;
        }
      }

      .nav-wrapper {
        height: 100vh;
        background: #FFF;
        position: absolute;
        width: 100%;
        left: 20%;

        nav {
          .nav-content {
            height: auto;
            padding: 0;

            //margin-left: -10px;

            .content-left {
             width: 100%;

              ul {
                display: flex;
                flex-direction: column;
                margin-top: 60px;
               width: 100%;

               li {
                border-bottom: solid 1px #E5E5E5;
               }
              }
            }
          }
        }
      }
    }


  }
`;
