const timelines = Object.keys(timeline_data).map(bookId => {
    const events = timeline_data[bookId];
    const centerIndex = events.findIndex(event => event.owner_names.includes('Owner ID: 3467'));
    return {
        bookId,
        events,
        centerIndex,
        lengthBefore: centerIndex * 120,
        lengthAfter: (events.length - centerIndex - 1) * 120
    };
});

const webWidth = 1000;
const webHeight = 1000;

const webSvg = d3.select('#web')
    .attr('width', webWidth)
    .attr('height', webHeight);

const center = { x: webWidth / 2, y: webHeight / 2 };

const angleStep = (2 * Math.PI) / timelines.length;

const webTooltip = d3.select('body').append('div')
    .attr('class', 'tooltip')
    .style('position', 'absolute')
    .style('visibility', 'hidden')
    .style('background-color', 'white')
    .style('padding', '5px')
    .style('border-radius', '5px')
    .style('border', '1px solid black');

timelines.forEach((timeline, index) => {
    // 计算时间线的角度
    const angle = angleStep * index; // 每条时间线占据两个位置

    // 计算时间线的起始和结束点
    const startX = center.x - Math.cos(angle) * timeline.lengthBefore;
    const startY = center.y - Math.sin(angle) * timeline.lengthBefore;
    const endX = center.x + Math.cos(angle) * timeline.lengthAfter;
    const endY = center.y + Math.sin(angle) * timeline.lengthAfter;

    // 绘制时间线
    const line = d3.line()([[startX, startY], [endX, endY]]);
    webSvg.append('path')
        .attr('d', line)
        .attr('stroke', 'black')
        .attr('fill', 'none')
        .on('mouseover', function() {
            d3.select(this).attr('stroke', 'orange').attr('stroke-width', '3');
            webTooltip.style('visibility', 'visible').text(timeline.bookId);
        })
        .on('mousemove', function(event) {
            webTooltip.style('top', (event.pageY - 10) + 'px').style('left',(event.pageX + 10) + 'px');
        })
        .on('mouseout', function() {
            d3.select(this).attr('stroke', 'black').attr('stroke-width', '1');
            webTooltip.style('visibility', 'hidden');
        });


    // 在时间线上添加点和文本
    timeline.events.forEach((event, eventIndex) => {
        const distanceBefore = Math.abs(eventIndex - timeline.centerIndex) * 90;
        const x = eventIndex < timeline.centerIndex
            ? center.x - Math.cos(angle) * distanceBefore
            : center.x + Math.cos(angle) * distanceBefore;
        const y = eventIndex < timeline.centerIndex
            ? center.y - Math.sin(angle) * distanceBefore
            : center.y + Math.sin(angle) * distanceBefore;

        // 添加点
        webSvg.append('circle')
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', 2)
            .attr('fill', event.owner_names.includes('Owner ID: 3467') ? 'red' : 'blue');

        // 添加文本
        webSvg.append('text')
            .attr('x', x)
            .attr('y', y - 10)
            .attr('text-anchor', 'middle')
            .text(event.start_time);
    });

    // 添加书籍ID
    // webSvg.append('text')
    //     .attr('x', endX)
    //     .attr('y', endY + 20)
    //     .attr('text-anchor', 'middle')
    //     .text(timeline.bookId);
});

// 在中心点添加共同所有者的标记
webSvg.append('circle')
    .attr('cx', center.x)
    .attr('cy', center.y)
    .attr('r', 5)
    .attr('fill', 'red');