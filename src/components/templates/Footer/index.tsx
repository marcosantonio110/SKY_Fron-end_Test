import React, {Component} from "react";
import {FiFacebook, FiInstagram, FiTwitter, FiYoutube} from 'react-icons/all'
import {Accordion, Button, Card} from 'react-bootstrap'
import ReactResizeDetector from 'react-resize-detector';

import {Container} from "./styles";

class SkyFooter extends Component {

  onResize = (e: number) => {
    if (e <= 768) {
      document.querySelectorAll('.collapse').forEach(el => {
        el.classList.remove('sky-collapse')
      })
    } else {
      document.querySelectorAll('.collapse').forEach(el => {
        el.classList.add('sky-collapse')
      })
    }
  };


  render() {
    return (
      <Container>
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize}/>
        <div className="footer">
          <div className="social-media">
            <div className="logo-sky"/>
            <div className="icons">
              <a title="Facebook" rel='noopener noreferrer' target="_blank"
                 href="https://www.facebook.com/SKYBrasil/?ref=ts">
                <FiFacebook/>
              </a>
              <a title="Twitter" rel='noopener noreferrer' target="_blank" href="https://twitter.com/skybrasil">
                <FiTwitter/>
              </a>
              <a title="Youtube" rel='noopener noreferrer' target="_blank" href="https://www.youtube.com/user/skyhdtv">
                <FiYoutube/>
              </a>
              <a title="Instagram" rel='noopener noreferrer' target="_blank"
                 href="https://www.instagram.com/skybrasil/">
                <FiInstagram/>
              </a>
            </div>
          </div>
        </div>
        <hr/>
        <div className="content-footer">
          <div className="content-left">
            <div className="app-sky" title="Baixe no seu celular o app Minha SKY e divirta-se.">
              <img src="https://skyplay.sky.com.br/o/sky-play-theme/images/minha-sky.svg" alt="app minha SKY"/>
              <p>Baixe no seu celular o app Minha SKY e divirta-se.</p>
            </div>
            <div className="store">
              <a title="Disponível na Apple Store" className="apple-store"></a>
              <a title="Disponível na Play Store" className="google-play"></a>
            </div>
          </div>

          <div className="content-right">
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <p>Sobre</p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0" className="sky-collapse">
                  <Card.Body>
                    <ul>
                      <li className="header-title">Sobre</li>
                      <li><a href="">Nossa história</a></li>
                      <li><a href="">Imprensa</a></li>
                      <li><a href="">Prêmios conquistados</a></li>
                      <li><a href="">Credenciamento</a></li>
                      <li><a href="">Trabalhe com a gente</a></li>
                      <li><a href="">Promoção</a></li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <p>Nossa responsabilidade</p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1" className="sky-collapse">
                  <Card.Body>
                    <ul>
                      <li className="header-title">Nossa responsabilidade</li>
                      <li><a href="">Conselho aos usuários</a></li>
                      <li><a href="">Pesquisa Anatel</a></li>
                      <li><a href="">Relatórios de transparência</a></li>
                      <li><a href="">Responsabilidade Social</a></li>
                      <li><a href="">Acecibilidade</a></li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    <p>Ajuda</p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2" className="sky-collapse">
                  <Card.Body>
                    <ul>
                      <li className="header-title">Ajuda</li>
                      <li><a href="">Central de ajuda</a></li>
                      <li><a href="">Manuais</a></li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    <p>SKY Empresas</p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3" className="sky-collapse">
                  <Card.Body>
                    <ul>
                      <li className="header-title">SKY Empresas</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
        <div className="privacy">
          <div className="content">
            <a href="">
              Inicio
            </a>
            |
            <a href="">
              Política de Privacidade
            </a>
            |
            <a href="">
              Contratos gerais
            </a>
            |
            <a href="">
              Contratos Pré-pagos
            </a>
            |
            <a href="">
              Cancelamento
            </a>
            |
            <a href="">
              Ouvidoria
            </a>
            |
            <a href="">
              Consumidor.gov
            </a>
          </div>
        </div>
        <div className="footer-content-bottom">
          <div className="footer-bottom">
            <p>® Todos os direitos reservados 2018. Todas as marcas SKY e qualquer propriedade intelectual inserida
              nelas são de propriedade da SKY Internacional AG e usadas pela SKY Serviços de Banda Larga LTDA. mediante
              licença.</p>
          </div>
        </div>
      </Container>
    );
  }
}

export default SkyFooter;
