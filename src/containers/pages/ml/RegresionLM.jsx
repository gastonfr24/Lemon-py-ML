import FullWidthLayout from 'hocs/layouts/FullWidthLayout'
import { connect } from 'react-redux'

import { useState } from 'react'
import { create_prediction } from 'redux/actions/machine-learning'
import axios from 'axios'
import { toast } from "react-toastify"

import { Spinner } from 'flowbite-react'

function RegresionLM() {


    const [ganancia, setGanancia] = useState(0)
    // estado inicial del boton de carga
    const [loading, setLoading] = useState(false)

    // Estado inicial del form a enviar
    const [formData, setFormData] = useState({
        'RyD':'',
        'Administration':'',
        'Marketing':'',
        'State':'',

      })


    const {RyD ,Administration ,Marketing ,State } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        setLoading(true);
        e.preventDefault();

        const config = {
            header: {
              'Content-Type': 'application/json'
            }
          }
   
        const formData = new FormData()
        formData.append('RyD', RyD)
        formData.append('Administration', Administration)
        formData.append('Marketing', Marketing)
        formData.append('State', State)

        const fetchData = async () =>{
            /* funcion de post */
            axios.post(`${process.env.REACT_APP_API_URL}/api/ml/multiple-regresion`, formData, config)
            .then(res =>{
              setLoading(false);
              toast.success('Mensaje enviado correctamente, lo contestate lo antes posible');

              setGanancia(res.data.prediction.toFixed(2))


            }).catch(err => {
              setLoading(false);
              toast.error('Error al enviar el mensaje');
  
              }
            )
          }
          fetchData()
        }
        
        


  return (
    <FullWidthLayout>


<div className="bg-white dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-gilroy-bold text-gray-900 dark:text-zinc-200 sm:text-5xl sm:tracking-tight lg:text-6xl">
          50 Startups
          </p>
          <p className="max-w-xl mt-3 mx-auto text-xl text-gray-500 dark:text-zinc-400">
          Vamos a investigar 50 Startups, las mismas contienen datos financieros y geográficos. Este es un reto típicos de las empresas Venture Capital, las empresas que se dedican a los préstamos

o, por ejemplo, a financiar diferentes tipos de compañías.

          </p>
        </div>
      </div>
    </div>



    <div class="w-full my-20 z-50 sticky  rounded-3xl px-6 bg-zinc-900">
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">
            
            <h2 class="font-sans text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl sm:leading-none max-w-lg mb-6">
             Dataset
            </h2>
            <p class="text-white text-base md:text-lg">A la hora de dar dinero a una startup o a una compañía tenemos que mirar una serie de datos.
            <p class="text-white text-base md:text-lg py-3">En este caso hay cinco columnas
           3 de ellas son de gastos de la empresa, una de la ubicación geográfica y la ultima es del <span className='text-green-400'>beneficio del año fiscal</span></p>
           <p class="text-white text-base md:text-lg">Ahora hay que ser capaz de predecir qué beneficio nos

va a dar una empresa en función de dónde está ubicada y de los gastos en esas tres secciones que hemos

nombrado.</p>
            </p>
          </div>

        </div>

{/* tabla de datos */}

<table class="rounded-t-lg m-5 w-3/6 mx-auto bg-gray-200 text-gray-800 dark:bg-zinc-800">
  <tr class="text-left border-b-2 border-gray-300 font-gilroy-bold dark:text-zinc-500 dark: dark:border-zinc-900">
    <th class="px-4 py-3">R&D Spend</th>
    <th class="px-4 py-3">Administration</th>
    <th class="px-4 py-3">Marketing</th>
    <th class="px-4 py-3">State</th>
    <th class="px-4 py-3">Profit</th>

  </tr>
  
  <tr class="bg-gray-100 border-b border-gray-200 font-gilroy-semibold dark:text-zinc-300 dark:bg-zinc-800 dark:border-zinc-900">
    <td class="px-4 py-3">165349</td>
    <td class="px-4 py-3">136897</td>
    <td class="px-4 py-3">471784</td>
    <td class="px-4 py-3">New York</td>
    <td class="px-4 py-3">192261</td>
  </tr> 
  <tr class="bg-gray-100 border-b border-gray-200 font-gilroy-semibold dark:text-zinc-300  dark:bg-zinc-800 dark:border-zinc-900">
    <td class="px-4 py-3">162597</td>
    <td class="px-4 py-3">151377</td>
    <td class="px-4 py-3">443898</td>
    <td class="px-4 py-3">California</td>
    <td class="px-4 py-3">191792</td>
  </tr> 
  <tr class="bg-gray-100 border-b border-gray-200 font-gilroy-semibold dark:text-zinc-300  dark:bg-zinc-800 dark:border-zinc-900">
    <td class="px-4 py-3">153441</td>
    <td class="px-4 py-3">101145</td>
    <td class="px-4 py-3">407934</td>
    <td class="px-4 py-3">Florida</td>
    <td class="px-4 py-3">191050</td>
  </tr> 
  <tr class="bg-gray-100 border-b border-gray-200 text-bold dark:text-zinc-300  dark:bg-zinc-800 dark:border-zinc-900">
    <td class="px-4 py-3">...</td>
    <td class="px-4 py-3">...</td>
    <td class="px-4 py-3">...</td>
    <td class="px-4 py-3">...</td>
    <td class="px-4 py-3">...</td>
  </tr> 



</table>
      </div>
    </div>



    
        <div className="text-center">
          <p className="mt-1 text-4xl font-gilroy-bold text-gray-900 dark:text-zinc-200 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Realice una Predicción
          </p>
        </div>
  



    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          


    
        <div className="max-w-lg mx-auto dark:bg-zinc-800 bg-zinc-100 shadow-2xl p-10 rounded-lg">
    
        <div className='m-2 flex justify-center font-bold text-l'><h1>Ingrese Datos al Modelo</h1></div>

    <form onSubmit={e => onSubmit(e)} >
        <div className="mb-6">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-300 block mb-2">Gastos R&D(Investigación y Desarrollo)</label>
            <input  
            name='RyD'
            value={RyD}
            onChange={e=>onChange(e)}

            className="bg-zinc-50 border dark:bg-zinc-900 border-zinc-300 dark:border-zinc-900 text-zinc-900 dark:text-zinc-300 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
        </div>
        <div className="mb-6">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-300 block mb-2">Gastos Administrativos</label>
            <input  
            name='Administration'
            onChange={e=>onChange(e)}
            value={Administration}

            className="bg-zinc-50 border dark:bg-zinc-900 border-zinc-300 dark:border-zinc-900 text-zinc-900 dark:text-zinc-300 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
        </div>

        <div className="mb-6">
            <label  className="text-sm font-medium text-zinc-900 block mb-2 dark:text-zinc-300">Gastos de Marketing</label>
            <input
            name='Marketing'
            onChange={e=>onChange(e)}
            value={Marketing}

            className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 dark:text-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
        </div>
        <div className='mb-6'>
        <label  className="text-sm font-medium text-zinc-900 block mb-2 dark:text-zinc-300">Estado</label>
                    <select
                        id="estado"
                        name="State"
                        onChange={e=>onChange(e)}
                        value={State}
                        required
                        className="dark:placeholder-zinc-800 dark:bg-zinc-900 dark:border-zinc-700 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="" className="dark:text-zinc-700" disabled selected>Elija un Estado</option>
                        <option value="New York">New York</option>
                        <option value="Florida">Florida</option>
                        <option value="California">California</option>
                    </select>
                </div>

    <button
    type="submit"
    className=" text-white dark:bg-zinc-900 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
 >
        {
            loading ? 
            <>
              <Spinner
    color="success"
    aria-label="Success spinner example"
  />
            </>:<>Submit</>
        }
        
        </button>


    </form>

    <p className="mt-5">El entrenamiento del modelo es realizado con LinealRegression de Scikit-learn, con un total de 50 datos
   <a href='/' className='text-green-500 font-bold hover:'> puedes descargar el dataset aquí</a></p>
</div>

        </div>
       
       
        <div
            id="plan"
            class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl dark:bg-zinc-800"
          >
            <div id="title" class="w-full py-14 border-b border-zinc-900">
              <h2 class="font-bold text-4xl text-white">Su Ganancia</h2>
              <h3 class="font-normal text-green-500 text-4xl mt-2">
                ${ganancia}
              </h3>
            </div>
            <div id="content" class="py-12">
              <div id="icon" class="mt-5 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 mx-auto fill-stroke text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <p class="text-gray-200 font-gilroy-bold text-4xl pt-2">
                  Su invesión
                </p>
              </div>
              <div id="contain" class="leading-8 mb-16 mt-2 text-xl font-light">
                <ul>
                  <li>$ {RyD ? <>{RyD}</>: <span className=''>0</span>} gastado en R&D</li>
                  <li> $ {Administration ? <>{Administration}</>: <span className=''>0</span>} gastado en Administración</li>
                  <li>$ {Marketing ? <>{Marketing}</>: <span className=''>0</span>} gastado en Marketing</li>
                  <li>Ubicación: {State ? <>{State}</>: <span className='text-orange-500 font-bold italic'>Sin Elegir</span>}</li>
                </ul>

              </div>
            </div>
          </div>
       
       
       
 </div>
    </div>


    <div class="sm:px-4 py-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-3xl shadow-sm lg:flex-row sm:mx-auto">
        <div class="relative lg:w-1/2">

        </div>

      </div>
    </div>
  
          </div>
    </FullWidthLayout>
  )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

})(RegresionLM)
