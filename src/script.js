// import "./style.css"
import BottomTable from "./bottom-table"
import Modal from './modal'
import moment from 'moment'
import $ from 'jquery'

const bottom_table = new BottomTable()
const modal_1 = new Modal('modal-trip')

bottom_table.generateChart([
    {
        category: "Module #1",
        start: new Date(2016, 0, 1).getTime(),
        end: new Date(2016, 0, 14).getTime(),
        route_no: "5",
        task: "Gathering requirements"
    },
    {
        category: "Module #1",
        start: new Date(2016, 0, 16).getTime(),
        end: new Date(2016, 0, 27).getTime(),
        route_no: "1",
        task: "Producing specifications"
    },
    {
        category: "Module #1",
        start: new Date(2016, 1, 5).getTime(),
        end: new Date(2016, 3, 18).getTime(),
        route_no: "2",
        task: "Development"
    },
    {
        category: "Module #1",
        start: new Date(2016, 3, 18).getTime(),
        end: new Date(2016, 3, 30).getTime(),
        route_no: "3",
        task: "Testing and QA"
    },
    {
        category: "Module #2",
        start: new Date(2016, 0, 8).getTime(),
        end: new Date(2016, 0, 10).getTime(),
        route_no: "1",
        task: "Gathering requirements"
    },
    {
        category: "Module #2",
        start: new Date(2016, 0, 12).getTime(),
        end: new Date(2016, 0, 15).getTime(),
        route_no: "1",
        task: "Producing specifications"
    },
    {
        category: "Module #2",
        start: new Date(2016, 0, 16).getTime(),
        end: new Date(2016, 1, 5).getTime(),
        route_no: "1",
        task: "Development"
    },
    {
        category: "Module #2",
        start: new Date(2016, 1, 10).getTime(),
        end: new Date(2016, 1, 18).getTime(),
        route_no: "1",
        task: "Testing and QA"
    },
    {
        category: "Module #3",
        start: new Date(2016, 0, 2).getTime(),
        end: new Date(2016, 0, 8).getTime(),
        route_no: "1",
        task: "Gathering requirements"
    },
    {
        category: "Module #3",
        start: new Date(2016, 0, 8).getTime(),
        end: new Date(2016, 0, 16).getTime(),
        route_no: "1",
        task: "Producing specifications"
    },
    {
        category: "Module #3",
        start: new Date(2016, 0, 19).getTime(),
        end: new Date(2016, 2, 1).getTime(),
        route_no: "1",
        task: "Development"
    },
    {
        category: "Module #3",
        start: new Date(2016, 2, 12).getTime(),
        end: new Date(2016, 3, 5).getTime(),
        route_no: "1",
        task: "Testing and QA"
    },
    {
        category: "Module #4",
        start: new Date(2016, 0, 1).getTime(),
        end: new Date(2016, 0, 19).getTime(),
        route_no: "1",
        task: "Gathering requirements"
    },
    {
        category: "Module #4",
        start: new Date(2016, 0, 19).getTime(),
        end: new Date(2016, 1, 3).getTime(),
        route_no: "1",
        task: "Producing specifications"
    },
    {
        category: "Module #4",
        start: new Date(2016, 2, 20).getTime(),
        end: new Date(2016, 3, 25).getTime(),
        route_no: "1",
        task: "Development"
    },
    {
        category: "Module #4",
        start: new Date(2016, 3, 27).getTime(),
        end: new Date(2016, 4, 15).getTime(),
        route_no: "1",
        task: "Testing and QA"
    },
    {
        category: "Module #5",
        start: new Date(2016, 0, 1).getTime(),
        end: new Date(2016, 0, 12).getTime(),
        route_no: "1",
        task: "Gathering requirements"
    },
    {
        category: "Module #5",
        start: new Date(2016, 0, 12).getTime(),
        end: new Date(2016, 0, 19).getTime(),
        route_no: "1",
        task: "Producing specifications"
    },
    {
        category: "Module #5",
        start: new Date(2016, 0, 19).getTime(),
        end: new Date(2016, 2, 1).getTime(),
        route_no: "1",
        task: "Development"
    },
    {
        category: "<strong>Module #5</strong>",
        start: new Date(2016, 2, 8).getTime(),
        end: new Date(2016, 2, 30).getTime(),
        route_no: "1",
        task: "Testing and QA"
    }
])
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

$('.btn-add').on('click', function (e) {
    e.preventDefault()
    modal_1.show()
})

$('button[data-modal-action="close"]').on('click', function (e) {
    e.preventDefault()
    const modal_parent = $(this).data('refference')
    $(`${modal_parent}`).removeClass('show')
})