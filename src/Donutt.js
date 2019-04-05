import React, { Component } from 'react';
import { Container , Row , Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as d3 from "d3";

class Donutt extends Component {

   

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
        var seedData = [{
            "value": 77,
          }
        ];

        var k = 100 - seedData[0].value;


        seedData.push({
            "value" : k
        });
          
          // Define size & radius of donut pie chart
          var width = 300,
              height = 300,
              radius = Math.min(width, height) / 2;
          
          // Define arc colours
          var colour = ['#467fdb' , '#e6e9ef']
          
          // Define arc ranges
          var arcText = d3.scaleOrdinal()
            .range([0, width]);
          
          // Determine size of arcs
          var arc = d3.arc()
            .innerRadius(radius - 20)
            .outerRadius(radius - 10);
          
          // Create the donut pie chart layout
          var pie = d3.pie()
            .value(function (d) { return d["value"]; })
            .sort(null);
          
          // Append SVG attributes and append g to the SVG
          var svg = d3.select("#donut-chartt")
            .attr("width", width)
            .attr("height", height)
            .append("g")
              .attr("transform", "translate(" + radius + "," + radius + ")");
          
          // Define inner circle
          svg.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 100)
            .attr("fill", "#fff") ;
          
          // Calculate SVG paths and fill in the colours
          var g = svg.selectAll(".arc")
            .data(pie(seedData))
            .enter().append("g")
            .attr("class", "arc")
                  
            // Make each arc clickable 
            .on("click", function(d, i) {
              window.location = seedData[i].link;
            });
          
              // Append the path to each g
              g.append("path")
                .attr("d", arc)
                .attr("fill", function(d, i) {
                  return colour[i];
                });
          
              // Append text labels to each arc
              g.append("text")
                .attr("transform", function(d) {
                  return "translate(" + arc.centroid(d) + ")";
                })
                .attr("dy", ".35em")
                .style("text-anchor", "middle")
                .attr("fill", "#fff")
                  .text(function(d,i) { return seedData[i].label; })
            
          g.selectAll(".arc text").call(wrap, arcText.range([0, width]));
          
          // Append text to the inner circle
          svg.append("text")
            .attr("dy", "-3.5em")
            .style("text-anchor", "middle")
            .attr("class", "inner-circle")
            .attr("fill", "#36454f")
            .text(function(d) { return 'Currently'; });
          
          svg.append("text")
            .attr("dy", "-0.3em")
            .style("text-anchor", "middle")
            .attr("class", "bold")
            .attr("fill", "#36454f")
            .text(function(d) { return seedData[0].value; });

            svg.append("text")
            .attr("dy", "1.0em")
            .style("text-anchor", "middle")
            .attr("class", "reddish")
            .attr("fill", "#479aa5")
            .text(function(d) { return '^5'; });

            svg.append("text")
            .attr("dy", "4.0em")
            .style("text-anchor", "middle")
            .attr("class", "smallt")
            .attr("fill", "#36454f")
            .text(function(d) { return 'from last month'; });
          
          // Wrap function to handle labels with longer text
          function wrap(text, width) {
            text.each(function() {
              var text = d3.select(this),
                  words = text.text().split(/\s+/).reverse(),
                  word,
                  line = [],
                  lineNumber = 0,
                  lineHeight = 1.1, // ems
                  y = text.attr("y"),
                  dy = parseFloat(text.attr("dy")),
                  tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
              console.log("tspan: " + tspan);
              while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > 90) {
                  line.pop();
                  tspan.text(line.join(" "));
                  line = [word];
                  tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
              }
            });
          }


    }


  render() {
        return (

            <div className = "normpadd">


            <Row>
                <Col >
                    <h4 className = "BHED">Top Errors</h4>
                </Col>

                <Col>
                    <span className = "right TEXT">
                    <a href="#" >MORE</a>
                    </span>
                </Col>
            </Row>

            <Row  className = "center card">
                <Col>
                  
                        <div className="contentt">
                        <svg id="donut-chartt"></svg>
                       </div>
                </Col>
            </Row>

            </div>

            
        );
     }

 }
 export default Donutt