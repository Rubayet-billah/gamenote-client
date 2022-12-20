import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'May',
        likes: 3600,
        views: 2400,
    },
    {
        name: 'June',
        likes: 5200,
        views: 4700,
    },
    {
        name: 'July',
        likes: 4700,
        views: 6800,
    },
    {
        name: 'August',
        likes: 5400,
        views: 3900,
    },
    {
        name: 'September',
        likes: 5500,
        views: 4800,
    },
    {
        name: 'October',
        likes: 4500,
        views: 3800,
    },
    {
        name: 'November',
        likes: 4700,
        views: 4300,
    },
];


const Chart = () => {



    return (
        <div style={{ width: "100%", height: 300 }}>

            <ResponsiveContainer
            // className='my-5'
            // width='100%'
            // height={300}
            >
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="views" stroke="#d930bd" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="likes" stroke="#2318f0" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;