import {BsCircleFill} from 'react-icons/bs'



export default function ProjectCard({data}) {

  function dificultad(data){
    switch(data){
     case 1:
      return(<><BsCircleFill className='text-green-500 ml-1'/><BsCircleFill className='text-zinc-800 ml-1'/><BsCircleFill className='text-zinc-800 ml-1'/><BsCircleFill className='text-zinc-800 ml-1'/><BsCircleFill className='text-zinc-800 ml-1'/></>)
      case 2:
        return(<><BsCircleFill className='text-green-500 ml-1'/><BsCircleFill className='text-green-500 ml-1'/><BsCircleFill className='text-zinc-800 ml-1'/><BsCircleFill className='text-zinc-800 ml-1'/><BsCircleFill className='text-zinc-800 ml-1'/></>)
        case 3:
          return(<><BsCircleFill className='text-green-500 ml-1'/><BsCircleFill className='text-green-500 ml-1'/><BsCircleFill className='text-green-500 ml-1'/><BsCircleFill className='text-zinc-800 ml-1'/><BsCircleFill className='text-zinc-800 ml-1'/></>)
          case 4:
            return(<><BsCircleFill className='text-green-500 ml-1'/><BsCircleFill className='text-green-500 ml-1'/><BsCircleFill className='text-green-500 ml-1'/><BsCircleFill className='text-green-500 ml-1'/><BsCircleFill className='text-zinc-800 ml-1'/></>)
            case 5:
              return(<><BsCircleFill className='text-green-500 ml-1'/><BsCircleFill className='text-green-500 ml-1'/><BsCircleFill className='text-green-500 ml-1'/><BsCircleFill className='text-green-500 ml-1'/><BsCircleFill className='text-green-500 ml-1'/></>)
                      
      default:
          return(<BsCircleFill className='text-zinc-800 ml-1'/>)
    }
  }
 
  function truncate(str) {
    return str.length > 100 ? str.substring(0, 111) + "..." : str;
}

  return (

       

          <div class="p-4 md:w-1/3 ">
            <div class="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden ">
              <a href={data.url}>
              <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={data.thumbnail} alt="blog "/>
              </a>
              <div class="p-6 dark:bg-zinc-900 bg-zinc-200 dark:border-2 dark:border-zinc-800">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{data.tipo}</h2>
                <h1 class="title-font text-lg font-medium text-gray-600 mb-3 dark:text-gray-200">{data.title}</h1>
                <p class="leading-relaxed mb-3 dark:text-gray-400">{truncate(data.subtitle)}</p>
                <div class="flex items-center flex-wrap ">

                <h1 className=' font-gilroy-semibold'>Dificultad
                      </h1>
                <div className='flex w-full pb-3'>
                      
                {
                    dificultad(data.dificultad)
                }

                  
                </div>
                

                  <a href={data.url}>


{/*                     <button class="bg-gradient-to-r from-yellow-300 to-yellow-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">Ver Proyecto</button> */}

                    <button class="bg-gradient-to-r from-blue-300 to-blue-400 hover:scale-105  shadow-cla-blue px-6 py-1 rounded-lg">Ver Proyecto</button>
{/* 

                  <button class="bg-gradient-to-r from-gray-300 to-gray-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">Ver Proyecto</button>
 */}
                  </a>
                </div>
              </div>
            </div>
          </div>


  )
}

