import React, { Component } from 'react';
import { Container , Row , Col } from 'reactstrap';

import Lozenge from '../node_modules/@atlaskit/lozenge';

import badge from '../node_modules/@atlaskit/badge';


class Toperrors extends Component{
  render() {

    const sandylist = this.props.hed.DATA;

    const listi = sandylist.map(temp => {
        return(
           <div>
                       <h3 className="right BNHED diffcolor">{temp.NUMBER}</h3>
                       <span className = "BHED">{temp.SUBHED}</span>

                       <Lozenge appearance = {temp.loz.toLowerCase()} isBold = "true">
                          HIGH
                      </Lozenge>

                      <p className = "STEXT" appearance = {temp.loz.toLowerCase()}>{temp.SUBTEXT}</p>
                       </div>
          );
        });

      return (
      <div className = "normpadd">

            <Row className = "paddlit">
                <Col sm = "8">
                    <h4 className = "BHED">{this.props.hed.HED}</h4>
                </Col>

                <Col>
                    <span className = "right TEXT">
                    <a href="#" >MORE</a>
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
      )
  }
}

export default Toperrors