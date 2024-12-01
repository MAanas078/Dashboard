import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Register all necessary components

const ChartComponent = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            
            chartRef.current.destroy();
        }

        const ctx = document.getElementById('myChart').getContext('2d');
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(item => item.year), 
                datasets: [
                    {
                        label: 'Cases',
                        data: data.map(item => item.cases),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        type: 'category', 
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

       
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [data]);

    return <canvas id="myChart"></canvas>;
};

export default ChartComponent;
