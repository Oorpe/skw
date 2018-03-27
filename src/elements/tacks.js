
import {d3} from '../bundles';

function applyDataToTackGroup(selection, data){
let tack = selection.selectAll("circle")
  .data(data)
  .enter()
  let gr = tack.append("g")
  let circle = gr.append("circle")
  // attrs(circle,
  circle.attrs(
       ["r", 20]
       ,["cx", d=>d.x]
       ,["cy", d=>d.y]
       ,["stroke","DimGray"]
       ,["fill","DarkGray"])
  let topCircle = gr.append("circle")
  // attrs(topCircle,
  topCircle.attrs(
       ["r",15]
       ,["cx",d=>d.x]
       ,["cy",d=>d.y]
       ,["stroke","WhiteSmoke"]
       ,["stroke-width",3]
       ,["fill","LightGray"])
}

export {applyDataToTackGroup};
