import React from 'react';
import { Alert } from 'reactstrap';

import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(props){
    return(
        <div>
            <Menu />
            <Alert color="primary">
                Alerta
            </Alert>
            Welcome
        </div>
    );
}

export default Home;