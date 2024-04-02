const table = d3.select("#nodeTable").append("table");
const thead = table.append("thead");
const tbody = table.append("tbody");

thead.append("tr")
    .selectAll("th")
    .data(["Owner ID", "Name"])
    .enter()
    .append("th")
    .text(d => d);
const rows = tbody.selectAll("tr")
    .data(nodes.map(node => {
        return {
            id: node.id,
            name: ownerIdNameMap[node.id.replace("Owner ID: ", "")] || "Unknown"
        };
    }))
    .enter()
    .append("tr");

rows.append("td")
    .text(d => d.id);

rows.append("td")
    .text(d => d.name);
