import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Scatter } from 'react-chartjs-2';


  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  export const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  export const data = {
      labels:[1,2,3,4,5,6,7,8,9,10],
      datasets: [
        {
          label: 'Datos Reales',
          data: [45000,
            50000,
            60000,
            80000,
            110000,
            150000,
            200000,
            300000,
            500000,
            1000000],
            borderColor: 'transparent',
            pointRadius: 6,
            backgroundColor: 'rgba(53, 162, 235, 0.5)'
        },
        {
        type:'line',
        label: 'Predicción',
        data:[
            118727,
            44151.5,
            8439.39,
            11590.9,
            53606.1,
            134485,
            254227,
            412833,
            610303,
            846636
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ],
    };


export default function RegPoli() {
  return (
     <Scatter options={options} data={data}  className='dark:bg-zinc-300 bg-white mt-3 rounded-lg shadow-xl sm:w-full sm:h-full'/>

  )
}
