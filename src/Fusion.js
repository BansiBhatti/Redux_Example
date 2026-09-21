import { Chart, ChartSeriesCollection, ChartSeries, ChartTitle, ChartTooltip, ChartMarker, ChartDataLabel } from "@syncfusion/react-charts";
import { PieChart, PieChartTitle, PieChartCenterLabel, PieChartSeriesCollection, PieChartSeries, PieChartTooltip, PieChartLegend, PieChartDataLabel } from '@syncfusion/react-charts';

export const Fusion = () => {
    const data = [
        { x: 2016, y: 4.8 },
        { x: 2017, y: 5.2 },
        { x: 2018, y: 6.2 },
        { x: 2019, y: 7.8 },
        { x: 2020, y: 9.3 },
        { x: 2021, y: 14.3 },
        { x: 2022, y: 15.6 },
        { x: 2023, y: 16.0 },
        { x: 2024, y: 17.0 }
    ];

    const PieChartData = [
        { x: "Chrome", y: 65 },
        { x: "Firefox", y: 12 },
        { x: "Edge", y: 10 },
        { x: "Safari", y: 8 },
        { x: "Others", y: 5 }
    ];


    return (
        <>
            <Chart>
                <ChartTitle text="Sales Analysis" />
                <ChartTooltip enable={true} />
                <ChartSeriesCollection>
                    <ChartSeries dataSource={data} xField="x" yField="y" type="Spline">
                        <ChartMarker visible={false}>
                            <ChartDataLabel visible={true}></ChartDataLabel>
                        </ChartMarker>
                    </ChartSeries>
                </ChartSeriesCollection>
            </Chart>
            <br /><br />

            <PieChart>
                <PieChartTitle text="Browser Market Share" />
                <PieChartSeriesCollection>
                    <PieChartSeries dataSource={PieChartData} xField="x" yField="y">
                        <PieChartDataLabel visible={true} position="Outside" />
                    </PieChartSeries>
                </PieChartSeriesCollection>
                <PieChartLegend position="Bottom" />
                <PieChartTooltip enable={true} />
            </PieChart>
            <br /><br />

            <PieChart>
                <PieChartCenterLabel label={[{ text: 'Browser Market Share' }]} />
                <PieChartSeriesCollection>
                    <PieChartSeries dataSource={PieChartData} innerRadius="65%" xField="x" yField="y">
                        <PieChartDataLabel visible={true} position="Outside" />
                    </PieChartSeries>
                </PieChartSeriesCollection>
                <PieChartLegend position="Bottom"  shape="Rectangle" toggleVisibility={true }/>
                {/* eslint-disable-next-line no-template-curly-in-string */}
                <PieChartTooltip enable={true} format='<b>${point.x}</b><br/>Browser Market Share: <b>${point.y}%</b>' />
            </PieChart>

        </>
    )
}