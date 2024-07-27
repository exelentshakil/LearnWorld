"use server"

import axios from 'axios';
import {cookies} from "next/headers";

const getToken = () => {
    const cookieStore = cookies();
    return cookieStore.get('token')?.value;
};

const getConfig = () => {
    const token = getToken();
    return {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        withCredentials: true,
    };
};

export const getUser = async () => {
    const config = getConfig();
    try {
        //await getCsrfToken();
        const response = await axios.get('http://localhost/api/user', config);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
export const generateToken = async (formData: {}) => {
    const config = getConfig();

    try {
        await getCsrfToken()
        const response = await axios.post('http://localhost/api/sanctum/token',
            {
                ...formData,
                device_name: "web"
            },
            config
        );
        cookies().set({
            name: 'token',
            value:  response.data.token,
            httpOnly: true,
        })

        //return response.data
    } catch (error) {
        return error.response.data
    }
};
export const registerUser = async (formData: {}) => {
    const config = getConfig();

    try {
        await getCsrfToken()
        const response = await axios.post('http://localhost/api/register',
            {
                ...formData,
                device_name: "web"
            },
            config
        );
        cookies().set({
            name: 'token',
            value:  response.data.token,
            httpOnly: true,
        })

        //return response.data
    } catch (error) {
        return error.response.data
    }
};
export const userLogOut = async () => {

    const config = getConfig();

    try {
        const response = await axios.post('http://localhost/api/logout', {}, config);
        cookies().delete('token')
        return response.data
    } catch (error) {
        return error.response.data;
    }
};



export const getCsrfToken = async () => {
    try {
        await axios.get('http://localhost/sanctum/csrf-cookie', { withCredentials: true });
    } catch (error) {
        console.error('Failed to fetch CSRF token:', error);
    }
};