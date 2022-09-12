import React, { useEffect, useState } from 'react'
import FullWidthLayout from 'hocs/layouts/FullWidthLayout'
import { create_rls } from 'redux/actions/machine-learning'
import { connect } from 'react-redux'
import { setAlert } from "redux/actions/alert";

// Tailwind components
import { Spinner } from 'flowbite-react/lib/esm/components';

// Grafico
import { get_rls } from 'redux/actions/machine-learning';
import RegLinealSimple from 'components/machine-learning/RegLinealSimple';



function RegresionLS({create_rls, setAlert, user, get_rls,

  data}) {
  

  const [loadingML, setLoadingML] = useState(false)


  useEffect(() => {
    setLoadingML(false)
  }, [])
  


  // Boton para crear el grafico  
  const create_graphic=(e)=>{
    e.preventDefault()
    setLoadingML(true)
    get_rls()
  }
  
  
  const [send, setSend] = useState('')
  const [exper, setExper] = useState('')
  const [loading, setLoading] = useState(false)

  const OnSubmit = e =>{
     setLoading(true);
    e.preventDefault()
    create_rls(exper, send, setLoading, setAlert)
    setSend('')
    setExper('')    

  }

    return (
    <FullWidthLayout>

<div className="bg-white dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-gilroy-bold text-gray-900 dark:text-zinc-200 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Salario x Expereciencia
          </p>
          <p className="max-w-xl mt-3 mx-auto text-xl text-gray-500 dark:text-zinc-400">
           Este modelo lineal simple explica como es la dependencia del salario en base a los años de experiencia que tenga el empleado, como se puede observar
           hay una relacion lineal entre las 2 variables.
          </p>
        </div>
      </div>
    </div>



<div class="w-full my-20 sticky rounded-3xl px-6 dark:bg-zinc-900 bg-zinc-200">
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">


        <div className="max-w-lg mx-auto dark:bg-zinc-800 bg-zinc-100 shadow-2xl p-10 rounded-lg">
    
        <div className='m-2 flex justify-center font-bold text-l'><h1>Ingrese Datos al Modelo</h1></div>

    <form onSubmit={e=>OnSubmit(e)}>
        <div className="mb-6">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-300 block mb-2">Experiencia</label>
            <input  
            value={exper}
            onChange={(e)=>{setExper(e.target.value)}}
            className="bg-zinc-50 border dark:bg-zinc-900 border-zinc-300 dark:border-zinc-900 text-zinc-900 dark:text-zinc-300 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
        </div>
        <div className="mb-6">
            <label  className="text-sm font-medium text-zinc-900 block mb-2 dark:text-zinc-300">Ganancia</label>
            <input
            value={send}
            onChange={(e)=>setSend(e.target.value)}
            className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 dark:text-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
        </div>

{
    user ? 
    <a
    type="submit"
    className="cursor-not-allowed text-white dark:bg-zinc-900 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
        {loading ? <div className='mx-1.5'><Spinner aria-label="Default status example"/></div>:
        'Submit'}</a>:
        <a
        className=" cursor-not-allowed text-white dark:bg-zinc-700 bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center"
        >
        Submit</a>
}

    </form>

    <p className="mt-5">He deshabilitado la creación de nuevos datos del modelo para evitar una sobrecarga de infromación 
   <span className='text-green-500 font-bold'> ya que el entrenamiento se hace en tiempo real</span></p>
</div>



        </div>
            <div className=' w-3/4 h-2/4 rounded-sm p-6 sm:w-full sm:h-full xl:w-3/4 xl:h-2/4'>

            {data.rls ?
            <RegLinealSimple
            y_pred={data.rls.salario_predict}
            y_real={data.rls.y_real}
            X={data.rls.experiencia}
            score = {data.rls.score}/>
            
            
            :
              loadingML ?               <div className=''>
              <div className='py-8 dark:bg-zinc-800 self-auto flex item-center justify-center rounded-xl'>
<div className=''>
              <Spinner
    color="success"
    aria-label="Success spinner example"
  /> 
</div>
 <div className='pl-2 text-xl font-gilroy-bold'>Entrenando modelo</div> 
              </div>
              
              </div>
              :
               <div className='flex item-center justify-center'> 
              <button
              onClick={e =>create_graphic(e)}
              className=" text-white dark:bg-zinc-800 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              > 
                Crear Modelo RLS
              </button>
                </div> 
}
</div>
      </div>
    </div>
    </div>





    </FullWidthLayout>
  )
}

const mapStateToProps = state =>({
user : state.user.my_user,
/* y_pred : state.reglineal.rls.salario_predict,
y_real : state.reglineal.rls.y_real,
X : state.reglineal.rls.experiencia, */
data : state.reglineal
})


export default connect(mapStateToProps,{
    create_rls,
    setAlert,
    get_rls
})(RegresionLS)
