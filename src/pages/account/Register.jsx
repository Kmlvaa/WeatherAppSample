import React from 'react'
import { Link } from 'react-router-dom'
import login from '../../assets/loginUser.png'

export default function Register() {

    return (
        <div className='w-80 h-auto bg-white m-auto text-center my-20 rounded-lg shadow-[-1px_5px_8px_0px_rgba(0,_0,_0,_0.1)] relative'>
            <img alt='Login image' src={login} className='absolute w-28 h-28 -top-10 -left-10 rotate-12' />
            <form action="post" className='p-4 flex flex-col gap-4 items-start'>
                <div className='m-auto'>
                    <p className='text-rose-800 font-bold text-3xl'>Register</p>
                </div>
                <div className='text-start flex flex-col w-full'>
                    <label for="name" className='text-rose-800'>Name</label>
                    <input placeholder='Enter your name' className='rounded-md p-2 border border-rose-800' />
                </div>
                <div className='text-start flex flex-col w-full'>
                    <label for="email" className='text-rose-800'>Email</label>
                    <input placeholder='Enter your e-mail' className='rounded-md p-2 border border-rose-800' />
                </div>
                <div className='text-start flex flex-col w-full'>
                    <label for="password" className='text-rose-800'>Password</label>
                    <input placeholder='Enter your password' className='rounded-md p-2 border border-rose-800' />
                </div>
                <div className='m-auto'>
                    <button className='py-2 px-4 bg-transparent border border-rose-800 rounded-md text-rose-800 hover:bg-rose-800 hover:text-white'>Create account</button>
                </div>
                <div className='m-auto'>
                    <p>Have an account?<Link to='/login' className='text-rose-800 hover:underline'>Login</Link></p>
                </div>
            </form>
        </div>
    )
}
