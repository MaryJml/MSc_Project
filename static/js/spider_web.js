// 获取复选框元素
const showOwnersCheckbox = document.getElementById('showOwnersCheckbox');

// 准备一个颜色映射
const ownerColorScale = d3.scaleOrdinal(d3.schemeCategory10);
const ownerSet = new Set();
Object.values(timeline_data).forEach(events => {
    events.forEach(event => {
        event.owner_names.forEach(owner => ownerSet.add(owner));
    });
});
ownerColorScale.domain(Array.from(ownerSet));

// 为复选框添加事件监听器
showOwnersCheckbox.addEventListener('change', function() {
    if (this.checked) {
        // 如果复选框被勾选，根据所有者设置圆圈的颜色
        webSvg.selectAll('circle')
            .attr('fill', function(d) {
                return ownerColorScale(d.owner_names[0]);
            });
    } else {
        // 如果复选框未被勾选，恢复圆圈的默认颜色
        webSvg.selectAll('circle')
            .attr('fill', function(d) {
                return d.owner_names.includes('Owner ID: 3467') ? 'red' : 'blue';
            });
    }
});

// 获取复选框元素
const showSameOwnersCheckbox = document.getElementById('showSameOwnersCheckbox');

// 添加事件监听器以响应复选框的变化
showSameOwnersCheckbox.addEventListener('change', function() {
    if (this.checked) {
        d3.selectAll('.linkSameOwner').style('opacity', 0.5);
    } else {
        d3.selectAll('.linkSameOwner').style('opacity', 0);
    }
});

// 获取复选框元素
const showYearsCheckbox = document.getElementById('showYearsCheckbox');

// 添加事件监听器以响应复选框的变化
showYearsCheckbox.addEventListener('change', function() {
    if (this.checked) {
        d3.selectAll('.timeline-text').style('opacity', 1); // 显示所有年份
    } else {
        d3.selectAll('.timeline-text').style('opacity', 0); // 隐藏所有年份
    }
});

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

const UnknownLength = 80;

const yearScale = d3.scaleLinear()
    .domain([minYearDiff, maxYearDiff])
    .range([80, 200]);

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

const centerPadding = 50;

const ownerLocations = {};

