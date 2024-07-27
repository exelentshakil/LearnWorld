"use client"
import Link from "next/link";
import {ChangeEvent, FormEvent, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import RegisterForm from "@/components/register-form";



export default function () {


    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                LearnWorld
            </a>
            <RegisterForm />
        </div>
    )
}