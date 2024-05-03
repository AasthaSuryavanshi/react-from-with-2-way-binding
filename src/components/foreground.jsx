import React, { useState } from 'react'

function foreground() {

    const[user,setUsername] = useState("")
    const[email,setEmail] = useState("")
    const[active,setActive] = useState("")
    const[gender,setGender] = useState("male")


    const submitHandler = (event) =>{
        event.preventDefault()
        console.log(event.target.username.value)
        console.log(event.target.email.value)
        console.log(event.target.gender.value)
    }

  return ( 
    <>
    <div
     className=' w-[45vw] h-[100vh]  absolute top-0 left-0 backdrop-sepia-0 bg-black/10 blur-sm rounded-3xl'>
     </div>
        <div className='overlay w-full h-full absolute top-0 left-0 z-50'>
            <form onSubmit={submitHandler} className=' border-[1px] cursor-pointer border-white w-[32vw] h-[57vh] text-center rounded-[4vh] text-white font-["gilroy"] font-medium translate-x-[10vh] translate-y-[20vh]'>
                <h1 className=' font-["gilroy"] text-white font-bold text-[5vh] mt-10'>Two-way binding react</h1>

                <input className='rounded-full px-7 bg-purple-100 mt-6 text-purple-900 outline-1 outline-purple-400 '
                type="text"
                onChange={ (e) => (setUsername(e.target.value)) }
                value={user}
                placeholder='Enter username'
                autoComplete='off'
                name='username' />

                <br /><br />

                <input className='rounded-full px-7 bg-purple-100  text-purple-900 outline-1 outline-purple-400'
                type="email" 
                onChange={ (e) => (setEmail(e.target.value)) }
                value={email}
                name='email'
                autoComplete='off'
                placeholder='Enter user email' />
                
                <br /><br />

                <input type="radio"
                onChange={ (e) => setGender(e.target.value) }
                checked= {gender == "male" ? true : false}
                name="gender" 
                value="male" /> Male

                <input type="radio" className='ml-[50px]'
                onChange={ (e) => setGender(e.target.value) }
                checked= {gender == "female" ? true : false}                
                name="gender" 
                value="female" /> Female

                <br /><br />

                <input type="checkbox" className=' accent-purple-400'
                onChange={ (e) => (setActive(e.target.value)) }
                checked = { active ? true : false } /> Terms & Conditions
                
                <br /><br />

                <button type="submit"
                className=' bg-slate-50/80 mt-5 px-[30px] py-1 rounded-full text-black'>Submit</button>

            </form>
        </div>
         </>
  )
}

export default foreground