timelines.forEach((timeline, index) => {
    // 计算时间线的角度
    const angle = angleStep * index;
    const timelineClass = `class-timeline-${timeline.bookId}`;
    const textClass = `text-timeline-${timeline.bookId}`;

    // 计算左侧部分的起始点（从中心向左）
    const startLeftOffsetX = Math.cos(angle) * (timeline.lengthBefore + centerPadding);
    const startLeftOffsetY = Math.sin(angle) * (timeline.lengthBefore + centerPadding);
    const startLeftX = center.x - startLeftOffsetX;
    const startLeftY = center.y - startLeftOffsetY;

    // 计算右侧部分的结束点（从中心向右）
    const endRightOffsetX = Math.cos(angle) * (timeline.lengthAfter + centerPadding);
    const endRightOffsetY = Math.sin(angle) * (timeline.lengthAfter + centerPadding);
    const endRightX = center.x + endRightOffsetX;
    const endRightY = center.y + endRightOffsetY;

    // 绘制左侧部分的线段
    if (timeline.lengthBefore > 0) {
        const lineLeft = d3.line()([[startLeftX, startLeftY], [center.x, center.y]]);
        webSvg.append('path')
            .attr('d', lineLeft)
            .attr('class', timelineClass)
            .attr('opacity', 0.6)
            .attr('stroke', 'black')
            .attr('fill', 'none');
    }

    // 绘制右侧部分的线段
    const lineRight = d3.line()([[center.x, center.y], [endRightX, endRightY]]);
    webSvg.append('path')
        .attr('d', lineRight)
        .attr('class', timelineClass)
        .attr('opacity', 0.6)
        .attr('stroke', 'black')
        .attr('fill', 'none');



    let accumulatedLengthLeft = 0;
    for (let i = timeline.centerIndex - 1; i >= 0; i--) {
        accumulatedLengthLeft -= (timeline.events[i].start_time !== 'Unknown' && timeline.events[i + 1].start_time !== 'Unknown'
            ? yearScale(timeline.events[i + 1].start_time - timeline.events[i].start_time)
            : UnknownLength);

        const x = center.x + Math.cos(angle) * accumulatedLengthLeft;
        const y = center.y + Math.sin(angle) * accumulatedLengthLeft;

        timeline.events[i].owner_names.forEach(owner => {
            if (!ownerLocations[owner]) {
                ownerLocations[owner] = [];
            }
            ownerLocations[owner].push({ x, y });
        });

        webSvg.selectAll(null) // 使用selectAll(null)来创建新的元素
            .data([timeline.events[i]]) // 绑定事件数据
            .enter()
            .append('circle')
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', 2)
            .attr('fill', timeline.events[i].owner_names.includes('Owner ID: 3467') ? 'red' : 'blue')
            .on('mouseover', function() {
                webTooltip.style('visibility', 'visible').text(`${timeline.events[i].owner_names.join(', ')}\nYear: ${timeline.events[i].start_time}`);
            })
            .on('mousemove', function(event) {
                webTooltip.style('top', (event.pageY - 10) + 'px').style('left',(event.pageX + 10) + 'px');
            })
            .on('mouseout', function() {
                webTooltip.style('visibility', 'hidden');
            });

        // 添加文本
        if (!timeline.events[i].owner_names.includes('Owner ID: 3467')) {
            webSvg.append('text')
                .attr('class', `timeline-text ${textClass}`)
                .attr('x', x)
                .attr('y', y - 10)
                .attr('text-anchor', 'middle')
                .text(timeline.events[i].start_time);
        }
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

        timeline.events[i].owner_names.forEach(owner => {
            if (!ownerLocations[owner]) {
                ownerLocations[owner] = [];
            }
            ownerLocations[owner].push({ x, y });
        });

        webSvg.selectAll(null)
            .data([timeline.events[i]]) // 绑定事件数据
            .enter()
            .append('circle')
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', 2)
            .attr('fill', timeline.events[i].owner_names.includes('Owner ID: 3467') ? 'red' : 'blue')
            .on('mouseover', function() {
                webTooltip.style('visibility', 'visible').text(`${timeline.events[i].owner_names.join(', ')}\nYear: ${timeline.events[i].start_time}`);
            })
            .on('mousemove', function(event) {
                webTooltip.style('top', (event.pageY - 10) + 'px').style('left',(event.pageX + 10) + 'px');
            })
            .on('mouseout', function() {
                webTooltip.style('visibility', 'hidden');
            });

        // 添加文本
        if (!timeline.events[i].owner_names.includes('Owner ID: 3467')) {
            webSvg.append('text')
                .attr('class', `timeline-text ${textClass}`)
                .attr('x', x)
                .attr('y', y - 10)
                .attr('text-anchor', 'middle')
                .text(timeline.events[i].start_time);
        }
    }


    webSvg.selectAll(`.${timelineClass}`)
        .on('mouseover', function() {
            d3.selectAll(`.${timelineClass}`).attr('stroke', 'orange').attr('stroke-width', '2').attr('opacity', 1);
            webTooltip.style('visibility', 'visible').text(timeline.bookId);
            const isCheckboxChecked = showYearsCheckbox.checked;
            d3.selectAll('.timeline-text').style('opacity', function() {
                if (isCheckboxChecked) {
                    return this.classList.contains(textClass) ? 1 : 0.1;
                }
                else {
                    return this.classList.contains(textClass) ? 1 : 0;
                }
            });
        })
        .on('mousemove', function(event) {
            webTooltip.style('top', (event.pageY - 10) + 'px').style('left',(event.pageX + 10) + 'px');
        })
        .on('mouseout', function() {
            d3.selectAll(`.${timelineClass}`).attr('stroke', 'black').attr('stroke-width', '1').attr('opacity', 0.6);
            webTooltip.style('visibility', 'hidden');
            const isCheckboxChecked = showYearsCheckbox.checked;
            d3.selectAll('.timeline-text').style('opacity', isCheckboxChecked ? 1 : 0);
        });

});

// 在中心点添加共同所有者的标记
webSvg.append('circle')
    .attr('cx', center.x)
    .attr('cy', center.y)
    .attr('r', 5)
    .attr('fill', 'red');

// 计算两点之间的距离
function distance(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

// 遍历每个所有者，连接最近的点
Object.keys(ownerLocations).forEach(owner => {
    const locations = ownerLocations[owner];
    if (locations.length > 1) {
        locations.forEach((location, index) => {
            let closest = null;
            let closestDistance = Infinity;

            // 找到最近的点
            locations.forEach((otherLocation, otherIndex) => {
                if (index !== otherIndex) {
                    const dist = distance(location, otherLocation);
                    if (dist < closestDistance) {
                        closest = otherLocation;
                        closestDistance = dist;
                    }
                }
            });

            // 绘制连接最近点的虚线
            if (closest) {
                webSvg.append('path')
                    .attr('class', 'linkSameOwner')
                    .attr('opacity', 0.5)
                    .attr('d', d3.line()([[location.x, location.y], [closest.x, closest.y]]))
                    .attr('stroke', ownerColorScale(owner))
                    .attr('fill', 'none');
            }
        });
    }
});


