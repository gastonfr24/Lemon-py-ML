import React from 'react'

export default function Subnavbar() {
  return (
 
    <nav className=" border-zinc-200 px-4 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div  className="flex items-center">

            </div>
            <div className="flex items-center lg:order-2">

            </div>
            <div className=" dark:bg-zinc-900 lg:px-10 py-2 rounded-b-xl hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-zinc-400 lg:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-zinc-700">Company</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-zinc-400 lg:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-zinc-700">Marketplace</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-zinc-400 lg:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-zinc-700">Features</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-zinc-400 lg:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-zinc-700">Team</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-zinc-400 lg:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-zinc-700">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  )
}
