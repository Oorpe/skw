// import {d3} from './bundles';

function applyDataToStringGroup(selection, data, config){

  let string = selection.selectAll("path")
   .data(data)
  .enter()
  .append("path")

    string.samesies(config.string)
    string.attr("d",straightLine)
}

function straightLine(d){
  return `M${d.start.x},${d.start.y}L${d.end.x},${d.end.y}`
}

export {applyDataToStringGroup, straightLine};
