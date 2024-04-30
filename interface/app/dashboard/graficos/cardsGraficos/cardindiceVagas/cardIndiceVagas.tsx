"use client"

import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { FaCalendar } from 'react-icons/fa';
import VagasRecentes from './cardsTopVagas';
import vagasData from '../../../../../data/vagas.json'

const CardIndiceVagas = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart<"pie", {}[], string> | null>(null);
    const [searchVagas, setsearchVagas] = useState<any[]>([vagasData])

    const countVagas: { [key: string]: number } = {};

    vagasData.forEach(vaga => {
        if (vaga.vaga) {
            const pegaVaga = vaga.vaga.split(' - ').map(item => item.trim()); 
            const nomeVaga = pegaVaga[pegaVaga.length - 1].split(' ')[0]; 
    
            if (countVagas[nomeVaga]) {
                countVagas[nomeVaga] += 1; 
            } else {
                countVagas[nomeVaga] = 1;
            }
        }
    });

    const ordenaVaga = Object.entries(countVagas).sort((a, b) => b[1] - a[1]);

    const topVagas = ordenaVaga.slice(0, 4);

    const vagas = topVagas.map(([nomeVaga]) => nomeVaga);
    const nVagas = topVagas.map(([, count]) => count);
    

    useEffect(() => {
        const ctx = chartRef.current?.getContext('2d');

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
                            '#ec407a', // Rosa
                            '#66bb6a', // Laranja
                            '#49a3f1', // Azul
                            '#d6f33f'     // Vermelho
                        ],
                        borderColor: [
                            '#ec407a', // Rosa
                            '#66bb6a', // Laranja
                            '#49a3f1', // Azul
                            '#d6f33f'     // Vermelho
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
                <FaCalendar className="mr-2 text-black-500" size={21} color='#000000a3'/>
                <h2 className="text-lg text-gray-500 font-semibold">Qtds De Vagas:</h2>
            </div>
            <div className='containerGrafico flex items-center justify-center'>
                <canvas ref={chartRef}></canvas>
            </div>
            <VagasRecentes nomeVaga={vagas}/>
        </div>
     );
}
 
export default CardIndiceVagas;



