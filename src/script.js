import "./style.css"
import BottomTable from "./bottom-table"
import moment from 'moment'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"

const bottom_table = new BottomTable()

var root = am5.Root.new("chart");
root.dateFormatter.setAll({
    dateFormat: "yyyy-MM-dd",
    dateFields: ["valueX", "openValueX"]
});


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
//root.setThemes([
//  am5themes_Animated.new(root)
//]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX",
    layout: root.verticalLayout
}));


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
}))

var colors = chart.get("colors");

// Data
var data = [{
    category: "Module #1",
    start: new Date(2016, 0, 1).getTime(),
    end: new Date(2016, 0, 14).getTime(),
    //columnSettings: {
    //  stroke: am5.Color.brighten(colors.getIndex(0), 0),
    //fill: am5.color("#fff"),
    //stroke: am5.color(0x76b041)
    //},
    route_no: "5",
    task: "Gathering requirements"
}, {
    category: "Module #1",
    start: new Date(2016, 0, 16).getTime(),
    end: new Date(2016, 0, 27).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(0), 0.4)
    //},
    route_no: "1",
    task: "Producing specifications"
}, {
    category: "Module #1",
    start: new Date(2016, 1, 5).getTime(),
    end: new Date(2016, 3, 18).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(0), 0.8)
    //},
    route_no: "2",
    task: "Development"
}, {
    category: "Module #1",
    start: new Date(2016, 3, 18).getTime(),
    end: new Date(2016, 3, 30).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(0), 1.2)
    //},
    route_no: "3",
    task: "Testing and QA"
}, {
    category: "Module #2",
    start: new Date(2016, 0, 8).getTime(),
    end: new Date(2016, 0, 10).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(2), 0)
    //},
    route_no: "1",
    task: "Gathering requirements"
}, {
    category: "Module #2",
    start: new Date(2016, 0, 12).getTime(),
    end: new Date(2016, 0, 15).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(2), 0.4)
    //},
    route_no: "1",
    task: "Producing specifications"
}, {
    category: "Module #2",
    start: new Date(2016, 0, 16).getTime(),
    end: new Date(2016, 1, 5).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(2), 0.8)
    //},
    route_no: "1",
    task: "Development"
}, {
    category: "Module #2",
    start: new Date(2016, 1, 10).getTime(),
    end: new Date(2016, 1, 18).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(2), 1.2)
    //},
    route_no: "1",
    task: "Testing and QA"
}, {
    category: "Module #3",
    start: new Date(2016, 0, 2).getTime(),
    end: new Date(2016, 0, 8).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(4), 0)
    //},
    route_no: "1",
    task: "Gathering requirements"
}, {
    category: "Module #3",
    start: new Date(2016, 0, 8).getTime(),
    end: new Date(2016, 0, 16).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(4), 0.4)
    //},
    route_no: "1",
    task: "Producing specifications"
}, {
    category: "Module #3",
    start: new Date(2016, 0, 19).getTime(),
    end: new Date(2016, 2, 1).getTime(),
    //columnSettings: {
    // fill: am5.Color.brighten(colors.getIndex(4), 0.8)
    //},
    route_no: "1",
    task: "Development"
}, {
    category: "Module #3",
    start: new Date(2016, 2, 12).getTime(),
    end: new Date(2016, 3, 5).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(4), 1.2)
    //},
    route_no: "1",
    task: "Testing and QA"
}, {
    category: "Module #4",
    start: new Date(2016, 0, 1).getTime(),
    end: new Date(2016, 0, 19).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(6), 0)
    //},
    route_no: "1",
    task: "Gathering requirements"
}, {
    category: "Module #4",
    start: new Date(2016, 0, 19).getTime(),
    end: new Date(2016, 1, 3).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(6), 0.4)
    //},
    route_no: "1",
    task: "Producing specifications"
}, {
    category: "Module #4",
    start: new Date(2016, 2, 20).getTime(),
    end: new Date(2016, 3, 25).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(6), 0.8)
    //},
    route_no: "1",
    task: "Development"
}, {
    category: "Module #4",
    start: new Date(2016, 3, 27).getTime(),
    end: new Date(2016, 4, 15).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(6), 1.2)
    //},
    route_no: "1",
    task: "Testing and QA"
}, {
    category: "Module #5",
    start: new Date(2016, 0, 1).getTime(),
    end: new Date(2016, 0, 12).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(8), 0)
    //},
    route_no: "1",
    task: "Gathering requirements"
}, {
    category: "Module #5",
    start: new Date(2016, 0, 12).getTime(),
    end: new Date(2016, 0, 19).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(8), 0.4)
    //},
    route_no: "1",
    task: "Producing specifications"
}, {
    category: "Module #5",
    start: new Date(2016, 0, 19).getTime(),
    end: new Date(2016, 2, 1).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(8), 0.8)
    //},
    route_no: "1",
    task: "Development"
}, {
    category: "<strong>Module #5</strong>",
    start: new Date(2016, 2, 8).getTime(),
    end: new Date(2016, 2, 30).getTime(),
    //columnSettings: {
    //  fill: am5.Color.brighten(colors.getIndex(8), 1.2)
    //},
    route_no: "1",
    task: "Testing and QA"
}];


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/

