"use client"

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { FaCalendar } from 'react-icons/fa';

const CardIndiceMonth = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart<"bar", number[], string> | null>(null);


    useEffect(() => {
        const ctx = chartRef.current?.getContext('2d');
        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        const indiceVaga = [10, 15, 20, 18, 25, 30, 28, 22, 20, 15, 12, 10];
    
        if (ctx) { 
            if (chartInstance.current !== null) {
                chartInstance.current.destroy();
            }
    
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: meses,
                    datasets: [{
                        label: 'Vagas',
                        data: indiceVaga,
                        backgroundColor: 'rgba(54, 162, 235, 0.5)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    
        return () => {
            if (chartInstance.current !== null) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return ( 
        <div className="w-full border border-gray-300 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
                <FaCalendar className="mr-2" />
                <h2 className="text-lg text-gray-600 font-semibold">Índice de Vagas por Mês</h2>
            </div>
            <canvas ref={chartRef}></canvas>
        </div>
     );
}
 
export default CardIndiceMonth;

