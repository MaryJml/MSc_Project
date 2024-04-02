// var counts =  {'1625': 8, '3467': 181, '00017138': 20, '1408': 72, '00021806': 5, '3765': 38, '00015143': 28, '3479': 11, '4085': 3, '3483': 4, '1904': 1, '4240': 1, '00010583': 1, '2832': 3, '00023820': 3, '00016901': 2, '00017969': 3, '00016355': 3, '00022791': 1, '901': 3, '00016768': 2, '00010056': 4, '3601': 1, '1471': 1, '4073': 1, '3463': 1, '2699': 2, '00016201': 3, '1861': 1, '00020986': 6, '1875': 2, '694': 2, '00011037': 2, '2590': 7, '00013191': 4, '00014395': 1, '00024367': 2, '1645': 2, '00021323': 1, '4204': 1, '4209': 4, '00010351': 1, '00010413': 1, '1639': 1, '3549': 1, '1638': 1, '00036743': 1, '00016113': 1, '0011046': 1, '3331': 2, '00015680': 1, '3442': 1, '00016568': 1, '00016569': 1, '00015181': 1, '00015179': 1, '00015557': 1, '43': 1, '00021391': 1, '00016518': 1, '00010673': 2, '00016540': 1, '00018017': 1, '00018018': 1, '00017097': 1, '2325': 1, '138': 1, '00011615': 1, '00010187': 1, '2381': 1, '00017050': 1, '4453': 1, '00015896': 1, '00016832': 1, '2640': 1, '00023301': 1, '00016834': 1, '4603': 1, '00016835': 1, '00016836': 1, '00014566': 1, '00012294': 1, '3445': 1, '3281': 1, '819': 1, '2734': 1, '3042': 1, '3523': 1, '4751': 1, '00029275': 3, '00029274': 2, '2334': 1, '00010061': 1, '00010062': 1, '1180': 1, '00010035': 1, '4086': 1, '00010352': 1, '4016': 1, '1112': 1, '00023096': 1, '3230': 1, '2678': 1, '3551': 1, '00016556': 1, '2839': 2, '00015156': 1, '00025457': 1, '00014883': 1, '00013839': 1, '00012182': 1, '3466': 1, '3458': 1, '2169': 1, '00028245': 1, '00016952': 1, '1409': 1, '1677': 1, '2141': 1};
// var overlapsList =  [{'pair': ['1625', '3467'], 'count': 8}, {'pair': ['00017138', '1625'], 'count': 2}, {'pair': ['1408', '1625'], 'count': 4}, {'pair': ['00021806', '1625'], 'count': 2}, {'pair': ['1625', '3765'], 'count': 4},{'pair': ['00017138', '3467'], 'count': 20}, {'pair': ['1408', '3467'], 'count': 72}, {'pair': ['00021806', '3467'], 'count': 5}, {'pair': ['3467', '3765'], 'count': 38}, {'pair': ['00017138', '1408'], 'count': 19}, {'pair': ['00017138', '00021806'], 'count': 2}, {'pair': ['00017138', '3765'], 'count': 6}, {'pair': ['00021806', '1408'], 'count': 4}, {'pair': ['1408', '3765'], 'count': 35}, {'pair': ['00021806', '3765'], 'count': 4}, {'pair': ['00015143', '3467'], 'count': 28}, {'pair': ['3467', '3479'], 'count': 11}, {'pair': ['00015143', '3479'], 'count': 5}, {'pair': ['3467', '4085'], 'count': 3}, {'pair': ['3765', '4085'], 'count': 2}, {'pair': ['3467', '3483'], 'count': 4}, {'pair': ['3479', '3483'], 'count': 4}, {'pair': ['1904', '3467'], 'count': 1}, {'pair': ['1904', '4085'], 'count': 1}, {'pair': ['00021806', '1904'], 'count': 1}, {'pair': ['1904', '3765'], 'count': 1}, {'pair': ['00021806', '4085'], 'count': 1}, {'pair': ['3467', '4240'], 'count': 1}, {'pair': ['00015143', '4240'], 'count': 1}, {'pair': ['00010583', '1625'], 'count': 1}, {'pair': ['1625', '2832'], 'count': 1}, {'pair': ['00010583', '3467'], 'count': 1}, {'pair': ['2832', '3467'], 'count': 3}, {'pair': ['00010583', '2832'], 'count': 1}, {'pair': ['00023820', '3467'], 'count': 3}, {'pair': ['00016901', '3467'], 'count': 2}, {'pair': ['00017969', '3467'], 'count': 3}, {'pair': ['00016355', '3467'], 'count': 3}, {'pair': ['00016901', '00023820'], 'count': 2}, {'pair': ['00017969', '00023820'], 'count': 3}, {'pair': ['00016355', '00023820'], 'count': 3}, {'pair': ['00016901', '00017969'], 'count': 2}, {'pair': ['00016355', '00016901'], 'count': 2}, {'pair': ['00016355', '00017969'], 'count': 3}, {'pair': ['00022791', '3467'], 'count': 1}, {'pair': ['00022791', '00023820'], 'count': 1}, {'pair': ['00017969', '00022791'], 'count': 1}, {'pair': ['00016355', '00022791'], 'count': 1}, {'pair': ['3467', '901'], 'count': 3}, {'pair': ['00016768', '901'], 'count': 2}, {'pair': ['00010056', '901'], 'count': 2}, {'pair': ['00016768', '3467'], 'count': 2}, {'pair': ['00010056', '3467'], 'count': 4}, {'pair': ['00010056', '00016768'], 'count': 2}, {'pair': ['1625', '3601'], 'count': 1}, {'pair': ['1471', '1625'], 'count': 1}, {'pair': ['3467', '3601'], 'count': 1}, {'pair': ['1471', '3467'], 'count': 1}, {'pair': ['1471', '3601'], 'count': 1}, {'pair': ['3467', '4073'], 'count': 1}, {'pair': ['3463', '3467'], 'count': 1}, {'pair': ['3463', '4073'], 'count': 1}, {'pair': ['2699', '3467'], 'count': 2}, {'pair': ['00016201', '3467'], 'count': 3}, {'pair': ['00016201', '2699'], 'count': 3}, {'pair': ['1861', '3467'], 'count': 1}, {'pair': ['1408', '1861'], 'count': 1}, {'pair': ['1861', '3765'], 'count': 1}, {'pair': ['00020986', '3467'], 'count': 6}, {'pair': ['1875', '3467'], 'count': 2}, {'pair': ['1408', '1875'], 'count': 2}, {'pair': ['1875', '3765'], 'count': 2}, {'pair': ['3467', '694'], 'count': 2}, {'pair': ['00011037', '3467'], 'count': 2}, {'pair': ['00011037', '694'], 'count': 2}, {'pair': ['2590', '3467'], 'count': 7}, {'pair': ['00013191', '3467'], 'count': 4}, {'pair': ['00014395', '3467'], 'count': 1}, {'pair': ['00013191', '2590'], 'count': 1}, {'pair': ['00014395', '2590'], 'count': 1}, {'pair': ['2590', '2699'], 'count': 1}, {'pair': ['00016201', '2590'], 'count': 2}, {'pair': ['00013191', '00014395'], 'count': 1}, {'pair': ['00013191', '2699'], 'count': 1}, {'pair': ['00013191', '00016201'], 'count': 2}, {'pair': ['00014395', '2699'], 'count': 1}, {'pair': ['00014395', '00016201'], 'count': 2}, {'pair': ['00024367', '3467'], 'count': 2}, {'pair': ['1645', '3467'], 'count': 2}, {'pair': ['1408', '1645'], 'count': 1}, {'pair': ['1645', '3765'], 'count': 2}, {'pair': ['00021323', '3467'], 'count': 1}, {'pair': ['00015143', '00021323'], 'count': 1}, {'pair': ['00021323', '4204'], 'count': 1}, {'pair': ['00021323', '4209'], 'count': 1}, {'pair': ['3467', '4204'], 'count': 1}, {'pair': ['3467', '4209'], 'count': 4}, {'pair': ['00015143', '4204'], 'count': 1}, {'pair': ['00015143', '4209'], 'count': 1}, {'pair': ['4204', '4209'], 'count': 1}, {'pair': ['00010351', '3467'], 'count': 1}, {'pair': ['00010351', '00010413'], 'count': 1}, {'pair': ['00010351', '00015143'], 'count': 1}, {'pair': ['00010351', '3479'], 'count': 1}, {'pair': ['00010413', '3467'], 'count': 1}, {'pair': ['00010413', '00015143'], 'count': 1}, {'pair': ['00010413', '3479'], 'count': 1}, {'pair': ['1639', '3549'], 'count': 1}, {'pair': ['1638', '1639'], 'count': 1}, {'pair': ['1639', '3467'], 'count': 1}, {'pair': ['1408', '1639'], 'count': 1}, {'pair': ['1639', '3765'], 'count': 1}, {'pair': ['1638', '3549'], 'count': 1}, {'pair': ['3467', '3549'], 'count': 1}, {'pair': ['1408', '3549'], 'count': 1}, {'pair': ['3549', '3765'], 'count': 1}, {'pair': ['1638', '3467'], 'count': 1}, {'pair': ['1408', '1638'], 'count': 1}, {'pair': ['1638', '3765'], 'count': 1}, {'pair': ['00036743', '3467'], 'count': 1}, {'pair': ['00016113', '3467'], 'count': 1}, {'pair': ['00036743', '1408'], 'count': 1}, {'pair': ['00016113', '1408'], 'count': 1}, {'pair': ['00021806', '00036743'], 'count': 1}, {'pair': ['00016113', '00021806'], 'count': 1}, {'pair': ['00016113', '00036743'], 'count': 1}, {'pair': ['00020986', '2590'], 'count': 2}, {'pair': ['0011046', '2590'], 'count': 1}, {'pair': ['2590', '3331'], 'count': 1}, {'pair': ['00015680', '2590'], 'count': 1}, {'pair': ['2590', '3442'], 'count': 1}, {'pair': ['0011046', '3467'], 'count': 1}, {'pair': ['3331', '3467'], 'count': 2}, {'pair': ['00015680', '3467'], 'count': 1}, {'pair': ['3442', '3467'], 'count': 1}, {'pair': ['00020986', '0011046'], 'count': 1}, {'pair': ['00020986', '3331'], 'count': 1}, {'pair': ['00015680', '00020986'], 'count': 1}, {'pair': ['00020986', '3442'], 'count': 1}, {'pair': ['0011046', '3331'], 'count': 1}, {'pair': ['00015680', '0011046'], 'count': 1}, {'pair': ['0011046', '3442'], 'count': 1}, {'pair': ['00015680', '3331'], 'count': 1}, {'pair': ['3331', '3442'], 'count': 1}, {'pair': ['00015680', '3442'], 'count': 1}, {'pair': ['00016568', '3467'], 'count': 1}, {'pair': ['00016569', '3467'], 'count': 1}, {'pair': ['00015181', '3467'], 'count': 1}, {'pair': ['00015179', '3467'], 'count': 1}, {'pair': ['00016568', '00016569'], 'count': 1}, {'pair': ['00015181', '00016568'], 'count': 1}, {'pair': ['00015179', '00016568'], 'count': 1}, {'pair': ['00015181', '00016569'], 'count': 1}, {'pair': ['00015179', '00016569'], 'count': 1}, {'pair': ['00015179', '00015181'], 'count': 1}, {'pair': ['00015143', '901'], 'count': 1}, {'pair': ['2832', '3479'], 'count': 1}, {'pair': ['00015143', '4085'], 'count': 1}, {'pair': ['00015557', '3467'], 'count': 1}, {'pair': ['00015557', '43'], 'count': 1}, {'pair': ['00010056', '00015557'], 'count': 1}, {'pair': ['3467', '43'], 'count': 1}, {'pair': ['00010056', '43'], 'count': 1}, {'pair': ['00016518', '00021391'], 'count': 1}, {'pair': ['00010673', '00021391'], 'count': 1}, {'pair': ['00016540', '00021391'], 'count': 1}, {'pair': ['00021391', '3467'], 'count': 1}, {'pair': ['00015143', '00021391'], 'count': 1}, {'pair': ['00021391', '3479'], 'count': 1}, {'pair': ['00010673', '00016518'], 'count': 1}, {'pair': ['00016518', '00016540'], 'count': 1}, {'pair': ['00016518', '3467'], 'count': 1}, {'pair': ['00015143', '00016518'], 'count': 1}, {'pair': ['00016518', '3479'], 'count': 1}, {'pair': ['00010673', '00016540'], 'count': 1}, {'pair': ['00010673', '3467'], 'count': 2}, {'pair': ['00010673', '00015143'], 'count': 1}, {'pair': ['00010673', '3479'], 'count': 1}, {'pair': ['00016540', '3467'], 'count': 1}, {'pair': ['00015143', '00016540'], 'count': 1}, {'pair': ['00016540', '3479'], 'count': 1}, {'pair': ['00018017', '3467'], 'count': 1}, {'pair': ['00018018', '3467'], 'count': 1}, {'pair': ['00017097', '3467'], 'count': 1}, {'pair': ['2325', '3467'], 'count': 1}, {'pair': ['138', '3467'], 'count': 1}, {'pair': ['00018017', '00018018'], 'count': 1}, {'pair': ['00017097', '00018017'], 'count': 1}, {'pair': ['00018017', '2325'], 'count': 1}, {'pair': ['00018017', '138'], 'count': 1}, {'pair': ['00017097', '00018018'], 'count': 1}, {'pair': ['00018018', '2325'], 'count': 1}, {'pair': ['00018018', '138'], 'count': 1}, {'pair': ['00017097', '2325'], 'count': 1}, {'pair': ['00017097', '138'], 'count': 1}, {'pair': ['138', '2325'], 'count': 1}, {'pair': ['00011615', '3467'], 'count': 1}, {'pair': ['00010187', '3467'], 'count': 1}, {'pair': ['2381', '3467'], 'count': 1}, {'pair': ['00011615', '2590'], 'count': 1}, {'pair': ['00010187', '2590'], 'count': 1}, {'pair': ['2381', '2590'], 'count': 1}, {'pair': ['00011615', '00020986'], 'count': 1}, {'pair': ['00010187', '00020986'], 'count': 1}, {'pair': ['00020986', '2381'], 'count': 1}, {'pair': ['00010187', '00011615'], 'count': 1}, {'pair': ['00011615', '2381'], 'count': 1}, {'pair': ['00010187', '2381'], 'count': 1}, {'pair': ['00021806', '1875'], 'count': 1}, {'pair': ['00017050', '3467'], 'count': 1}, {'pair': ['00017050', '1408'], 'count': 1}, {'pair': ['00017050', '3765'], 'count': 1}, {'pair': ['3467', '4453'], 'count': 1}, {'pair': ['00015896', '3467'], 'count': 1}, {'pair': ['00015143', '00015896'], 'count': 1}, {'pair': ['00015143', '2590'], 'count': 3}, {'pair': ['2590', '3479'], 'count': 1}, {'pair': ['00016832', '3467'], 'count': 1}, {'pair': ['2640', '3467'], 'count': 1}, {'pair': ['00023301', '3467'], 'count': 1}, {'pair': ['00023301', '2640'], 'count': 1}, {'pair': ['00016834', '3467'], 'count': 1}, {'pair': ['00016834', '1408'], 'count': 1}, {'pair': ['1625', '4603'], 'count': 1}, {'pair': ['00016835', '1625'], 'count': 1}, {'pair': ['00016836', '1625'], 'count': 1}, {'pair': ['3467', '4603'], 'count': 1}, {'pair': ['00016835', '3467'], 'count': 1}, {'pair': ['00016836', '3467'], 'count': 1}, {'pair': ['00016835', '4603'], 'count': 1}, {'pair': ['00016836', '4603'], 'count': 1}, {'pair': ['00016835', '00016836'], 'count': 1}, {'pair': ['00014566', '3467'], 'count': 1}, {'pair': ['00014566', '00017138'], 'count': 1}, {'pair': ['00017138', '4209'], 'count': 1}, {'pair': ['00014566', '1408'], 'count': 1}, {'pair': ['1408', '4209'], 'count': 1}, {'pair': ['00014566', '3765'], 'count': 1}, {'pair': ['3765', '4209'], 'count': 1}, {'pair': ['00014566', '4209'], 'count': 1}, {'pair': ['00012294', '3467'], 'count': 1}, {'pair': ['3445', '3467'], 'count': 1}, {'pair': ['00012294', '3445'], 'count': 1}, {'pair': ['00012294', '3331'], 'count': 1}, {'pair': ['3331', '3445'], 'count': 1}, {'pair': ['1625', '3281'], 'count': 1}, {'pair': ['1625', '4209'], 'count': 1}, {'pair': ['3281', '3467'], 'count': 1}, {'pair': ['3281', '4209'], 'count': 1}, {'pair': ['3467', '819'], 'count': 1}, {'pair': ['2734', '3467'], 'count': 1}, {'pair': ['2590', '819'], 'count': 1}, {'pair': ['2590', '2734'], 'count': 1}, {'pair': ['2734', '819'], 'count': 1}, {'pair': ['3042', '3467'], 'count': 1}, {'pair': ['3467', '3523'], 'count': 1}, {'pair': ['3042', '3523'], 'count': 1}, {'pair': ['3467', '4751'], 'count': 1}, {'pair': ['00029275', '3467'], 'count': 3}, {'pair': ['00029274', '3467'], 'count': 2}, {'pair': ['00029275', '4751'], 'count': 2}, {'pair': ['00029274', '4751'], 'count': 1}, {'pair': ['00029274', '00029275'], 'count': 3}, {'pair': ['00013191', '00015143'], 'count': 3}, {'pair': ['2334', '3467'], 'count': 1}, {'pair': ['00010061', '3467'], 'count': 1}, {'pair': ['00010062', '3467'], 'count': 1}, {'pair': ['1180', '3467'], 'count': 1}, {'pair': ['00010035', '3467'], 'count': 1}, {'pair': ['00010061', '2334'], 'count': 1}, {'pair': ['00010062', '2334'], 'count': 1}, {'pair': ['1180', '2334'], 'count': 1}, {'pair': ['00010035', '2334'], 'count': 1}, {'pair': ['00010061', '00010062'], 'count': 1}, {'pair': ['00010061', '1180'], 'count': 1}, {'pair': ['00010035', '00010061'], 'count': 1}, {'pair': ['00010062', '1180'], 'count': 1}, {'pair': ['00010035', '00010062'], 'count': 1}, {'pair': ['00010035', '1180'], 'count': 1}, {'pair': ['3467', '4086'], 'count': 1}, {'pair': ['00010352', '3467'], 'count': 1}, {'pair': ['3467', '4016'], 'count': 1}, {'pair': ['1112', '3467'], 'count': 1}, {'pair': ['00010352', '4086'], 'count': 1}, {'pair': ['3479', '4086'], 'count': 1}, {'pair': ['4016', '4086'], 'count': 1}, {'pair': ['1112', '4086'], 'count': 1}, {'pair': ['00010352', '3479'], 'count': 1}, {'pair': ['00010352', '4016'], 'count': 1}, {'pair': ['00010352', '1112'], 'count': 1}, {'pair': ['3479', '4016'], 'count': 1}, {'pair': ['1112', '3479'], 'count': 1}, {'pair': ['1112', '4016'], 'count': 1}, {'pair': ['00023096', '3467'], 'count': 1}, {'pair': ['00013191', '00023096'], 'count': 1}, {'pair': ['00015143', '00023096'], 'count': 1}, {'pair': ['3230', '3467'], 'count': 1}, {'pair': ['1408', '3230'], 'count': 1}, {'pair': ['3230', '3765'], 'count': 1}, {'pair': ['00010673', '2678'], 'count': 1}, {'pair': ['00010673', '3551'], 'count': 1}, {'pair': ['2678', '3467'], 'count': 1}, {'pair': ['3467', '3551'], 'count': 1}, {'pair': ['2678', '3551'], 'count': 1}, {'pair': ['00016556', '3467'], 'count': 1}, {'pair': ['2839', '3467'], 'count': 2}, {'pair': ['00016556', '2839'], 'count': 1}, {'pair': ['00015156', '3467'], 'count': 1}, {'pair': ['00025457', '2590'], 'count': 1}, {'pair': ['2590', '2839'], 'count': 1}, {'pair': ['00025457', '3467'], 'count': 1}, {'pair': ['00015143', '00025457'], 'count': 1}, {'pair': ['00025457', '2839'], 'count': 1}, {'pair': ['00015143', '2839'], 'count': 1}, {'pair': ['00014883', '3467'], 'count': 1}, {'pair': ['00014883', '2590'], 'count': 1}, {'pair': ['00014883', '00015143'], 'count': 1}, {'pair': ['00013839', '3467'], 'count': 1}, {'pair': ['00012182', '3467'], 'count': 1}, {'pair': ['00013839', '4209'], 'count': 1}, {'pair': ['00012182', '00013839'], 'count': 1}, {'pair': ['00012182', '4209'], 'count': 1}, {'pair': ['3466', '3467'], 'count': 1}, {'pair': ['3458', '3467'], 'count': 1}, {'pair': ['2169', '3467'], 'count': 1}, {'pair': ['00028245', '3467'], 'count': 1}, {'pair': ['3458', '3466'], 'count': 1}, {'pair': ['2169', '3466'], 'count': 1},{'pair': ['00028245', '3466'], 'count': 1}, {'pair': ['2169', '3458'], 'count': 1},{'pair': ['00028245', '3458'], 'count': 1},{'pair': ['00028245', '2169'], 'count': 1}, {'pair': ['00016952', '3467'], 'count': 1}, {'pair': ['00015143', '00016952'], 'count': 1}, {'pair': ['1409', '3467'], 'count': 1}, {'pair': ['1408', '1409'], 'count': 1}, {'pair': ['1409', '3765'], 'count': 1}, {'pair': ['1677', '3467'], 'count': 1}, {'pair': ['2141', '3467'], 'count': 1}, {'pair': ['1677', '2141'], 'count': 1}];
//
//
// var sets = Object.keys(counts).map(ownerId => ({sets: [ownerId], size: counts[ownerId]}));
// const overlaps = overlapsList.map(item => ({
//     sets: item.pair,
//     size: item.count
// }));
//
// var vennData = sets.concat(overlaps);
//
// var chart = venn.VennDiagram().width(600).height(600);
// var div = d3.select("#venn").datum(vennData).call(chart);
//
// div.selectAll("text").style("opacity", 0);
//
// div.selectAll("g")
//     .on("mouseover", function(event, d) {
//         d3.select(".tooltip").remove();
//         const tooltip = d3.select("body").append("div")
//             .attr("class", "tooltip")
//             .style("opacity", 0);
//         tooltip.transition()
//             .duration(200)
//             .style("opacity", .9);
//         var sets = d.sets ? d.sets.join(", ") : '';
//         tooltip.html(d.size + " books<br>" + sets)
//             .style("visibility", "visible")
//             .style("left", (event.pageX + 10) + "px")
//             .style("top", (event.pageY + 20) + "px");
//     })
//     .on("mouseout", function() {
//         d3.select(".tooltip").transition()
//             .duration(0)
//             .style("opacity", 0)
//             .remove();
//     });
//
// setTimeout(() => {
//     var groups = d3.selectAll("#venn .venn-area");
//
//     var positions = [];
//     groups.each(function(d, i) {
//         var group = d3.select(this);
//         var rect = this.getBoundingClientRect();
//
//
//         var cx = rect.left + rect.width / 2;
//         var cy = rect.top + rect.height / 2;
//         var r = Math.min(rect.width, rect.height) / 2;
//
//         var ownerId = group.attr("data-venn-sets");
//
//         positions.push({ ownerId, cx, cy, r });
//     });
//
//     var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(positions));
//
//     var downloadAnchorNode = document.createElement('a');
//     downloadAnchorNode.setAttribute("href", dataStr);
//     downloadAnchorNode.setAttribute("download", "positions.json");
//     document.body.appendChild(downloadAnchorNode); // required for firefox
//     downloadAnchorNode.click();
//     downloadAnchorNode.remove();
// }, 0);
var ownerIdNameMap = {'1625': 'Mocenigo, Andrea', '3467': 'Venezia OSB S. Georgius Maior', '00017138': 'Regno Italico July 1806', '1408': 'Padova OSB S. Anna', '00021806': 'Padova OFM S. Francesco Grande', '3765': 'Padova BU', '00015143': 'Paris BnF', '3479': 'Venezia BN', '4085': 'Padova OSB S. Justina', '3483': 'Venezia OP S. Maria Rosarii', '1904': 'Antonio da Venezia', '4240': "d'Ayala Sebastiano ", '00010583': 'Margaritis, Domenico', '2832': 'Milano BN', '00023820': 'Ciccolus, Flavius', '00016901': 'Anonymous, Italy', '00017969': 'Anonymous', '00016355': 'Roma B. Casanatense', '00022791': 'Anonymous, Italy', '901': 'Piacenza OSB S. Sisto', '00016768': 'Mauritius Bergomensis OSB', '00010056': 'Brescia B. Queriniana', '3601': 'Cazzamini Mussi, Francesco', '1471': 'Milano B. Trivulziana', '4073': 'Stibbs, Edward William', '3463': 'Cambridge UL', '2699': 'Tennant, Enriqueta Augustina ', '00016201': 'Manchester, JRUL', '1861': 'Spinelli, Faustino', '00020986': 'Regno Italico Sept. 1806', '1875': 'M. P.', '694': 'Polirone OSB S. Benedictus', '00011037': 'Mantova B. Teresiana', '2590': 'Pico Master', '00013191': 'Lomenie de Brienne, Etienne Charles', '00014395': 'Spencer, George John', '00024367': 'Chantilly, Musee Conde', '1645': 'Asteo, Girolamo, OFMConv', '00021323': 'Accursius, Bonus', '4204': 'Bradel, Alexis-Pierre', '4209': 'Oxford, Bodleian library', '00010351': 'Anonymous, Italy 1475-1525', '00010413': 'Anonymous, Italy 1501-50', '1639': 'Arrigoni, Gabriele', '3549': 'Murano OSBCam S. Michael', '1638': 'Molin, Marco', '00036743': 'Lutcher Stark, Miriam', '00016113': 'Austin TX HRHRC', '0011046': 'Legatoria Conti Borbone', '3331': 'Rattey, Clifford C.', '00015680': 'Rattey, Hope', '3442': 'London BL', '00016568': 'Wandstad, N.', '00016569': 'Francus de Frankenau, Georgius', '00015181': 'Thott, Otto', '00015179': 'Copenhagen KB', '00015557': 'Ragusa OP S. Domenico', '43': 'Lechi, Luigi', '00021391': 'Anonymous illuminator, Florence', '00016518': "Acquaviva D'Aragona, Andrea Matteo", '00010673': 'Anonymous, Italy', '00016540': 'Miliarius, Leonardus', '00018017': 'Arezzo OSB SS. Flora e Lucilla', '00018018': 'Scarmalli, Gabriele Maria, OSB', '00017097': 'Anonymous, Italy 1875-1925', '2325': 'De Marinis, Tammaro', '138': 'Venezia Cini', '00011615': 'Bruce, John Wyndham', '00010187': 'Monson, William John', '2381': 'Sotheby', '00017050': 'Bologna OSB S. Proculus', '4453': 'Berlin SB', '00015896': 'Paris BU Pharmacie ', '00016832': 'Edinburgh UL', '2640': 'Amati, Giacinto', '00023301': 'Milano B. dei Servi', '00016834': 'Uppsala UL', '4603': 'Herzogliche Bibliothek Gotha', '00016835': 'Valmadonna Collection', '00016836': 'Jerusalem NL', '00014566': 'Thorpe, Thomas', '00012294': 'Finch, Robert', '3445': 'Oxford, Taylor Institution', '3281': 'London, McLeish and Sons', '819': 'Alvarotti, Alfonso', '2734': 'Padova, Seminario vescovile', '3042': "Boston Mass. King's Chapel", '3523': 'Harvard UL', '4751': 'Cesena OSB S. Maria Montis', '00029275': 'Cooke, John, OSA', '00029274': 'Cesena B. Malatestiana', '2334': 'Anonymous', '00010061': 'Fortunio, Giacomo', '00010062': 'Valdobbiadene OFMCap', '1180': 'Treviso, Cappuccini, Locus Capuccinorum, OFMCap', '00010035': 'Treviso, B. Cap', '4086': 'Ballino, Giulio Cesare', '00010352': 'Anonymous, Italy 1725-75', '4016': 'Morelli, Jacopo', '1112': 'Venier, Girolamo', '00023096': 'Marinus, illuminator', '3230': 'Amadi, Francesco', '2678': 'Cicogna, Emmanuele Antonio ', '3551': 'Venezia B. Correr', '00016556': 'Trieste Jesuits', '2839': 'Wien ONB', '00015156': 'Lucca B. Statale', '00025457': 'Bollani family', '00014883': 'Vienna, _sterreichische Nationalbibliothek', '00013839': 'Pinelli, Maffeo', '00012182': 'Elmsley, Peter ', '3466': 'Zilotti, Giovanni Maria', '3458': 'Locarno OFM Madonna del Sasso ', '2169': 'Locarno, Scuola Tecnica', '00028245': 'Locarno OFMCap Madonna del Sasso', '00016952': 'Bordon, Benedetto', '1409': 'Cosma, Giovanni', '1677': "San Paolo d'Argon OSB SS. Paulus et Petrus", '2141': 'Bergamo B. Angelo Mai'};
var positions = [{"ownerId":"43","cx":550.6036071777344,"cy":200.3267364501953,"r":20.132583618164062},{"ownerId":"138","cx":574.8301086425781,"cy":550.630615234375,"r":20.132568359375},{"ownerId":"694","cx":376.59368896484375,"cy":559.4179077148438,"r":28.48565673828125},{"ownerId":"819","cx":311.1153106689453,"cy":418.0979461669922,"r":20.132583618164062},{"ownerId":"901","cx":496.40203857421875,"cy":217.40367126464844,"r":34.87065124511719},{"ownerId":"1112","cx":421.5432434082031,"cy":431.74066162109375,"r":20.132598876953125},{"ownerId":"1180","cx":537.7669677734375,"cy":515.3574523925781,"r":20.132568359375},{"ownerId":"1408","cx":687.3646850585938,"cy":402.99998474121094,"r":170.83062744140625},{"ownerId":"1409","cx":617.3133239746094,"cy":283.49359130859375,"r":20.132568359375},{"ownerId":"1471","cx":523.7789764404297,"cy":475.9422149658203,"r":20.132583618164062},{"ownerId":"1625","cx":551.601318359375,"cy":434.88157653808594,"r":56.94354248046875},{"ownerId":"1638","cx":655.8885498046875,"cy":330.1864929199219,"r":20.132598876953125},{"ownerId":"1639","cx":660.9959716796875,"cy":330.3968048095703,"r":20.132583618164062},{"ownerId":"1645","cx":676.98583984375,"cy":239.8041763305664,"r":28.471763610839844},{"ownerId":"1677","cx":458.93028259277344,"cy":630.2483215332031,"r":20.132583618164062},{"ownerId":"1861","cx":689.5139465332031,"cy":355.7484893798828,"r":20.132583618164062},{"ownerId":"1875","cx":599.533935546875,"cy":335.1907958984375,"r":28.471771240234375},{"ownerId":"1904","cx":545.7216491699219,"cy":303.94598388671875,"r":20.132568359375},{"ownerId":"2141","cx":463.0881652832031,"cy":629.897216796875,"r":20.132568359375},{"ownerId":"2169","cx":534.9323425292969,"cy":555.8721008300781,"r":20.132598876953125},{"ownerId":"2325","cx":578.4065551757812,"cy":550.647216796875,"r":20.132568359375},{"ownerId":"2334","cx":537.7645263671875,"cy":515.3684539794922,"r":20.132568359375},{"ownerId":"2381","cx":332.7145233154297,"cy":442.5899963378906,"r":20.132583618164062},{"ownerId":"2590","cx":355.19207763671875,"cy":406.69805908203125,"r":53.26580810546875},{"ownerId":"2640","cx":508.5459289550781,"cy":594.121826171875,"r":20.132568359375},{"ownerId":"2678","cx":486.4641876220703,"cy":467.30995178222656,"r":20.132583618164062},{"ownerId":"2699","cx":315.14935302734375,"cy":378.89752197265625,"r":28.4766845703125},{"ownerId":"2734","cx":311.1094512939453,"cy":418.0995178222656,"r":20.132583618164062},{"ownerId":"2832","cx":494.61297607421875,"cy":435.62074279785156,"r":34.87066650390625},{"ownerId":"2839","cx":355.0351257324219,"cy":394.8340606689453,"r":28.471771240234375},{"ownerId":"3042","cx":500.5227355957031,"cy":507.6176452636719,"r":20.132598876953125},{"ownerId":"3230","cx":708.59228515625,"cy":278.7409362792969,"r":20.132568359375},{"ownerId":"3281","cx":513.1529388427734,"cy":398.4665222167969,"r":20.132583618164062},{"ownerId":"3331","cx":372.7497100830078,"cy":474.9559020996094,"r":28.485687255859375},{"ownerId":"3442","cx":363.4074249267578,"cy":453.5244445800781,"r":20.132583618164062},{"ownerId":"3445","cx":392.7850036621094,"cy":512.2690277099609,"r":20.132583618164062},{"ownerId":"3458","cx":534.9331359863281,"cy":555.8790893554688,"r":20.132598876953125},{"ownerId":"3463","cx":494.76116943359375,"cy":555.33984375,"r":20.132568359375},{"ownerId":"3466","cx":534.9339599609375,"cy":555.890380859375,"r":20.132568359375},{"ownerId":"3467","cx":561.9168090820312,"cy":403,"r":270.856201171875},{"ownerId":"3479","cx":435.0545654296875,"cy":411.0922546386719,"r":66.772216796875},{"ownerId":"3483","cx":436.6359558105469,"cy":478.4064178466797,"r":40.265167236328125},{"ownerId":"3523","cx":495.74481201171875,"cy":507.5938720703125,"r":20.132568359375},{"ownerId":"3549","cx":657.3545227050781,"cy":328.5584259033203,"r":20.132598876953125},{"ownerId":"3551","cx":486.4641571044922,"cy":469.23875427246094,"r":20.132583618164062},{"ownerId":"3601","cx":523.7789764404297,"cy":475.9422149658203,"r":20.132583618164062},{"ownerId":"3765","cx":654.9465026855469,"cy":327.50911712646484,"r":124.10556030273438},{"ownerId":"4016","cx":421.5432586669922,"cy":432.5349426269531,"r":20.132583618164062},{"ownerId":"4073","cx":494.7615203857422,"cy":555.3406982421875,"r":20.132568359375},{"ownerId":"4085","cx":536.9979858398438,"cy":294.7298583984375,"r":34.87066650390625},{"ownerId":"4086","cx":421.5432586669922,"cy":432.5349426269531,"r":20.132583618164062},{"ownerId":"4204","cx":501.1526794433594,"cy":351.6318817138672,"r":20.132583618164062},{"ownerId":"4209","cx":526.7697296142578,"cy":378.3393859863281,"r":40.265167236328125},{"ownerId":"4240","cx":437.7552490234375,"cy":299.68064880371094,"r":20.132568359375},{"ownerId":"4453","cx":461.9933776855469,"cy":532.7788391113281,"r":20.132598876953125},{"ownerId":"4603","cx":523.7783660888672,"cy":477.55491638183594,"r":20.132583618164062},{"ownerId":"4751","cx":590.2549438476562,"cy":610.8906555175781,"r":20.132598876953125},{"ownerId":"00017138","cx":630.4285888671875,"cy":455.33900451660156,"r":90.03562927246094},{"ownerId":"00021806","cx":561.2218322753906,"cy":361.612548828125,"r":45.017822265625},{"ownerId":"00015143","cx":425.06748962402344,"cy":307.5114288330078,"r":106.53163146972656},{"ownerId":"00010583","cx":513.9515838623047,"cy":438.5049743652344,"r":20.132583618164062},{"ownerId":"00023820","cx":538.3107299804688,"cy":637.9604187011719,"r":34.87066650390625},{"ownerId":"00016901","cx":512.661376953125,"cy":640.8619384765625,"r":28.4815673828125},{"ownerId":"00017969","cx":538.3074951171875,"cy":639.7012939453125,"r":34.87066650390625},{"ownerId":"00016355","cx":538.310302734375,"cy":637.9608154296875,"r":34.87066650390625},{"ownerId":"00022791","cx":567.523681640625,"cy":635.2179260253906,"r":20.132598876953125},{"ownerId":"00016768","cx":497.1716613769531,"cy":196.4462432861328,"r":28.471786499023438},{"ownerId":"00010056","cx":523.4037628173828,"cy":198.72752380371094,"r":40.265167236328125},{"ownerId":"00016201","cx":314.66754150390625,"cy":387.8866271972656,"r":34.8826904296875},{"ownerId":"00020986","cx":340.20648193359375,"cy":470.7228698730469,"r":49.314544677734375},{"ownerId":"00011037","cx":381.3048095703125,"cy":559.5729675292969,"r":28.478729248046875},{"ownerId":"00013191","cx":330.5814971923828,"cy":340.568359375,"r":40.274993896484375},{"ownerId":"00014395","cx":313.6871643066406,"cy":375.82000732421875,"r":20.137481689453125},{"ownerId":"00024367","cx":417.2864990234375,"cy":600.1973571777344,"r":28.471771240234375},{"ownerId":"00021323","cx":501.1526794433594,"cy":351.6319122314453,"r":20.132583618164062},{"ownerId":"00010351","cx":416.7322692871094,"cy":366.7382354736328,"r":20.132583618164062},{"ownerId":"00010413","cx":431.8962097167969,"cy":366.0936279296875,"r":20.146484375},{"ownerId":"00036743","cx":543.5690002441406,"cy":400.3949279785156,"r":20.132598876953125},{"ownerId":"00016113","cx":543.5690002441406,"cy":400.3949279785156,"r":20.132598876953125},{"ownerId":"0011046","cx":363.4074249267578,"cy":453.5244445800781,"r":20.132583618164062},{"ownerId":"00015680","cx":354.96922302246094,"cy":453.52442932128906,"r":20.132583618164062},{"ownerId":"00016568","cx":421.6071472167969,"cy":552.0755004882812,"r":20.2244873046875},{"ownerId":"00016569","cx":426.6848602294922,"cy":551.9820861816406,"r":20.132583618164062},{"ownerId":"00015181","cx":433.27227783203125,"cy":551.9820556640625,"r":20.146484375},{"ownerId":"00015179","cx":426.6834716796875,"cy":551.9833984375,"r":20.132568359375},{"ownerId":"00015557","cx":548.6899719238281,"cy":200.3275909423828,"r":20.132583618164062},{"ownerId":"00021391","cx":458.5538024902344,"cy":388.5397491455078,"r":20.132583618164062},{"ownerId":"00016518","cx":458.5537872314453,"cy":388.53965759277344,"r":20.132583618164062},{"ownerId":"00010673","cx":465.4586181640625,"cy":413.8959045410156,"r":28.491424560546875},{"ownerId":"00016540","cx":458.55377197265625,"cy":388.53968811035156,"r":20.132568359375},{"ownerId":"00018017","cx":574.8319396972656,"cy":550.6246337890625,"r":20.132568359375},{"ownerId":"00018018","cx":574.814208984375,"cy":550.6043701171875,"r":20.132568359375},{"ownerId":"00017097","cx":574.8436584472656,"cy":550.6363830566406,"r":20.132598876953125},{"ownerId":"00011615","cx":332.7154083251953,"cy":442.5907745361328,"r":20.132583618164062},{"ownerId":"00010187","cx":332.71534729003906,"cy":442.5907287597656,"r":20.132583618164062},{"ownerId":"00017050","cx":657.4795837402344,"cy":288.05712890625,"r":20.132568359375},{"ownerId":"00015896","cx":475.0495910644531,"cy":319.48707580566406,"r":20.132583618164062},{"ownerId":"00016832","cx":466.2587585449219,"cy":583.6995544433594,"r":20.132598876953125},{"ownerId":"00023301","cx":495.8308410644531,"cy":594.121826171875,"r":20.132568359375},{"ownerId":"00016834","cx":542.1868286132812,"cy":414.1371765136719,"r":20.142425537109375},{"ownerId":"00016835","cx":523.7783660888672,"cy":475.9522399902344,"r":20.132583618164062},{"ownerId":"00016836","cx":523.7784118652344,"cy":475.94239807128906,"r":20.132583618164062},{"ownerId":"00014566","cx":587.40380859375,"cy":390.55104064941406,"r":20.132568359375},{"ownerId":"00012294","cx":384.5699157714844,"cy":512.2759857177734,"r":20.139541625976562},{"ownerId":"00029275","cx":615.072998046875,"cy":609.8910217285156,"r":34.870635986328125},{"ownerId":"00029274","cx":594.485107421875,"cy":610.5209655761719,"r":28.471771240234375},{"ownerId":"00010061","cx":545.3280334472656,"cy":515.4012298583984,"r":20.142410278320312},{"ownerId":"00010062","cx":537.7861328125,"cy":515.4012145996094,"r":20.132568359375},{"ownerId":"00010035","cx":537.6878967285156,"cy":513.0848083496094,"r":20.132598876953125},{"ownerId":"00010352","cx":421.54327392578125,"cy":432.5349578857422,"r":20.132568359375},{"ownerId":"00023096","cx":344.9971466064453,"cy":331.1061248779297,"r":20.132583618164062},{"ownerId":"00016556","cx":301.4686584472656,"cy":416.32244873046875,"r":20.13604736328125},{"ownerId":"00015156","cx":559.7540283203125,"cy":587.61865234375,"r":20.132568359375},{"ownerId":"00025457","cx":366.27610778808594,"cy":373.7451477050781,"r":20.132583618164062},{"ownerId":"00014883","cx":377.6383972167969,"cy":359.9646301269531,"r":20.142425537109375},{"ownerId":"00013839","cx":513.3846130371094,"cy":387.32423400878906,"r":20.132583618164062},{"ownerId":"00012182","cx":513.384765625,"cy":385.1283721923828,"r":20.132568359375},{"ownerId":"00028245","cx":534.9368896484375,"cy":555.867919921875,"r":20.132568359375},{"ownerId":"00016952","cx":467.37628173828125,"cy":271.52919006347656,"r":20.132568359375}];
positions.sort((a, b) => {
    var areaA = Math.PI * Math.pow(a.r, 2);
    var areaB = Math.PI * Math.pow(b.r, 2);
    return areaB - areaA;
});
var euler_svg = d3.select("#venn").append("svg")
    .attr("width", 900)
    .attr("height", 900);

// 绘制圆
euler_svg.selectAll("circle")
    .data(positions)
    .enter()
    .append("circle")
    .attr("cx", function(d) { return d.cx; })
    .attr("cy", function(d) { return d.cy; })
    .attr("r", function(d) { return d.r; })
    .style("fill", function(d, i) { return d3.schemeCategory10[i % 10]; })
    .style("fill-opacity", 0.3)
    .style("stroke", "none");

euler_svg.selectAll("circle")
    .on("mouseover", function(event, d) {
        d3.select(".tooltip").remove();
        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html("Owner ID: " + d.ownerId + "(" + ownerIdNameMap[d.ownerId]+ ")")
            .style("visibility", "visible")
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY + 20) + "px");
    }).on("mouseout", function() {
        d3.select(".tooltip").transition()
            .duration(0)
            .style("opacity", 0)
            .remove();
    });
