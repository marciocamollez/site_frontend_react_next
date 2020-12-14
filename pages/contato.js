import React from 'react';
import Head from 'next/head';

import Menu from '../components/Menu';
import axios from 'axios';
import Rodape from '../components/Rodape';

import { Container, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Contato = (data) => (
    <div>
        <Head>
            <title>Contato</title>
            <meta name='robots' content='index,follow' />
            <meta name='description' content='Site de ... sobre ..., pagina de contato com a empresa ...' />
        </Head>
        <Menu />
        <Jumbotron fluid className="contato">
            <style>{`.contato{
                padding-top: 100px;
                padding-bottom: 100px;
                background-color: #fff;
                margin-bottom: 0rem;
            }
            .titulo-contato{
                padding-bottom: 70px;
            }`}</style>
            <Container>
        <h1 className="text-center titulo-contato">{data.response.infoContato.tituloPgCont}</h1>
                <div className="row featurette">
                    <div className="col-md-6">
                        <Form>
                            <FormGroup>
                                <Label for="nome">Nome</Label>
                                <Input type="text" name="nome" id="nome" placeholder="Nome completo" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">E-mail</Label>
                                <Input type="email" name="email" id="email" placeholder="Seu melhor e-mail" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="assuntoMsg">Assunto da Mensagem</Label>
                                <Input type="text" name="assuntoMsg" id="assuntoMsg" placeholder="Assunto da mensagem" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="msg">Mensagem</Label>
                                <Input type="textarea" name="msg" id="msg" rows="4" />
                            </FormGroup>

                            <Button type="submit" outline color="danger">Enviar</Button>
                        </Form>
                    </div>
                    <div className="col-md-6">
                        <h3 className="featurette-heading">{data.response.infoContato.tituloFlCont}</h3>
                        <p className="lead">{data.response.infoContato.horAtend}</p>
                        <hr />
                        <address>
                            <strong>{data.response.infoContato.tituloEnd}</strong><br />
                            {data.response.infoContato.logradouro}<br />
                            {data.response.infoContato.endereco}<br />
                            {data.response.infoContato.telefone}<br />
                        </address>
                    </div>
                </div>
            </Container>
        </Jumbotron>

        <Rodape data={data.response.rodape} />
    </div>
);

Contato.getInitialProps = async () => {
    const response = await axios.get(
        'http://localhost:8080/infocontato'
    );
    console.log(response.data);
    return { response: response.data }
};


export default Contato;