
const yearDiffs = [];
Object.values(timeline_data).forEach(events => {
    for (let i = 0; i < events.length - 1; i++) {
        if (events[i].start_time !== 'Unknown' && events[i + 1].start_time !== 'Unknown') {
            const diff = Math.abs(events[i + 1].start_time - events[i].start_time);
            yearDiffs.push(diff);
        }
    }
});

const minYearDiff = d3.min(yearDiffs);
const maxYearDiff = d3.max(yearDiffs);

const UnknownLength = 50;

const yearScale = d3.scaleLinear()
    .domain([minYearDiff, maxYearDiff])
    .range([100, 300]);

const timelines = Object.keys(timeline_data).map(bookId => {
    const events = timeline_data[bookId];
    const centerIndex = events.findIndex(event => event.owner_names.includes('Owner ID: 3467'));

    let lengthBefore = 0;
    let lengthAfter = 0;

    // 计算 "Owner ID: 3467" 点之前的长度
    for (let i = 0; i < centerIndex; i++) {
        const yearDiff = events[i + 1].start_time !== 'Unknown' && events[i].start_time !== 'Unknown'
            ? yearScale(events[i + 1].start_time - events[i].start_time)
            : UnknownLength;
        lengthBefore += yearDiff;
    }

    // 计算 "Owner ID: 3467" 点之后的长度
    for (let i = centerIndex; i < events.length - 1; i++) {
        const yearDiff = events[i + 1].start_time !== 'Unknown' && events[i].start_time !== 'Unknown'
            ? yearScale(events[i + 1].start_time - events[i].start_time)
            : UnknownLength;
        lengthAfter += yearDiff;
    }

    return {
        bookId,
        events,
        centerIndex,
        lengthBefore,
        lengthAfter
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
    const angle = angleStep * index;

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

    let accumulatedLengthLeft = 0;
    for (let i = timeline.centerIndex - 1; i >= 0; i--) {
        accumulatedLengthLeft -= (timeline.events[i].start_time !== 'Unknown' && timeline.events[i + 1].start_time !== 'Unknown'
            ? yearScale(timeline.events[i + 1].start_time - timeline.events[i].start_time)
            : UnknownLength);

        const x = center.x + Math.cos(angle) * accumulatedLengthLeft;
        const y = center.y + Math.sin(angle) * accumulatedLengthLeft;
        console.log(timeline.events[i]);

        webSvg.append('circle')
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', 2)
            .attr('fill', timeline.events[i].owner_names.includes('Owner ID: 3467') ? 'red' : 'blue')
            .on('mouseover', function() {
                webTooltip.style('visibility', 'visible').text(`Owner: ${timeline.events[i].owner_names.join(', ')}\nYear: ${timeline.events[i].start_time}`);
            })
            .on('mousemove', function(event) {
                webTooltip.style('top', (event.pageY - 10) + 'px').style('left',(event.pageX + 10) + 'px');
            })
            .on('mouseout', function() {
                webTooltip.style('visibility', 'hidden');
            });

        // 添加文本
        webSvg.append('text')
            .attr('x', x)
            .attr('y', y - 10)
            .attr('text-anchor', 'middle')
            .text(timeline.events[i].start_time);
    }

    let accumulatedLengthRight = 0;
    for (let i = timeline.centerIndex; i < timeline.events.length; i++) {
        if (i !== timeline.centerIndex) {
            accumulatedLengthRight += (timeline.events[i].start_time !== 'Unknown' && timeline.events[i - 1].start_time !== 'Unknown'
                ? yearScale(timeline.events[i].start_time - timeline.events[i - 1].start_time)
                : UnknownLength);
        }

        const x = center.x + Math.cos(angle) * accumulatedLengthRight;
        const y = center.y + Math.sin(angle) * accumulatedLengthRight;

        webSvg.append('circle')
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', 2)
            .attr('fill', timeline.events[i].owner_names.includes('Owner ID: 3467') ? 'red' : 'blue')
            .on('mouseover', function() {
                webTooltip.style('visibility', 'visible').text(`Owner: ${timeline.events[i].owner_names.join(', ')}\nYear: ${timeline.events[i].start_time}`);
            })
            .on('mousemove', function(event) {
                webTooltip.style('top', (event.pageY - 10) + 'px').style('left',(event.pageX + 10) + 'px');
            })
            .on('mouseout', function() {
                webTooltip.style('visibility', 'hidden');
            });

        // 添加文本
        webSvg.append('text')
            .attr('x', x)
            .attr('y', y - 10)
            .attr('text-anchor', 'middle')
            .text(timeline.events[i].start_time);
    }


});

// 在中心点添加共同所有者的标记
webSvg.append('circle')
    .attr('cx', center.x)
    .attr('cy', center.y)
    .attr('r', 5)
    .attr('fill', 'red');