import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import RegSVR from "components/machine-learning/RegSVR";


export default function RegresionSVR() {
  return (
    <FullWidthLayout>


<div className="bg-white dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-gilroy-bold text-gray-900 dark:text-zinc-200 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Salario x Posición (SVR)
          </p>
          <p className="max-w-xl mt-3 mx-auto text-lg text-gray-500 dark:text-zinc-400">
            Ayudemos al equipo de recursos humanos a saber cuanto debería ganar un empleado en el puesto que le ofrecemos
          </p>
        </div>
      </div>
    </div>



<div class="w-full my-20 z-50 sticky  rounded-3xl px-6 bg-zinc-900">
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">
            
            <h2 class="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
             Dataset
            </h2>
            <p class="text-white text-m md:text-lg"> 
            Imagina que estamos en un equipo de recursos humanos que trabaja para una gran empresa y estamos a punto
          de contratar a un nuevo empleado para dicha empresa.
          <p class="text-white text-m md:text-lg pt-3"> 
          Este nuevo empleado parece ser un buen fichaje para 
          el trabajo y queremos hacerle una oferta de trabajo
          acorde a su capacidad o al nivel que debe ocupar a este empleado potencial.
</p>
          <p class="text-white text-m md:text-lg pt-3"> 
          Entonces este empleado está pidiendo más o menos ganar en torno de $160.000 para moverse de su empleo
</p>
      

          <p class="text-white text-m md:text-lg pt-3"> 

          Decides llamar a la empresa anterior para verificar
dicha información, la que ha dado el empleado.
</p>
<p class="text-white text-m md:text-lg pt-3"> 
Lamentablemente toda la información que el empleado de recursos humanos logra obtener es esta tabla
que tenemos delante.
</p>


            </p>
          </div>
          <div class="flex items-center space-x-3">
          </div>
        </div>

        <table class="rounded-t-lg m-5 w-3/6 mx-auto bg-gray-200 text-gray-800 dark:bg-zinc-800">
  <tr class="text-left border-b-2 border-gray-300 font-gilroy-bold dark:text-zinc-500 dark: dark:border-zinc-900">
    <th class="px-4 py-3">Position</th>
    <th class="px-4 py-3">Level</th>
    <th class="px-4 py-3">Salary</th>
  </tr>
  
  <tr class="bg-gray-100 border-b border-gray-200 font-gilroy-semibold dark:text-zinc-300 dark:bg-zinc-800 dark:border-zinc-900">
    <td class="px-4 py-3">Business Analyst</td>
    <td class="px-4 py-3">1</td>
    <td class="px-4 py-3">45000</td>

  </tr> 
  <tr class="bg-gray-100 border-b border-gray-200 font-gilroy-semibold dark:text-zinc-300  dark:bg-zinc-800 dark:border-zinc-900">
    <td class="px-4 py-3">Junior Consultant</td>
    <td class="px-4 py-3">2</td>
    <td class="px-4 py-3">50000</td>

  </tr> 
  <tr class="bg-gray-100 border-b border-gray-200 font-gilroy-semibold dark:text-zinc-300  dark:bg-zinc-800 dark:border-zinc-900">
    <td class="px-4 py-3">Senior Consultant</td>
    <td class="px-4 py-3">3</td>
    <td class="px-4 py-3">60000</td>

  </tr> 
  <tr class="bg-gray-100 border-b border-gray-200 font-gilroy-semibold dark:text-zinc-300  dark:bg-zinc-800 dark:border-zinc-900">
    <td class="px-4 py-3">Manager</td>
    <td class="px-4 py-3">4</td>
    <td class="px-4 py-3">80000</td>

  </tr> 
  <tr class="bg-gray-100 border-b border-gray-200 font-gilroy-semibold dark:text-zinc-300  dark:bg-zinc-800 dark:border-zinc-900">
    <td class="px-4 py-3">Country Manager</td>
    <td class="px-4 py-3">5</td>
    <td class="px-4 py-3">110000</td>

  </tr> 
  <tr class="bg-gray-100 border-b border-gray-200 font-gilroy-semibold dark:text-zinc-300  dark:bg-zinc-800 dark:border-zinc-900">
    <td class="px-4 py-3">Region Manager</td>
    <td class="px-4 py-3">6</td>
    <td class="px-4 py-3">150000</td>

  </tr> 
  <tr class="bg-gray-100 border-b border-gray-200 font-gilroy-semibold dark:text-zinc-300  dark:bg-zinc-800 dark:border-zinc-900">
    <td class="px-4 py-3">Partner</td>
    <td class="px-4 py-3">7</td>
    <td class="px-4 py-3">200000</td>
  </tr> 
  
  <tr class="bg-gray-100 border-b border-gray-200 font-gilroy-semibold dark:text-zinc-300  dark:bg-zinc-800 dark:border-zinc-900">
    <td class="px-4 py-3">Senior Partner</td>
    <td class="px-4 py-3">8</td>
    <td class="px-4 py-3">300000</td>
  </tr> 

  <tr class="bg-gray-100 border-b border-gray-200 font-gilroy-semibold dark:text-zinc-300  dark:bg-zinc-800 dark:border-zinc-900">
    <td class="px-4 py-3">C-level</td>
    <td class="px-4 py-3">9</td>
    <td class="px-4 py-3">500000</td>
  </tr> 

  <tr class="bg-gray-100 border-b border-gray-200 font-gilroy-semibold dark:text-zinc-300  dark:bg-zinc-800 dark:border-zinc-900">
    <td class="px-4 py-3">CEO</td>
    <td class="px-4 py-3">10</td>
    <td class="px-4 py-3">1000000</td>
  </tr> 





</table>      </div>
    </div>



    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        
            <div className=' w-3/4 h-2/4 rounded-sm sm:w-full sm:h-full xl:w-2/4 xl:h-2/4'>

        <RegSVR/>

                </div> 


        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          
          <div class="max-w-xl mb-6">
            
            <h2 class="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
             ¿Cuánto deberia ganar el empleado?
            </h2>
            <p class="text-white text-base md:text-lg">
                A diferencia del ejercicio anterior con Regresión Polinómica, aqui usamos un modelo de Support Vector Machine para Regresión,
                este modelo se ajusta mejor a los datos a excepción del CEO que quizas nos despida por decirle que tiene que cobrar menos xd.


            <p class="text-white text-base md:text-lg">

                El modelo tiene un kernel "rbf" y no uno polinómico. Una vez creado el modelo solo falta con saber el puesto en el que va a trabajar y hacer la predicción 
            </p>

            </p>
          </div>
          <div class="flex items-center space-x-3">


          </div>
        </div>
      </div>
    </div>
          </div>


    </FullWidthLayout>
  )
}
