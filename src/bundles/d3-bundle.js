import * as d3Core from "d3-selection";
import * as d3Drag from "d3-drag";
import {line} from 'd3-shape';
import * as d3Zoom from 'd3-zoom';

let d3 = Object.assign(d3Core, d3Drag, {line}, d3Zoom);

/**
shim d3 selection with own utils
*/
d3.selection.prototype.samesies = function (attrs){
  // console.log(this, attrs)
for(var x in attrs){
    // console.log(x)
    this.attr(x, attrs[x])
  }
  return this;
}

d3.selection.prototype.attrs = function(...attrs){
  attrs.forEach(attr=>{
    this.attr(attr[0], attr[1])
  })
  return this;
}


export {d3};
