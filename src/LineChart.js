import React, { Component } from 'react';
import { Container , Row , Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as d3 from "d3";

class LineChart extends Component {

    constructor(props){
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
     }
  
     componentDidMount() {
        this.createBarChart()
     }

    
     
  
     componentDidUpdate() {
        this.createBarChart()
     }
  
     createBarChart() {

      var parsem = (month) => {
        if(month == 1)
        return "Jan";
        else if(month == 2)
        return "Feb";
        else if(month == 3)
        return "Mar";
      };



        var data = [
            {
              name: "Canada",
              values: [
                {date: "1/03/2019", price: "200"},
                {date: "2/03/2019", price: "120"},
                {date: "3/03/2019", price: "33"},
                {date: "4/03/2019", price: "21"},
                {date: "5/03/2019", price: "51"},
                {date: "6/03/2019", price: "190"},
                {date: "7/03/2019", price: "120"},
                {date: "8/03/2019", price: "85"},
                {date: "9/03/2019", price: "221"},
                {date: "10/03/2019", price: "101"},
                {date: "11/03/2019", price: "50"},
                {date: "12/03/2019", price: "10"},
                {date: "13/03/2019", price: "5"},
                {date: "14/03/2019", price: "71"},
                {date: "15/03/2019", price: "20"},
                {date: "16/03/2019", price: "9"},
                {date: "17/03/2019", price: "220"},
                {date: "18/03/2019", price: "235"},
                {date: "19/03/2019", price: "120"},
                {date: "20/03/2019", price: "85"},
                {date: "21/03/2019", price: "221"},
                {date: "22/03/2019", price: "101"},
                {date: "23/03/2019", price: "50"},
                {date: "24/03/2019", price: "10"},
                {date: "25/03/2019", price: "5"},
                {date: "26/03/2019", price: "21"},
                {date: "27/03/2019", price: "51"},
                {date: "28/03/2019", price: "190"},
                {date: "29/03/2019", price: "120"},
                {date: "30/03/2019", price: "85"},
                {date: "31/03/2019", price: "221"},
              ]
            },
            {
              name: "Maxico",
              values: [
                {date: "1/03/2019", price: "50"},
                {date: "2/03/2019", price: "10"},
                {date: "3/03/2019", price: "5"},
                {date: "4/03/2019", price: "71"},
                {date: "5/03/2019", price: "20"},
                {date: "6/03/2019", price: "9"},
                {date: "7/03/2019", price: "220"},
                {date: "8/03/2019", price: "235"},
                {date: "9/03/2019", price: "61"},
                {date: "10/03/2019", price: "10"},
                {date: "11/03/2019", price: "71"},
                {date: "12/03/2019", price: "20"},
                {date: "13/03/2019", price: "9"},
                {date: "14/03/2019", price: "220"},
                {date: "15/03/2019", price: "235"},
                {date: "16/03/2019", price: "61"},
                {date: "17/03/2019", price: "200"},
                {date: "18/03/2019", price: "120"},
                {date: "19/03/2019", price: "33"},
                {date: "20/03/2019", price: "21"},
                {date: "21/03/2019", price: "51"},
                {date: "22/03/2019", price: "190"},
                {date: "23/03/2019", price: "120"},
                {date: "24/03/2019", price: "85"},
                {date: "25/03/2019", price: "221"},
                {date: "26/03/2019", price: "101"},
                {date: "27/03/2019", price: "50"},
                {date: "28/03/2019", price: "10"},
                {date: "29/03/2019", price: "61"},
                {date: "30/03/2019", price: "200"},
                {date: "31/03/2019", price: "120"},
              ]
            }
          ];

          var lent = data[0].values.length;
          
          var width = 2000;
          var height = 250;
          var margin_top = 10;
          var margin = 50;
          var duration = 250;
          
          var lineOpacity = "0.25";
          var lineOpacityHover = "0.85";
          var otherLinesOpacityHover = "0.1";
          var lineStroke = "1.5px";
          var lineStrokeHover = "2.5px";
          
          var circleOpacity = '0.85';
          var circleOpacityOnLineHover = "0.25"
          var circleRadius = 4;
          var circleRadiusHover = 8;
          
          
          /* Format Data */
          var parseDate = d3.timeParse("%d/%m/%Y");
          data.forEach(function(d) { 
            d.values.forEach(function(d) {
              d.date = parseDate(d.date);
              d.price = +d.price;    
            });
          });
          
          console.log(d3.extent(data[0].values , d=>d.date));

          var w = window.screen.width;
          /* Scale */
          var xScale = d3.scaleTime()
            .domain(d3.extent(data[0].values, d => d.date))
            .range([0, w-100]);
          
          var yScale = d3.scaleLinear()
            .domain([0, d3.max(data[0].values, d => d.price)])
            .range([height-margin_top, 0]);
          
          var color = d3.scaleOrdinal(d3.schemeCategory10);
          
          /* Add SVG */
          var svg = d3.select("#chart").append("svg")
            .attr("width", "100%")
            .attr("height", (height+margin)+"px")
            .append('g')
            .attr("transform", `translate(${margin}, ${margin_top})`);
          
          
          /* Add line into SVG */
          var line = d3.line()
            .x(d => xScale(d.date))
            .y(d => yScale(d.price));
          
          let lines = svg.append('g')
            .attr('class', 'lines');
          
          lines.selectAll('.line-group')
            .data(data).enter()
            .append('g')
            .attr('class', 'line-group')  
            .on("mouseover", function(d, i) {
                svg.append("text")
                  .attr("class", "title-text")
                  .style("fill", color(i))        
                  .text(d.name)
                  .attr("text-anchor", "middle")
                  .attr("x", (width-margin)/2)
                  .attr("y", 5);
              })
            .on("mouseout", function(d) {
                svg.select(".title-text").remove();
              })
            .append('path')
            .attr('class', 'line')  
            .attr('d', d => line(d.values))
            .style('stroke', (d, i) => color(i))
            .style('opacity', lineOpacity)
            .on("mouseover", function(d) {
                d3.selectAll('.line')
                              .style('opacity', otherLinesOpacityHover);
                d3.selectAll('.circle')
                              .style('opacity', circleOpacityOnLineHover);
                d3.select(this)
                  .style('opacity', lineOpacityHover)
                  .style("stroke-width", lineStrokeHover)
                  .style("cursor", "pointer");
              })
            .on("mouseout", function(d) {
                d3.selectAll(".line")
                              .style('opacity', lineOpacity);
                d3.selectAll('.circle')
                              .style('opacity', circleOpacity);
                d3.select(this)
                  .style("stroke-width", lineStroke)
                  .style("cursor", "none");
              });
          
          
          /* Add circles in the line */
          lines.selectAll("circle-group")
            .data(data).enter()
            .append("g")
            .style("fill", (d, i) => color(i))
            .selectAll("circle")
            .data(d => d.values).enter()
            .append("g")
            .attr("class", "circle")  
            .on("mouseover", function(d) {

              var month = d.date.getMonth() + 1;
              
              var monthstr = parsem(month);

              var content = "<div>" + '<h3>' + d.date.getDay() +
              ' ' +  monthstr + '</h3>' +
              '<p>' +
              '<span class="value">' + 'Data = ' + d.price + '</span>' +
              '</p>' + '</div>';

                // d3.select(this)     
                //   .style("cursor", "pointer")
                //   .append("text")
                //   .attr("class", "text")
                //   .text(content)
                //   .attr("x", d => xScale(d.date) + 5)
                //   .attr("y", d => yScale(d.price) - 10);

                var x = xScale(d.date) + 5;
                var y = yScale(d.price) - 10;

                 d3.select(this)     
                  .style("cursor", "pointer")
                  .append("foreignObject")
                  .attr("class" , "forn")
                  .attr("x", x)
                  .attr("y", y - 60)
                  .attr("width" , "100")
                  .attr("height" , "100")
                  .append('xhtml:div').html(content);

              })
            .on("mouseout", function(d) {
                d3.select(this)
                  .style("cursor", "none")  
                  .transition()
                  .duration(duration)
                  .selectAll(".forn").remove();
              })
            .append("circle")
            .attr("cx", d => xScale(d.date))
            .attr("cy", d => yScale(d.price))
            .attr("r", circleRadius)
            .style('opacity', circleOpacity)
            .on("mouseover", function(d) {
                  d3.select(this)
                    .transition()
                    .duration(duration)
                    .attr("r", circleRadiusHover);
                })
              .on("mouseout", function(d) {
                  d3.select(this) 
                    .transition()
                    .duration(duration)
                    .attr("r", circleRadius);  
                });
          
          
          /* Add Axis into SVG */
          var xAxis = d3.axisBottom(xScale).ticks(lent);
          var yAxis = d3.axisLeft(yScale).ticks(5);
          
          svg.append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0, ${height-margin_top})`)
            .call(xAxis);
          
          svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append('text')
            .attr("y", 15)
            .attr("transform", "rotate(-90)");
     }

  render() {
        return (

        

          <div>


           <Row className = "zeromar">
            <Col sm = "6">
            <h3 className = "BHED mybox margleft">
            Data Statistics
            </h3>
          
            </Col>

            <Col sm = "6" className = "zeromarg">
               <div className="right margtop margright BTEXT lightblue">
               <FontAwesomeIcon className = "myicon lightblue" icon = "dot-circle" />
               incomingdata
                </div>

                <div className="right margtop margright BTEXT lightorrange">
               <FontAwesomeIcon className = "myicon lightorrange" icon = "dot-circle" />
               No. of errors detected
                </div>
             
            </Col>
            </Row>
            <div > 
                <div id="chart">
                </div>
            </div>
         
          </div>

            
        );
     }

 }
 export default LineChart