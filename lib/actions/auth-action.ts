'use server';

import {  register, login, whoAmI } from '@/lib/api/auth';
import { setAuthToken, setUserData } from '@/lib/cookie';

export async function handleRegister(registrationData: any) {
  try {
    const result = await register(registrationData);

    if (result.success) {
      return { success: true, message: 'Registration successful', data: result.data };
    }

    return { success: false, message: result.message || 'Registration failed' };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

export async function handleLogin(loginData: any) {
    try{
        const result = await login(loginData);
        if(result.success){
            await setUserData(result.data);
            await setAuthToken(result.token);
            
            return { 
                success: true,
                message: 'Login successful', 
                data: result.data 
            };
        }
        return { success: false, message: result.message || 'Login failed' };
    }catch(error: Error | any){
        console.log(error)
        return { success: false, message: error.message };
    }
}

export async function handleWhoAmI() {
  try{
    const result = await whoAmI();
    if(result.success){
        return { 
            success: true,
            message: 'User data fetched successfully', 
            data: result.data 
        };
    }
    return { success: false, message: result.message || 'Failed to fetch user data' };
  }catch(error: Error | any){
    return { success: false, message: error.message };
  }
}