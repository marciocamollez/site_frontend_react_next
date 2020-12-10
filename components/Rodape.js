import React from 'react';

import { Container, Jumbotron } from 'reactstrap';
import Link from 'next/link';

import 'bootstrap/dist/css/bootstrap.min.css';

const Rodape = () => {
    return (
        <div>
            <Jumbotron fluid className="rodape">
                <style>{`
                .rodape{
                    padding-top: 30px;
                    padding-botton: 30px;
                    background-color: #000;
                    margin-bottom: 0rem !important;
                    color: #FFF;
                }
                .rodape ul li a.link-rodape{
                    color: #FFF !important;
                }
                .rodape ul li a.link-rodape:hover{
                    color: #adaeaf !important;
                    text-decoration: none;
                }`
                }</style>
                <Container>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4">
                            <h5>Celke</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="/">
                                        <a className="link-rodape">Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/empresa">
                                        <a className="link-rodape">Empresa</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contato">
                                        <a className="link-rodape">Contanto</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-sm-12 col-md-4">
                            <h5>Contato</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="tel:XXXXXXXXXXX">
                                        <a className="link-rodape">(XX) XXXXX-XXXX</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contato">
                                        <a className="link-rodape">Av. Winston Churchill</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contato">
                                        <a className="link-rodape">CNPJ: XX.XXX.XXX/XXXX-XX</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4">
                            <h5>Redes Sociais</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="https://www.instagram.com/celkecursos">
                                        <a className="link-rodape" target="_black">Instagram</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.facebook.com/celkecursos/">
                                        <a className="link-rodape" target="_black">Facebook</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.youtube.com/channel/UC5ClMRHFl8o_MAaO4w7ZYug">
                                        <a className="link-rodape" target="_black">Youtube</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com/celkecursos">
                                        <a className="link-rodape" target="_black">Twiter</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Rodape;