const nodeWeights = new Map(nodes.map(node => [node.id, 0]));
links.forEach(link => {
    nodeWeights.set(link.source.id, (nodeWeights.get(link.source.id) || 0) + 1);
    nodeWeights.set(link.target.id, (nodeWeights.get(link.target.id) || 0) + 1);
});

// 创建一个以节点id为索引的节点索引映射
const indexById = new Map(nodes.map((d, i) => [d.id, i]));

// 创建一个N x N的矩阵，N是节点的数量
const matrix = Array.from(indexById, () => new Array(nodes.length).fill(0));

// 填充矩阵
links.forEach(d => {
    const source = indexById.get(d.source.id);
    const target = indexById.get(d.target.id);
    matrix[source][target] += 1; // 假设每个链接的权重为1，根据实际情况调整
});
const chordWidth = 600;
const chordHeight = 500;
const outerRadius = Math.min(chordWidth, chordHeight) * 0.4 - 20;
const innerRadius = outerRadius - 20;

const chordSvg = d3.select("#chordSvg")
    .append("g")
    .attr("transform", `translate(${chordWidth / 2},${chordHeight / 2 + 50})`);  // 确保Chord图居中

const chord = d3.chord()
    .padAngle(0.035)
    .sortSubgroups(d3.descending);

const chords = chord(matrix);

const arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

const ribbon = d3.ribbon()
    .radius(innerRadius);

// 绘制节点弧
chordSvg.append("g")
    .selectAll("g")
    .data(chords.groups)
    .join("g")
    .append("path")
    .attr("d", arc)
    .attr("fill", d => color(d.index)) // 根据您的需求选择颜色
    .attr("stroke", d => d3.rgb(color(d.index)).darker())
    .append("title") // 添加title元素以提供鼠标悬停提示
    .text(d => `${nodes[d.index].id}: ${ownerIdNameMap[nodes[d.index].id.replace("Owner ID: ", "")] || "Unknown"}`);

// 绘制链接弦
chordSvg.append("g")
    .attr("fill-opacity", 0.67)
    .selectAll("path")
    .data(chords)
    .join("path")
    .attr("d", ribbon)
    .attr("fill", d => color(d.target.index))
    .attr("stroke", d => d3.rgb(color(d.target.index)).darker());

// 计算弧中点的角度
const angle = d => (d.startAngle + d.endAngle) / 2;
// 绘制节点名称
chordSvg.append("g")
    .selectAll("text")
    .data(chords.groups)
    .join("text")
    .each(function(d) { d.angle = angle(d); })  // 计算并存储每个弧的中点角度
    .attr("transform", d => `
        rotate(${(d.angle * 180 / Math.PI - 90)})
        translate(${outerRadius + 10})
        ${d.angle > Math.PI ? "rotate(180)" : ""}
    `)
    .attr("text-anchor", d => d.angle > Math.PI ? "end" : null)
    .text(d => nodes[d.index].id);
