// not in use
const nodesCopy = nodes.map(d => ({ ...d }));
const linksCopy = links.map(d => ({
    ...d,
    source: nodesCopy[nodes.indexOf(d.source)],
    target: nodesCopy[nodes.indexOf(d.target)]
}));
const radius = Math.min(width, height) / 3;
const angleStep = (2 * Math.PI) / nodesCopy.length;

nodesCopy.forEach((node, index) => {
    node.theta = index * angleStep;
    node.x = radius * Math.cos(node.theta) + width / 2;
    node.y = radius * Math.sin(node.theta) + height / 2;
});

const nodeDegrees = linksCopy.reduce((acc, link) => {
    acc[link.source.id] = (acc[link.source.id] || 0) + 1;
    acc[link.target.id] = (acc[link.target.id] || 0) + 1;
    return acc;
}, {});

nodesCopy.forEach(node => {
    node.degree = nodeDegrees[node.id] || 0;
});

const nodeSizeScale = d3.scaleSqrt()
    .domain(d3.extent(nodesCopy, d => d.degree))
    .range([2, 8]);

const chordSvg = d3.select("#chordSvg")
    .attr("width", width)
    .attr("height", height);

// 绘制链接
const chord_link = chordSvg.append("g")
    .selectAll("path")
    .data(linksCopy)
    .join("path")
    .style("opacity", 0.3)
    .attr("d", d => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dr = Math.sqrt(dx * dx + dy * dy) * 2; // 增加弧度
        return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
    })
    .attr("fill", "none")
    .attr("stroke", "black")
    .on("mouseover", (event, d) => {
        const x = event.pageX + 10;
        const y = event.pageY + 10;
        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html("Book ID: " + d.bookId)  // 假设d.bookId包含了book id
            .style("left", x + "px")
            .style("top", y + "px");
    })
    .on("mouseout", () => {
        d3.select(".tooltip").remove();
    });

// 绘制节点
const chord_node = chordSvg.append("g")
    .selectAll("circle")
    .data(nodesCopy)
    .join("circle")
    .attr("r", d => nodeSizeScale(d.degree)) // 根据度数设置节点大小
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("fill", "blue")
    .on("mouseover", (event, d) => {
        const x = event.pageX + 10;
        const y = event.pageY + 10;
        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html(d.id)  // 假设d.id包含了owner name
            .style("left", x + "px")
            .style("top", y + "px");
    })
    .on("mouseout", () => {
        d3.select(".tooltip").remove();
    });

