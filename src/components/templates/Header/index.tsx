import React, {Component} from "react";
import {Link} from 'react-router-dom'
import {createGlobalStyle, ThemeProvider} from "styled-components";
import styled from 'styled-theming'
import {FiUser, IoIosMenu, IoMdClose, TiAdjustContrast} from "react-icons/all";

import {Header} from "./styles";

const getBackground = styled('mode', {
  light: '#fff',
  dark: '#32383a'
})

const getforeground = styled('mode', {
  light: '#32383a',
  dark: '#fff'
})

const getFontSize = styled('textZoom', {
  normal: '1em',
  magnify: '1.5em',
})

const GlobalStyle = createGlobalStyle`
  header {
    background-color: ${getBackground};
    color: ${getforeground};
    font-size: ${getFontSize};
  }
`;

class SkyHeader extends Component {
  state = {
    navActive: "filmes",
    theme: {
      mode: 'dark',
      textZoom: 'normal'
    },
  };

  componentDidMount(): void {
    const saveTheme = localStorage.getItem('SKY_Theme_BR');
    console.log('saveTheme', saveTheme)
    this.setState({theme: saveTheme ? JSON.parse(saveTheme) : {mode: 'light', textZoom: 'normal'}})
  }

  handleChangeNav = (value: string) => {
    switch (value) {
      case "filmes":
        this.setState({
          navActive: "filmes"
        });
        break;
      case "series":
        this.setState({
          navActive: "series"
        });
        break;
      case "canais":
        this.setState({
          navActive: "canais"
        });
        break;
      default:
        break;
    }
  };

  handleNav = () => {
    document.querySelectorAll('.background-nav').forEach(el => {
      el.classList.toggle('background-nav-closed')
    })
  };

  changeTheme = (setItem: string, textZoom?: string) => {
    const {theme} = this.state;
    console.log('CHANGE THEME')

    if (setItem === 'mode') {
      switch (theme.mode) {
        case 'light':
          this.setState({...this.state, theme: {...this.state.theme, mode: 'dark'}});
          localStorage.setItem('SKY_Theme_BR', JSON.stringify({...this.state.theme, mode: 'dark'}))
          break;
        case 'dark':
          this.setState({...this.state, theme: {...this.state.theme, mode: 'light'}});
          localStorage.setItem('SKY_Theme_BR', JSON.stringify({...this.state.theme, mode: 'light'}))
          break;
        default:
          break;
      }
    } else {
      switch (textZoom) {
        case 'normal':
          this.setState({...this.state, theme: {...this.state.theme, textZoom: 'magnify'}});
          localStorage.setItem('SKY_Theme_BR', JSON.stringify({...this.state.theme, textZoom: 'magnify'}))
          break;
        case 'magnify':
          this.setState({...this.state, theme: {...this.state.theme, textZoom: 'normal'}});
          localStorage.setItem('SKY_Theme_BR', JSON.stringify({...this.state.theme, textZoom: 'normal'}))
          break;
        default:
          break;
      }
    }
  }


  render() {
    const {navActive, theme} = this.state;

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle/>
          <Header>
            <div className="top-header">
              <div className="content-header">
                <div className="content-left">
                  <div className="logo">
                    <Link to="/movies">
                      <img
                        src="https://skyplay.sky.com.br/o/sky-play-theme/images/logo-sky.svg"
                        alt="logo SKY"
                      />
                    </Link>
                  </div>
                  <div className="icons">
                    <button type="button">
                      <TiAdjustContrast onClick={() => this.changeTheme('mode')}/>
                    </button>
                    <button type="button" onClick={() => this.changeTheme('textZoom', 'magnify')}>
                      <span>A</span> <small>-</small>
                    </button>
                    <button type="button" onClick={() => this.changeTheme('textZoom', 'normal')}>
                      <span>A</span> <small>+</small>
                    </button>
                  </div>
                </div>
                <div className="content-right">
                  <div className="login">
                    <FiUser/> <span>Entrar</span>
                  </div>
                  <IoIosMenu className="nav-open" onClick={this.handleNav}/>
                </div>
              </div>
            </div>
            <div className="background-nav background-nav-closed">
              <div className="icon-nav-toggle">
                <IoMdClose onClick={this.handleNav}/>
              </div>
              <div className="nav-wrapper">
                <nav>
                  <div className="nav-content">
                    <div className="content-left">
                      <ul>
                        <li onClick={() => this.handleChangeNav("filmes")}>
                          <Link
                            to="/movies"
                            className={navActive === "filmes" ? "active" : ""}
                          >
                            Filmes
                          </Link>
                        </li>
                        <li onClick={() => this.handleChangeNav("series")}>
                          <Link
                            to="/series"
                            className={navActive === "series" ? "active" : ""}
                          >
                            Séries
                          </Link>
                        </li>
                        <li onClick={() => this.handleChangeNav("canais")}>
                          <Link
                            to="/channels"
                            className={navActive === "canais" ? "active" : ""}
                          >
                            Canais
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </Header>
        </>
      </ThemeProvider>
    );
  }
}

export default SkyHeader;