var yRenderer = am5xy.AxisRendererY.new(root, {});
yRenderer.grid.template.set("location", 1);
//yRenderer.labels.template.set("text", "<strong>test</strong>");

var yAxis = chart.yAxes.push(
    am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        htmlContainer: "category",
        renderer: yRenderer,
        //tooltip: am5.Tooltip.new(root, {})
    })
);


//yAxis.get("renderer").labels.template.adapter.add("text", function(text, target) {
//  return text.replace(/ \(.*/, "");
//});

//yAxis.get("renderer").labels.template.adapters.add("html", function(html, target) {
//  return "<div style=\"text-align: center; font-weight: bold;\">{value.formatDate('d MMM')}</div><div style=\"text-align: center;\">{value.formatDate('EEE')}</div>";
//});

yAxis.data.setAll([
    { category: "Module #1" },
    { category: "Module #2" },
    { category: "Module #3" },
    { category: "Module #4" },
    { category: "Module #5" }
]);

var xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "minute", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, { strokeOpacity: 0.1 })
    })
);


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    xAxis: xAxis,
    yAxis: yAxis,
    openValueXField: "start",
    valueXField: "end",
    categoryYField: "category",
    sequencedInterpolation: true,
    //fill: am5.color(0x095256),
    //stroke: am5.color("#fff")
}));

series.columns.template.setAll({
    templateField: "columnSettings",
    strokeOpacity: 1,
    strokeWidth: 2,
    cornerRadiusTL: 7,
    cornerRadiusTR: 7,
    cornerRadiusBL: 7,
    cornerRadiusBR: 7,
    fillOpacity: 0.5,
    fill: am5.color("#fff"),
    stroke: am5.color("#92BF6F"),
    tooltipText: "{task}:\n[bold]{openValueX}[/] - [bold]{valueX}[/]"
});

// Add label bullet
series.bullets.push(function () {
    return am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
            text: "{route_no}",
            fill: am5.color("#000"),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true
        })
    });
});
//series.labels.template.text = "test";

series.data.setAll(data);

// Add scrollbars
chart.set("scrollbarX", am5.Scrollbar.new(root, { orientation: "horizontal" }));

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear();
chart.appear(1000, 100);
// const root = am5.Root.new('chart')
// root.setThemes([
//     am5themes_Animated.new(root)
// ])
// root.dateFormatter.setAll({
//     dateFormat: "yyyy-MM-dd",
//     dateFields: ["valueX", "openValueX"]
// })

// const chart = root.container.children.push(am5xy.XYChart.new(root, {
//     panX: false,
//     panY: false,
//     wheelX: 'panX',
//     wheelY: 'zoomX',
//     layout: root.verticalLayout
// }))

// const legend = chart.children.push(am5.Legend.new(root, {
//     centerX: am5.p50,
//     x: am5.p50
// }))

// const colors = chart.get('colors')

// const yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
//     categoryField: 'category',
//     renderer: am5xy.AxisRendererY.new(root, {
//         inversed: true
//     }),
//     tooltip: am5.Tooltip.new(root, {
//         themeTags: ['axis'],
//         animationDuration: 200
//     })
// }))

// const xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
//     baseInterval: {
//         timeUnit: 'hour',
//         count: 1
//     },
//     renderer: am5xy.AxisRendererX.new(root, {
//         stroke: am5.color(0x095256)
//     })
// }))

// const series = chart.series.push(am5xy.ColumnSeries.new(root, {
//     xAxis,
//     yAxis,
//     openValueXField: 'fromDate',
//     valueXField: 'toDate',
//     categoryYField: 'category',
//     sequencedInterpolation: true
// }))

// series.columns.template.setAll({
//     templateField: "columnSettings",
//     strokeOpacity: 0,
//     tooltipText: "{category}: {openValueX.formatDate('yyyy-MM-dd HH:mm')} - {valueX.formatDate('yyyy-MM-dd HH:mm')}"
// })

// series.data.processor = am5.DataProcessor.new(root, {
//     dateFields: ["fromDate", "toDate"],
//     dateFormat: "yyyy-MM-dd HH:mm",
//     colorFields: ["columnSettings.fill"]
// })

// chart.set("scrollbarX", am5.Scrollbar.new(root, {
//     orientation: "horizontal"
// }))

// am5.net.load("https://assets.codepen.io/t-160/gantt_data.json").then(function (result) {
//     var data = am5.JSONParser.parse(result.response);
//     var categories = [];
//     am5.array.each(data, function (item) {
//         if (categories.indexOf(item.category) == -1) {
//             categories.push(item.category);
//         }
//     });
//     am5.array.each(categories, function (category, index) {
//         categories[index] = {
//             category
//         }
//     });

//     yAxis.data.setAll(categories);
//     series.data.setAll(data);
// }).catch(function (result) {
//     // Error
//     console.log("Error loading " + result.xhr.responseURL);
// })

// series.appear();
// chart.appear(1000, 100);