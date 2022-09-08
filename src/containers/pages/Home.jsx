import FullWidthLayout from "hocs/layouts/FullWidthLayout"

function Home() {
  return (
      <FullWidthLayout>
<div className="bg-white dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="dark:text-zinc-300 mt-1 text-4xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
            Inteligencia Artificial con Python
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl sm:text-lg text-gray-500">
              Algoritmos de Machine Learning y Deep Learning con ejemplos.
         </p>
        </div>
      </div>
    </div>
      </FullWidthLayout>
  )
}

export default Home