
const nodeWeights = new Map(nodes.map(node => [node.id, 0]));
links.forEach(link => {
    nodeWeights.set(link.source.id, (nodeWeights.get(link.source.id) || 0) + 1);
    nodeWeights.set(link.target.id, (nodeWeights.get(link.target.id) || 0) + 1);
});

const indexById = new Map(nodes.map((d, i) => [d.id, i]));

const matrix = Array.from(indexById, () => new Array(nodes.length).fill(0));

links.forEach(d => {
    const source = indexById.get(d.source.id);
    const target = indexById.get(d.target.id);
    matrix[source][target] += 1;
});
const chordWidth = 600;
const chordHeight = 500;
const outerRadius = Math.min(chordWidth, chordHeight) * 0.4 - 20;
const innerRadius = outerRadius - 20;

const chordSvg = d3.select("#chordSvg")
    .append("g")
    .attr("transform", `translate(${chordWidth / 2},${chordHeight / 2 + 50})`);

const chord = d3.chord()
    .padAngle(0.035)
    .sortSubgroups(d3.descending);

const chords = chord(matrix);

const arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

const ribbon = d3.ribbon()
    .radius(innerRadius);

chordSvg.append("g")
    .selectAll("g")
    .data(chords.groups)
    .join("g")
    .append("path")
    .attr("d", arc)
    .attr("fill", d => color(d.index))
    .attr("stroke", d => d3.rgb(color(d.index)).darker())
    .append("title")
    .text(d => `${nodes[d.index].id}: ${ownerIdNameMap[nodes[d.index].id.replace("Owner ID: ", "")] || "Unknown"}`);

chordSvg.append("g")
    .attr("fill-opacity", 0.67)
    .selectAll("path")
    .data(chords)
    .join("path")
    .attr("d", ribbon)
    .attr("fill", d => color(d.target.index))
    .attr("stroke", d => d3.rgb(color(d.target.index)).darker());

const angle = d => (d.startAngle + d.endAngle) / 2;

chordSvg.append("g")
    .selectAll("text")
    .data(chords.groups)
    .join("text")
    .each(function(d) { d.angle = angle(d); })
    .attr("transform", d => `
        rotate(${(d.angle * 180 / Math.PI - 90)})
        translate(${outerRadius + 10})
        ${d.angle > Math.PI ? "rotate(180)" : ""}
    `)
    .attr("text-anchor", d => d.angle > Math.PI ? "end" : null)
    .text(d => nodes[d.index].id);
