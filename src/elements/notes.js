
export function applyDataToNoteGroup(selection,data, config){
    let g = selection.selectAll("g")
    .data(data)
    .enter()
    .append("g")

    g.append("rect")
    .samesies(config.noteBody)
    .attr("id", d=>{return "noteBody"+d.id})
}
