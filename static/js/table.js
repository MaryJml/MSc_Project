const table = d3.select("#nodeTable").append("table");
const thead = table.append("thead");
const tbody = table.append("tbody");

// 添加表头
thead.append("tr")
    .selectAll("th")
    .data(["Owner ID", "Name"])
    .enter()
    .append("th")
    .text(d => d);

// 添加表格行
const rows = tbody.selectAll("tr")
    .data(nodes.map(node => {
        return {
            id: node.id,
            name: ownerIdNameMap[node.id.replace("Owner ID: ", "")] || "Unknown"
        };
    }))
    .enter()
    .append("tr");

// 添加ownerId单元格
rows.append("td")
    .text(d => d.id);

// 添加name单元格
rows.append("td")
    .text(d => d.name);
