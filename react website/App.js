import React, { Component } from 'react';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout, Header, Drawer, Navigation,Content } from 'react-mdl';
import Main from './components/main.js';
import Resume from './components/resume.js';
import {Link} from 'react-router-dom'
class App extends Component {
  render() {



const name = "danish khan";

    return (


      <React.Fragment>

<div className="demo-big-content">
    <Layout>
        <Header className="back" title={<Link style={{color: 'white' , textDecoration:'none'}}  to="/">  My Portfolio </Link>} scroll>
            <Navigation>
                <Link to ="/">HOME </Link>

                <Link to ="/resume/" >RESUME </Link>
                <Link to="/project">PROJECT</Link>
                <Link to="/contact">CONTACT</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{color: 'black' , textDecoration:'none'}}  to="/">  My Portfolio </Link>}>
            <Navigation>
                 <Link to ="/">HOME </Link>
                <Link to ="/resume">RESUME </Link>
                <Link to="/project">PROJECT</Link>
                <Link to="/contact">CONTACT</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />


<Main/>



        </Content>
    </Layout>
</div>



</React.Fragment>

    );
  }
}

export default App;
