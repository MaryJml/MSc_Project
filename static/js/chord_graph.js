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

const chordWidth = 700;
const chordHeight = 700;
const outerRadius = Math.min(chordWidth, chordHeight) * 0.4 - 20;
const innerRadius = outerRadius - 20;

const chordSvg = d3.select("#chordSvg")
    .append("g")
    .attr("transform", `translate(${chordWidth / 2 + 50},${chordHeight / 2 + 50})`);

const chord = d3.chord()
    .padAngle(0.02)
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
    .attr("id", d => `arc-${d.index}`)
    .attr("fill", d => color(d.index))
    .attr("stroke", d => d3.rgb(color(d.index)).darker())
    .append("title")
    .text(d => `${nodes[d.index].id}: ${ownerIdNameMap[nodes[d.index].id.replace("Owner ID: ", "")] || "Unknown"}`);

const ribbons = chordSvg.append("g")
    .attr("fill-opacity", 0.67)
    .selectAll("path")
    .data(chords)
    .join("path")
    .attr("d", ribbon)
    .attr("fill", d => color(d.target.index))
    .attr("stroke", d => d3.rgb(color(d.target.index)).darker())
    .on("mouseover", function(event, d) {
        const linkKey = nodes[d.source.index].id + "-" + nodes[d.target.index].id;
        const bookIds = combinedLinkCount[linkKey]?.bookIds.join(", ") || "No book IDs";

        d3.select(this).classed("highlight", true);
        d3.select(`#arc-${d.source.index}`).classed("highlight", true);
        d3.select(`#arc-${d.target.index}`).classed("highlight", true);

        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html("Book IDs: " + bookIds)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY + 10) + "px");
    })
    .on("mouseout", function(event, d) {
        d3.select(this).classed("highlight", false);
        d3.select(`#arc-${d.source.index}`).classed("highlight", false);
        d3.select(`#arc-${d.target.index}`).classed("highlight", false);

        d3.select(".tooltip").transition()
            .duration(0)
            .style("opacity", 0)
            .remove();

        // Maintain highlight if checkbox is checked
        d3.selectAll('input[name="ownerCheckbox"]:checked').each(function() {
            const ownerId = this.value;
            d3.select(`#arc-${indexById.get(ownerId)}`).classed('highlight', true);
            d3.select(`#text-${indexById.get(ownerId)}`).classed('highlight-text', true);
        });
    });

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
    .attr("id", d => `text-${d.index}`)
    .text(d => nodes[d.index].id);

function updateOwnerCheckboxes(filterText) {
    const checkboxDiv = d3.select("#ownerCheckboxes2");
    checkboxDiv.selectAll("*").remove();

    const filteredOwners = nodes.filter(node => {
        const ownerId = node.id.replace("Owner ID: ", "").toLowerCase();
        const ownerName = (ownerIdNameMap[ownerId] || "Unknown").toLowerCase();
        return ownerId.includes(filterText.toLowerCase()) || ownerName.includes(filterText.toLowerCase());
    });

    const labels = checkboxDiv.selectAll('label')
        .data(filteredOwners)
        .enter()
        .append('label')
        .style('display', 'flex')
        .style('align-items', 'center')
        .style('margin', '5px 0');

    labels.append('input')
        .attr('type', 'radio')
        .attr('name', 'ownerCheckbox')
        .attr('value', d => d.id)
        .on('change', function() {
            const ownerId = this.value;
            d3.selectAll('.highlight').classed('highlight', false);
            d3.selectAll('.highlight-text').classed('highlight-text', false);
            d3.select(`#arc-${indexById.get(ownerId)}`).classed('highlight', true);
            d3.select(`#text-${indexById.get(ownerId)}`).classed('highlight-text', true);
        });

    labels.append('span')
        .text(d => {
            const ownerId = d.id.replace("Owner ID: ", "");
            const ownerName = ownerIdNameMap[ownerId] || "Unknown";
            return `${ownerName} (${d.id})`;
        });
}

d3.select("#ownerSearch").on("input", function() {
    updateOwnerCheckboxes(this.value);
});

d3.select("#deselectButton").on("click", function() {
    d3.selectAll('input[name="ownerCheckbox"]').property('checked', false);
    d3.selectAll('.highlight').classed('highlight', false);
    d3.selectAll('.highlight-text').classed('highlight-text', false);
});

updateOwnerCheckboxes('');