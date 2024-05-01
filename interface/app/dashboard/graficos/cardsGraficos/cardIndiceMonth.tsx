"use client"

import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { FaChartLine } from 'react-icons/fa';
import vagasData from '../../../../data/vagas.json';

const CardIndiceMonth = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart<"bar", number[], string> | null>(null);
    const [vagasPorMes, setVagasPorMes] = useState<number[]>(new Array(12).fill(0)); // Array inicializado com 12 meses e valores zero

    useEffect(() => {
        const anoAtual = new Date().getFullYear();
        const vagasAnoAtual = vagasData.filter(vaga => new Date(vaga.data).getFullYear() === anoAtual);

        const vagasPorMesAtualizado = new Array(12).fill(0); 
        vagasAnoAtual.forEach(vaga => {
            const mes = new Date(vaga.data).getMonth(); 
            vagasPorMesAtualizado[mes]++; 
        });

        setVagasPorMes(vagasPorMesAtualizado);
    }, []);

    useEffect(() => {
        const ctx = chartRef.current?.getContext('2d');
        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        if (ctx) {
            if (chartInstance.current !== null) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: meses,
                    datasets: [{
                        label: 'Vagas add por mês',
                        data: vagasPorMes,
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
    }, [vagasPorMes]);

    return (
        <div className="dashboardGrafico border border-gray-300 rounded-lg p-6 shadow-lg" style={{ width: '66.4%' }}>
            <div className="flex items-center mb-4">
                <FaChartLine className="mr-2" color='#000000a3' size={22} />
                <h2 className="text-lg text-gray-500 font-semibold">Índice de Vagas por Mês:</h2>
            </div>
            <canvas ref={chartRef}></canvas>
        </div>
    );
}

export default CardIndiceMonth;
