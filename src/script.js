import "./style.css"
import BottomTable from "./bottom-table"
import moment from 'moment'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"

const bottom_table = new BottomTable()

const root = am5.Root.new('chart')
root.setThemes([
    am5themes_Animated.new(root)
])
root.dateFormatter.setAll({
    dateFormat: "yyyy-MM-dd",
    dateFields: ["valueX", "openValueX"]
})

const chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: 'panX',
    wheelY: 'zoomX',
    layout: root.verticalLayout
}))

const legend = chart.children.push(am5.Legend.new(root, {
    centerX: am5.p50,
    x: am5.p50
}))

const colors = chart.get('colors')

const yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField: 'category',
    renderer: am5xy.AxisRendererY.new(root, {
        inversed: true
    }),
    tooltip: am5.Tooltip.new(root, {
        themeTags: ['axis'],
        animationDuration: 200
    })
}))

const xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    baseInterval: {
        timeUnit: 'hour',
        count: 1
    },
    renderer: am5xy.AxisRendererX.new(root, {
        stroke: am5.color(0x095256)
    })
}))

const series = chart.series.push(am5xy.ColumnSeries.new(root, {
    xAxis,
    yAxis,
    openValueXField: 'fromDate',
    valueXField: 'toDate',
    categoryYField: 'category',
    sequencedInterpolation: true
}))

series.columns.template.setAll({
    templateField: "columnSettings",
    strokeOpacity: 0,
    tooltipText: "{category}: {openValueX.formatDate('yyyy-MM-dd HH:mm')} - {valueX.formatDate('yyyy-MM-dd HH:mm')}"
})

series.data.processor = am5.DataProcessor.new(root, {
    dateFields: ["fromDate", "toDate"],
    dateFormat: "yyyy-MM-dd HH:mm",
    colorFields: ["columnSettings.fill"]
})

chart.set("scrollbarX", am5.Scrollbar.new(root, {
    orientation: "horizontal"
}))

am5.net.load("https://assets.codepen.io/t-160/gantt_data.json").then(function (result) {
    var data = am5.JSONParser.parse(result.response);
    var categories = [];
    am5.array.each(data, function (item) {
        if (categories.indexOf(item.category) == -1) {
            categories.push(item.category);
        }
    });
    am5.array.each(categories, function (category, index) {
        categories[index] = {
            category
        }
    });

    yAxis.data.setAll(categories);
    series.data.setAll(data);
}).catch(function (result) {
    // Error
    console.log("Error loading " + result.xhr.responseURL);
})

series.appear();
chart.appear(1000, 100);