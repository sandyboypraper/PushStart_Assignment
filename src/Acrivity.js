import React, { Component } from 'react';
import { Container , Row , Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Lozenge from '../node_modules/@atlaskit/lozenge';

class Activity extends Component{

  render(){


    const sandylist = this.props.hed.DATA;

    const listi = sandylist.map(temp => {
        return(
                          <div>
                        <Row>

                            <Col sm = "1">
                            <FontAwesomeIcon className = "myicon" icon = {temp.loz} />
                            </Col>
                         <Col>
                         
                         <h3 className="right BNHED grey">{temp.NUMBER}</h3>
                       <span className = "BHED"> {temp.SUBHED}</span>

                   

                      <p className = "STEXT">{temp.SUBTEXT}</p>
                      </Col>
                        
                        </Row>
                        </div>
          );
        });

  return (
     <div className = "normpadd">
            <Row>
                <Col >
                    <h4 className = "BHED">Activity Stream</h4>
                </Col>

                <Col>
                    <span className = "right TEXT">
                    <a href="#" >more></a>
                    </span>
                </Col>
            </Row>


            <Row>
                 <Col>
                    <div className = "center card">
                         {listi}
                       </div>
                 </Col>
            </Row>

    </div>

  )}
}

export default Activity