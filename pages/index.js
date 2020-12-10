import React from 'react';
import Head from 'next/head';

import { Jumbotron, Container } from 'reactstrap';
import Link from 'next/link';

import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLightbulb, faWarehouse, faAd, faAddressBook, faAward, faBeer } from '@fortawesome/free-solid-svg-icons';
library.add(faCoffee, faLightbulb, faWarehouse, faAd, faAddressBook, faAward, faBeer);

function Home(props) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name='robots' content='index,follow' />
        <meta name='description' content='Site de ... sobre ...' />
      </Head>
      <Menu />
      <Jumbotron fluid className="descr-top">
        <style>{`.descr-top{
          background-image: url(/topo_home.png);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          padding-top: 150px;
          padding-botton: 150px;
          color: #FFF;
          text-align: center;
          margin-bottom: 0rem !important;
      }`}</style>
        <Container>
          <h1 className="display-4">Temos a solução que a sua empresa precisa</h1>
          <p className="lead mb-4">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>

          <Link href="/contato">
            <a className="btn btn-lg btn-outline-light">ENTRE EM CONTATO</a>
          </Link>

        </Container>
      </Jumbotron>

      <Jumbotron fluid className="servicos">
        <style>{`
        .servicos{
          padding-top: 100px;
          padding-bottom: 100px;
          background-color: #fff;
          margin-bottom: 0rem !important;
        }
        .icone{
          width: 110px;
          height: 110px;
          padding-top: 12px;
          background-color: #fa1e37;
          border-radius: 250px;
          font-size: 3rem;
          color: #FFF;
        }`}</style>
        <Container>
          <div className="row featurette">
            <div className="col-md-6">
              <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-6">
              <div className="row circulo-serv">
                <style>{`.circulo-serv{
                  padding-top: 50px;
                  padding-bottom: 50px;
                }`}</style>
                <div className="col-sm-4">
                  <div className="icone text-center">
                    <FontAwesomeIcon icon="coffee" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="icone text-center">
                    <FontAwesomeIcon icon="lightbulb" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="icone text-center">
                    <FontAwesomeIcon icon="warehouse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="video">
        <style>{`.video{        
            text-align: center;    
            background-color: #000;  
            margin-bottom: 0rem !important;
            color: #fff;}
            .video-parag{
              margin-bottom: 30px;
              }
            .video-titulo{
              margin-bottom: 30px;}
              `}
        </style>
        <Container>
          <h2 className="display-4 video-titulo">Vídeo</h2>
          <p className="lead text-center video-parag">Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna.</p>

          <div className="row justify-content-md-center">
            <div className="col-12 col-md-8">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/bWEJu6W5Fn4?rel=0"></iframe>
              </div>
            </div>
          </div>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="projeto">
        <style>{`.projeto{
              padding-top: 50px;
              padding-bottom: 50px;
              background-color: #fff;
            }
            .row-projeto{
              margin-top: 70px;
            }
            .circulo{
              display: inline-block;
              height: 30px;
              width: 30px;
              line-height: 30px;
              -moz-border-radius: 15px;
              border-radius: 15px;
              background-color: #fa1e37;    
              color: #fff;
              text-align: center;
              padding-top: 30px;
              margin-bottom: 30px; 
            }
            .circulo-sm{
              height: 140px;
              width: 140px;
              line-height: 20px;
              -moz-border-radius: 150px;
              border-radius: 150px;
              font-size: 5rem;
            }`}
        </style>
        <Container>
          <div className="marketing text-center">
            <h1 className="display-4">Projetos</h1>
            <div className="row row-projeto">
              <div className="col-sm-3">
                <div className="circulo circulo-sm">
                  <FontAwesomeIcon icon="ad" />
                </div>
                <h2>Titulo</h2>
                <p>Praesent id ligula porta felis euismod semper commodo.</p>
              </div>

              <div className="col-sm-3">
                <div className="circulo circulo-sm">
                  <FontAwesomeIcon icon="address-book" />
                </div>
                <h2>Titulo</h2>
                <p>Praesent id ligula porta felis euismod semper commodo.</p>
              </div>

              <div className="col-sm-3">
                <div className="circulo circulo-sm">
                  <FontAwesomeIcon icon="award" />
                </div>
                <h2>Titulo</h2>
                <p>Praesent id ligula porta felis euismod semper commodo.</p>
              </div>

              <div className="col-sm-3">
                <div className="circulo circulo-sm">
                  <FontAwesomeIcon icon="beer" />
                </div>
                <h2>Titulo</h2>
                <p>Praesent id ligula porta felis euismod semper commodo.</p>
              </div>

            </div>
          </div>
        </Container>
      </Jumbotron>

      <Rodape />
    </div>
  );
}

export default Home