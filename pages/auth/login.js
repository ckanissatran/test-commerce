import React from 'react'

export default function Login() {
    return (  
        <div className="bg-gray-900 lg:w-5/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
            <div className="py-8 px-8 rounded-xl">
                <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
                <form action="" className="mt-6">
                    <div className="my-5 text-sm">
                        <label htmlFor="username" className="block text-white">Username</label>
                        <input type="text" autoFocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-700 w-full" placeholder="Username" />
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="password" className="block text-white">Password</label>
                        <input type="password" id="password" className="text-white rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-700 w-full" placeholder="Password" />
                        <div className="flex justify-end mt-2 text-xs text-gray-200">
                           <a href="../../pages/auth/forget_password.html hover:text-white">Forget Password?</a>
                        </div>
                    </div>

                    <button className="block text-center text-white bg-green-700 p-3 duration-300 rounded-sm hover:bg-green-500 w-full">Login</button>
                </form>

                 <div className="flex md:justify-between justify-center items-center mt-10">
                <div style={{height: '1px'}} className="bg-gray-300 md:block hidden w-4/12"></div>
                    <p className="md:mx-2 text-sm font-light text-gray-200"> Login With Social </p> 
                    <div style={{height: '1px'}} className="bg-gray-300 md:block hidden w-4/12"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-2 mt-7">
                    <div>
                        <button className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
                    </div>
                    <div>
                        <button className="text-center w-full text-white bg-red-800 p-3 duration-300 rounded-sm hover:bg-red-500">Google</button>
                    </div>
                </div>

                <p className="mt-12 text-xs text-center font-light text-gray-300"> Don't have an account? <a href="../auth/register.html" className="text-white font-medium"> Create One </a>  </p> 

            </div>
        </div>
    )
}
