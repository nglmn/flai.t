import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useQuery } from '@tanstack/react-query';
// import data from "../../data.json";
import styled from 'styled-components';
import { getPostsData } from '../../api';

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
    const { data, isLoading, isError } = useQuery({ queryKey: ['posts'], queryFn: () => getPostsData().then(data => data) })
    if (isLoading) {
        return <p>loading...</p>
    }
    if (isError) {
        return <p>Error</p>
    }
    if (!data) {
        return <p>no data</p>
    }

    const renderCustomBarLabelPrediction = ({ x, y, width, value }) => {
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
    const renderCustomBarLabelGrowth = ({ x, y, width, value }) => {
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
                    data={data.posts}
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
                        style={{
                            color: "#ffffff", fontSize: "10px", fontWeight: 700, textTransform: 'uppercase'
                        }}
                    />
                    <YAxis
                        dx={-10}
                        axisLine={false}
                        ticks={[100000, 200000, 300000, 400000, 500000]}
                        tickSize={0}
                        tickLine={false}
                        style={{
                            fill: "#ffffff", fontSize: "10px", fontWeight: 700
                        }}
                        tickFormatter={(value) => {
                            if (value > 999) {
                                return `${value / 1000}k`
                            }
                            return value;
                        }} />
                    <Tooltip
                        cursor={{ fill: "#d0fd0a4d" }}
                    />
                    <Legend iconType='none' />
                    <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="25%" stopColor="#d0fd0a20" stopOpacity={0.8} />
                            <stop offset="75%" stopColor="#d0fd0a7e" stopOpacity={0.8} />
                        </linearGradient>
                    </defs>

                    <Bar
                        dataKey="growth"
                        stackId="a"
                        fill="#C704FE"
                        barSize={69}
                        label={renderCustomBarLabelGrowth}
                        activeFill="#ca8282"
                    />
                    <Bar
                        dataKey="predictionAI"
                        stackId="a"
                        fill="#D1FD0A"
                        label={renderCustomBarLabelPrediction}
                    />
                    <Bar
                        dataKey="future"
                        stackId="a"
                        fill="url(#colorGradient)"
                        stroke="#D1FD0A"
                        strokeWidth={1}
                        strokeDasharray="5 5"
                        barSize={69}
                    />
                </BarChart >
            </ResponsiveContainer >
        </GraphContainer>
    )
}

export default ChartsComponent
