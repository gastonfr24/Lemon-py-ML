
  import React, { useEffect, useState } from 'react'
  import FullWidthLayout from 'hocs/layouts/FullWidthLayout'
  import { create_rls } from 'redux/actions/machine-learning'
  import { connect } from 'react-redux'
  import { setAlert } from "redux/actions/alert";


  //Icons
  import { MdOutlineSimCardDownload } from "react-icons/md";

  //Chart JS
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Scatter } from 'react-chartjs-2';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


  // Funcion Principal
  function RegLinealSimple({
    y_pred,
    y_real,
    X,
    score
  }) {
    


    const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Salario x Años de Experiencia',
          },
        },
      };


   return( <>


<div class="flex justify-end items-end">
<div className='w-3/6 xl:w-3/6 mt-2 sm:w-2/4 flex justify-end items-end'>
<button className='text-sm bg-zinc-800 hover:bg-green-700 hover:font-semibold hover:text-l  rounded-xl px-4 py-2'>
<div className='flex'>
<MdOutlineSimCardDownload className='mr-1 text-xl'/>
  <h1 className=''>Descargar Dataset</h1>
  </div>
</button>
</div>
</div>
<Scatter className='dark:bg-zinc-300 bg-white mt-3 rounded-m shadow-xl sm:w-full sm:h-full'
  datasetIdKey='id'
  data={{
    labels:X,
    datasets: [

      {
        id: 2,
        label: 'Real',
        data:y_real,
        borderColor: 'transparent',
        pointRadius: 6,
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      },
      {
        type:'line',
        id: 1,
        label: 'Predicción',
        data: y_pred,
        borderColor: 'rgb(255, 99, 132)',
        pointRadius: 0,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }}
  options={options}

/>

<div class="flex ">
<div className='w-1/6 xl:w-1/6 mt-2 sm:w-1/4 '>
  <h1 className='text-sm font-bold bg-green-500 rounded-full flex justify-center item-center dark:text-zinc-900 text-zinc-100 shadow-xl'>
    score = {score}
    </h1>

</div>

<div class="w-1/6">
  <h2 className='text-sm flex justify-center item-center mt-2 dark:text-gray-400'>

  </h2>
  </div>
</div>
</>

    )
  }
  
  const mapStateToProps = state =>({

  })
  
  
  export default connect(mapStateToProps,{
  })(RegLinealSimple)
  