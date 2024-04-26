"use client"

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { FaCalendar } from 'react-icons/fa';

const CardIndiceVagas = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart<"pie", {}[], string> | null>(null);

    useEffect(() => {
        const ctx = chartRef.current?.getContext('2d');
        const vagas = ["TI", "Contabilidade", "Marketing", "Direito"];
        const nVagas = [10, 15, 20, 18];

        if (ctx) { 
            if (chartInstance.current !== null) {
                chartInstance.current.destroy();
            }

            const data = vagas.map((month, index) => ({
                label: month,
                data: nVagas[index]
            }));

            chartInstance.current = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: data.map(item => item.label),
                    datasets: [{
                        label: 'Vagas',
                        data: data.map(item => item.data),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)', // Rosa
                            'rgba(255, 159, 64, 0.5)', // Laranja
                            'rgba(54, 162, 235, 0.5)', // Azul
                            'rgba(255, 0, 0, 0.5)'     // Vermelho
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 0, 0, 1)'
                        ],
                        borderWidth: 1
                    }]
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
        <div className="dashboardGrafico border border-gray-300 rounded-lg p-6 shadow-lg" style={{width: '100%', maxWidth: '505px'}}>
            <div className="flex items-center mb-4">
                <FaCalendar className="mr-2" />
                <h2 className="text-lg text-gray-600 font-semibold">Índice de Vagas por Mês</h2>
            </div>
            <div className='containerGrafico flex items-center justify-center'>
                <canvas ref={chartRef}></canvas>
            </div>
            <div className='mt-6'>
                <h4 className='mb-4'>Vagas adicionadas:</h4>
                <div className='mb-2'>
                    <span className='pl-6 pr-6 bg-red-400'></span>
                    <span className='text-black'>Ti</span>
                </div>
                <div className='mb-2'>
                    <span className='pl-6 pr-6 bg-red-400'></span>
                    <span className='text-black'>Contabilidade</span>
                </div>
                <div className='mb-2'>
                    <span className='pl-6 pr-6 bg-red-400'></span>
                    <span className='text-black'>Marketing</span>
                </div>
                <div>
                    <span className='pl-6 pr-6 bg-red-400'></span>
                    <span className='text-black'>Direito</span>
                </div>
            </div>
        </div>
     );
}
 
export default CardIndiceVagas;



