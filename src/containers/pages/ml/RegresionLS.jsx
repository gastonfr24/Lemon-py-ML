import React, { useState } from 'react'
import FullWidthLayout from 'hocs/layouts/FullWidthLayout'
import { create_rls } from 'redux/actions/machine-learning'
import { connect } from 'react-redux'
import { setAlert } from "redux/actions/alert";

// Tailwind components
import { Spinner } from 'flowbite-react/lib/esm/components';
import user from 'redux/reducers/machine-learning';


function RegresionLS({create_rls, setAlert, user}) {
  
  
  
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
<div className="max-w-lg mx-auto">
    
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
    <button
    type="submit"
    className="text-white dark:bg-zinc-900 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
        {loading ? <div className='mx-1.5'><Spinner aria-label="Default status example"/></div>:
        'Submit'}</button>:
        <a
        className=" cursor-not-allowed text-white dark:bg-zinc-700 bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center"
        >
        Submit</a>
}

    </form>

    <p className="mt-5">This form element is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official <a className="text-blue-600 hover:underline" href="#" target="_blank">Flowbite Documentation</a>.</p>
</div>

<script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
    </FullWidthLayout>
  )
}

const mapStateToProps = state =>({
user : state.user.my_user
})


export default connect(mapStateToProps,{
    create_rls,
    setAlert
})(RegresionLS)
