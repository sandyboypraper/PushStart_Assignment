import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './exte.css';
import { Container , Row , Col } from 'reactstrap'; 
import Nav from './Nav.js';
import Toperrors from './Toperrors.js';
import Activity from './Acrivity.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer , faCodeBranch , faPlayCircle, faBug, faCommentDots, faChartLine, faQuestionCircle, faInfoCircle, faSpinner, faDotCircle} from '@fortawesome/free-solid-svg-icons'
import Donut from './Donut.js';
import Donutt from './Donutt.js';
import LineChart from './LineChart.js';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route'; 
import Adminpage from './Adminpage.js';

library.add(faServer , faCodeBranch , faPlayCircle , faBug ,faCommentDots , faChartLine , faQuestionCircle , faInfoCircle
  , faSpinner , faDotCircle
  )

class App extends Component {

 state = {
   "TE" : {
      "HED" : "Top Errors",
      "DATA" : [
        {
          "SUBHED" : "Premium less than zero",
          "loz" : "Removed" ,
          "SUBTEXT" : "MARKET WORKFLOW 1",
          "NUMBER" : "1500",
        },
        {
          "SUBHED" : "Sum insured less than zero",
          "loz" : "Removed" ,
          "SUBTEXT" : "MARKET WORKFLOW 1",
          "NUMBER" : "1500"
        },
        {
          "SUBHED" : "Incorrect city names & address",
          "loz" : "Moved" ,
          "SUBTEXT" : "MARKET WORKFLOW 1",
          "NUMBER" : "1500"
        },
        {
          "SUBHED" : "Discharge date before admission date",
          "loz" : "Removed" ,
          "SUBTEXT" : "MARKET WORKFLOW 1",
          "NUMBER" : "1500"
        },
        {
          "SUBHED" : "Wrong telephone numbers",
          "loz" : "Default" ,
          "SUBTEXT" : "MARKET WORKFLOW 1",
          "NUMBER" : "1500"
        }
      ]
   },
   "ASS" : {
    "HED" : "Assigned to Me",
    "DATA" : [
      {
        "SUBHED" : "Premium less than zero",
        "loz" : "Removed" ,
        "SUBTEXT" : "MARKET WORKFLOW 1",
        "NUMBER" : ""
      },
      {
        "SUBHED" : "Sum insured less than zero",
        "loz" : "Removed" ,
        "SUBTEXT" : "MARKET WORKFLOW 1",
        "NUMBER" : ""
      },
      {
        "SUBHED" : "Incorrect city names & address",
        "loz" : "Moved" ,
        "SUBTEXT" : "MARKET WORKFLOW 1",
        "NUMBER" : ""
      },
      {
        "SUBHED" : "Discharge date before admission date",
        "loz" : "Removed" ,
        "SUBTEXT" : "MARKET WORKFLOW 1",
        "NUMBER" : ""
      },
      {
        "SUBHED" : "Wrong telephone numbers",
        "loz" : "Default" ,
        "SUBTEXT" : "MARKET WORKFLOW 1",
        "NUMBER" : ""
      }
    ]
 },
 "HIGHEST" : {
  "HED" : "H/st Buss.. Empact",
  "DATA" : [
    {
      "SUBHED" : "Premium less than zero",
      "loz" : "Removed" ,
      "SUBTEXT" : "MARKET WORKFLOW 1",
      "NUMBER" : "$1500.00"
    },
    {
      "SUBHED" : "Sum insured less than zero",
      "loz" : "Removed" ,
      "SUBTEXT" : "MARKET WORKFLOW 1",
      "NUMBER" : "$1500.00"
    },
    {
      "SUBHED" : "Incorrect city names & address",
      "loz" : "Moved" ,
      "SUBTEXT" : "MARKET WORKFLOW 1",
      "NUMBER" : "$1500.00"
    },
    {
      "SUBHED" : "Discharge date before admission date",
      "loz" : "Removed" ,
      "SUBTEXT" : "MARKET WORKFLOW 1",
      "NUMBER" : "$1500.00"
    },
    {
      "SUBHED" : "Wrong telephone numbers",
      "loz" : "Default" ,
      "SUBTEXT" : "MARKET WORKFLOW 1",
      "NUMBER" : "$1500.00"
    }
  ]
},
"ACT" : {
  "HED" : "Activity Stream",
  "DATA" : [
    {
      "SUBHED" : "Workflow - Market data 1",
      "loz" : "server" ,
      "SUBTEXT" : "Finished running ...",
      "NUMBER" : "Today"
    },
    {
      "SUBHED" : "Data Library ",
      "loz" : "code-branch" ,
      "SUBTEXT" : "earthquakes.csv added  ...",
      "NUMBER" : "Today"
    },
    {
      "SUBHED" : "@deleeps tagged you ...",
      "loz" : "play-circle" ,
      "SUBTEXT" : "Have a look at this ...",
      "NUMBER" : "Today"
    },
    {
      "SUBHED" : "Error - 10,000 errors ...",
      "loz" : "bug" ,
      "SUBTEXT" : "New errors detected in ...",
      "NUMBER" : "Today"
    },
    {
      "SUBHED" : "Job - Marketing data 1 ...",
      "loz" : "comment-dots" ,
      "SUBTEXT" : "fininshed running ...",
      "NUMBER" : "Today"
    }
  ]
}
 };

  render() {
    return (

      <Router>

      <Route path = "/" exact strict component = {Adminpage} />

        <Route path = "/dashboard" exact strict render = {
            () => {
              return (
                <div className="App">
      
      <Nav/>
      
      <hr />

     <LineChart />
      
      <Row className = "myboxi">
          <Col sm = "3">
             <Donutt  />
          </Col> 
          <Col sm = "5">
          <Toperrors hed = {this.state.TE} />
          </Col>
          <Col sm = "4">
           <Toperrors hed = {this.state.ASS} />
          </Col>
      </Row>

      <Row className = "myboxi">
          <Col sm = "3">
             <Donut />
          </Col> 
          <Col sm = "5">
          <Toperrors hed = {this.state.HIGHEST} />
          </Col>
          <Col sm = "4">
           <Activity hed = {this.state.ACT} />
          </Col>
      </Row>
  

      </div>

              )
            }
        } />

     
      </Router> 
    );
  }
}

export default App;
