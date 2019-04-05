import React, { Component } from 'react';
import { Container , Row , Col } from 'reactstrap';
import Route from 'react-router-dom/Route'; 
import axios from 'axios';

class Adminpage extends Component{


    state = {
        SUBHED : null,
        SUBTEXT : null,
        TEMPNUMBER : "",
        "loz" : "Removed"
    }

    handelchange = (e) => {
        this.setState(
            {
                [e.target.id] : e.target.value
            }
        )
    }

    handelSubmit = (e) => {
        
        e.preventDefault()
        axios.post('/saveit', this.state)
        .then(res => {
            this.props.add(res.data);
        })
        
        console.log(this.props);
    }

    render(){
        return (
            <div className = "normpadd">
                <Row>
                    <Col sm = {{ "size" : 6 , "offset":3 }}>

                        <form onSubmit = {this.handelSubmit}>
                            <label htmlFor = "SUBHED">SUBHED:</label>
                            <input type = "text" id = "SUBHED" onChange = {this.handelchange} />
                            
                            <br/>

                            <label htmlFor = "SUBTEXT">SUBTEXT:</label>
                            <input type = "text" id = "SUBTEXT" onChange = {this.handelchange} />
                            
                            <br/>
                            
                            <input type = "submit" />
                        </form>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default Adminpage 