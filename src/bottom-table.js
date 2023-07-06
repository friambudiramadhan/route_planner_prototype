import $ from 'jquery'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'

export default class BottomTable {
    constructor() {
        $('#btn-minimize-route').on('click', (e) => {
            e.preventDefault()
            this.small()
            $('#btn-detailed-route img').attr('src', './assets/icons/up-arrow.svg')

        })

        $('#btn-detailed-route').on('click', (e) => {
            e.preventDefault()

            if ($('#bottom-table').hasClass('medium')) {
                this.small()
                $('#btn-detailed-route img').attr('src', './assets/icons/up-arrow.svg')
            } else {
                this.medium()
                $('#btn-detailed-route img').attr('src', './assets/icons/down-arrow.svg')
            }
        })

        $('#btn-fullscreen-route').on('click', (e) => {
            e.preventDefault()

            if ($('#bottom-table').hasClass('fullscreen')) {
                this.medium()
                $('#btn-fullscreen-route img').attr('src', './assets/icons/fullscreen.svg')
            } else {
                this.fullscreen()
                $('#btn-fullscreen-route img').attr('src', './assets/icons/exit-fullscreen.svg')
                $('#btn-detailed-route img').attr('src', './assets/icons/down-arrow.svg')
            }
        })
    }

    hide() {
        $('#bottom-table').removeClass(['small', 'medium', 'large', 'fullscreen']).addClass('hide')
    }

    small() {
        $('#bottom-table').removeClass(['hide', 'medium', 'large', 'fullscreen']).addClass('small')
        $('#bottom-table').show()

        $('#btn-fullscreen-route img').attr('src', './assets/icons/fullscreen.svg')
    }

    medium() {
        $('#bottom-table').removeClass(['hide', 'small', 'large', 'fullscreen']).addClass('medium')
        $('#bottom-table').show()

        $('#btn-fullscreen-route img').attr('src', './assets/icons/fullscreen.svg')
    }

    large() {
        $('#bottom-table').removeClass(['hide', 'small', 'medium', 'fullscreen']).addClass('large')
        $('#bottom-table').show()
    }

    fullscreen() {
        $('#bottom-table').removeClass(['hide', 'small', 'medium', 'large']).addClass('fullscreen')
        $('#bottom-table').show()
    }

    generateChart(data) {
        const root = am5.Root.new("chart");
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
        const chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "panX",
            wheelY: "zoomX",
            layout: root.verticalLayout
        }));


        // Add legend
        // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
        const legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.p50,
            x: am5.p50
        }))

        const colors = chart.get("colors");

        const yRenderer = am5xy.AxisRendererY.new(root, {});
        yRenderer.grid.template.set("location", 1);
        const yAxis = chart.yAxes.push(
            am5xy.CategoryAxis.new(root, {
                categoryField: "category",
                htmlContainer: "category",
                renderer: yRenderer,
            })
        );
        yAxis.data.setAll([
            { category: "Module #1" },
            { category: "Module #2" },
            { category: "Module #3" },
            { category: "Module #4" },
            { category: "Module #5" }
        ]);

        const xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
                baseInterval: { timeUnit: "minute", count: 1 },
                renderer: am5xy.AxisRendererX.new(root, { strokeOpacity: 0.1 })
            })
        );

        const series = chart.series.push(am5xy.ColumnSeries.new(root, {
            xAxis: xAxis,
            yAxis: yAxis,
            openValueXField: "start",
            valueXField: "end",
            categoryYField: "category",
            sequencedInterpolation: true,
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

        series.data.setAll(data);

        // Add scrollbars
        chart.set("scrollbarX", am5.Scrollbar.new(root, { orientation: "horizontal" }));

        series.appear();
        chart.appear(1000, 100);
    }
}