"use client"

import Link from "next/link";
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {redirect, useRouter} from "next/navigation";
import {generateToken, getUser} from "../../../lib";
import {cookies} from "next/headers";


export default function () {
    const [formData, setFormData] = useState({})
    const router = useRouter()

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.id, e.target.value)
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            // const response = await axios.post('http://localhost/api/sanctum/token', {
            //         ...formData,
            //         device_name: 'web',
            // }, { withCredentials: true });

            const response = await generateToken(formData)
            router.push('/')
        } catch (err) {
            console.log('Login failed: %O', err.message);
        }
    }

    return (
    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                LearnWorld
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={submitForm}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input onChange={handleForm} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input onChange={handleForm} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Dont't have an account? <Link href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}