import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, ResponsiveContainer } from 'recharts';
import data from "../../data.json";
import styled from 'styled-components';

const GraphContainer = styled.div`
    margin-top: 24px;
    position: relative;
`
const DecorateShape = styled.div`
    width: 900px;
    height: 50px;
    left: 50;
    background-color: #000000;
    filter: blur(30px);
    position: absolute;
    z-index: 2;
`
const LabelSign = styled.p`
    position: absolute;
    transform: rotate(-90deg);
    left: -50px;
    top: 150px;
    color: rgb(142, 143, 146);
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
`



const ChartsComponent = () => {
    const renderCustomBarLabelGreen = ({ x, y, width, value }) => {
        if (value === 0) return;
        if (value && value > 999) {
            return (
                <text
                    x={x + width / 2}
                    y={y}
                    textAnchor="middle"
                    style={{ fill: "#D1FD0A", position: "top", fontSize: 10, fontWeight: 700 }}
                    dy={-6}>{`${value / 1000}k`}
                </text>
            );
        }
        return (
            <text
                x={x + width / 2} y={y} fill="#D1FD0A" textAnchor="middle" dy={-6}>
                {`${value}`}
            </text>

        )
    };
    const renderCustomBarLabelPink = ({ x, y, width, value }) => {
        if (value === 0) return;
        if (value && value > 999) {
            return (
                <text
                    x={x + width / 2}
                    y={0.1}
                    textAnchor="middle"
                    style={{ fill: "#ffffff", position: "insideBottom", fontSize: 10, fontWeight: 700 }}
                    dy={255}>{`${value / 1000}k`}
                </text>
            );
        }
        return (
            <text
                x={x + width / 2} y={y} fill="#D1FD0A" textAnchor="middle" dy={-6}>
                {`${value}`}
            </text>

        )
    };

    return (
        <GraphContainer>
            <DecorateShape />
            <LabelSign>Posts, AI Prediction</LabelSign>
            <ResponsiveContainer width={874} height={295}>
                <BarChart
                    width={874}
                    height={295}
                    data={data.post_data.posts}
                    margin={{
                        top: 50,
                        right: 4,
                        left: 30,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid vertical={false} stroke="#ffffff1a" />
                    <XAxis
                        dx={-40}
                        dy={10}
                        dataKey="name"
                        tickSize={0}
                    />
                    <YAxis
                        dx={-10}
                        axisLine={false}
                        ticks={[100000, 200000, 300000, 400000, 500000]}
                        tickSize={0}
                        tickLine={false}
                        style={{ color: "#ffffff" }}
                        tickFormatter={(value) => {
                            if (value > 999) {
                                return `${value / 1000}k`
                            }
                            return value;
                        }} />
                    <Tooltip />
                    <Legend iconType='none' />

                    <Bar
                        dataKey="growth"
                        stackId="a"
                        fill="#C704FE"
                        barSize={69}
                        label={renderCustomBarLabelPink}
                    />
                    <Bar
                        dataKey="predictionAI"
                        stackId="a"
                        fill="#D1FD0A"
                        label={renderCustomBarLabelGreen}
                    />

                </BarChart >
            </ResponsiveContainer >
        </GraphContainer>
    )
}

export default ChartsComponent
