
import {d3} from './bundles';

import {
    applyDataToStringGroup
    ,straightLine
    ,applyDataToTackGroup
    ,applyDataToNoteGroup
} from './elements';

const findTack = {x: d=>{return d.x - 150/2}, y: d=>{return d.y - 10}}
const visualConfig = {
string:{
"stroke":(d)=>d.color
,"stroke-width":"3px"
,"fill":"none"
,"stroke-linejoin":"round"
,"stroke-linecap":"round"
},
noteBody:{
    width: 150,
    height: 150,
    x: findTack.x,
    y: findTack.y,
    stroke:"red",
    fill:"dodgerblue"
}
,
}


function draw(data, links){

    // let noteConfig = {
    //     noteBody:{
    //         width: 150,
    //         height: 150,
    //         x: d=>{return d.x - 150/2},
    //         y: d=>{return d.y - 10},
    //         stroke:"red",
    //         fill:"dodgerblue"
    //     }
    // }

    applyDataToNoteGroup(
        noteGroup
        ,data
        ,visualConfig
    );

    applyDataToStringGroup(
        stringGroup
        ,mapLinks(links, data)
        ,visualConfig
    );
  applyDataToTackGroup(tackGroup, data);

  tackGroup.selectAll("g").call(drag)
}

/**
    map links between data points based off of links array
*/
function mapLinks(links, data){
  return links.map(link=>{
    let start = data.find(datum=>{return datum.id == link[0]})
    let end = data.find(datum=>{return datum.id == link[1]})
    return {start:start, end:end, color: link[2] || "red"}
  })
}

/**
  apply multiple attrs from an array of arrays, lispy stylez
*/
function attrs(selection, ...attrs){
  if(selection){
  attrs.forEach(attr=>{
    selection.attr(attr[0], attr[1])
  })
  return selection;
 }
}

/**
  apply same-name properties from a config object to a d3 selection
*/
function samesies(selection, configObject){

  for(var x in configObject){
      // console.log(x);
    selection.attr(x, configObject[x])
  }
  return selection;
}

/**
  initiate drag
*/
function dragstarted(d) {
    console.log(d)
    d3.select(this).selectAll("circle").classed('moving', true);
    d3.select("#noteBody"+d.id).classed("moving", true);
}

/**
  handle drag event
*/
function dragged(d) {
    d.x = d3.event.x
    d.y = d3.event.y
    let moving = d3.selectAll(".moving")
               .attrs(
                ["cx",d=>d.x]
                ,["cy",d=>d.y]
                 ,["x",findTack.x]
                 ,["y",findTack.y]
               )
    stringGroup.selectAll('path').attr('d', straightLine);
}
/**
    end drag procession
*/
function dragended(d) {
    d3.select(this).selectAll("circle").classed('moving', false);
}

function init(svg){
  svg
    .attrs(
      ["width", window.innerWidth]
     ,["height", window.innerHeight])
let g = svg.append("g")
    .attrs(
      ["width", window.innerWidth]
     ,["height", window.innerHeight])
    stringGroup = g.append("g").attr("id","strings")
    noteGroup = g.append("g").attr("id","notes")
    tackGroup = g.append("g").attr("id","tacks")

    svg.call(d3.zoom().scaleExtent([1 / 2, 4])
        .on("zoom", e=>{
            g.attr("transform",d3.event.transform)
            d3.select("#showZoom").text(d3.event.transform.k)
        }))

    // let zoom = d3.zoom();
}

function setupDemo(){
  init(d3.select("body").append("svg"));
  draw(data,links);
}


window.setupDemo = setupDemo;


let data = [{id:1,x:100, y:200}
            , {id:2,x:300, y:200}
           , {id:3,x:200, y:300}
           ,{id:4, x:400, y:100}];

let links = [[1,2, "green"],
            [1,3, "blue"],
            [2,3],
            [4,2,"gray"]]

let svg,
tackGroup,
stringGroup,
noteGroup




let drag = d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);

let line = d3.line()
  .x(d=>d.x)
  .y(d=>d.y)
