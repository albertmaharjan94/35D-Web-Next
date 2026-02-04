'use server';

import {  register, login, whoAmI, updateProfile,
  requestPasswordReset, resetPassword
 } from '@/lib/api/auth';
import { setAuthToken, setUserData } from '@/lib/cookie';
import { revalidatePath } from 'next/cache';

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

export async function handleUpdateProfile(profileData: any) {
  try{
    const result = await updateProfile(profileData);
    if(result.success){
        await setUserData(result.data); // update cookie 
        revalidatePath('/user/profile'); // revalidate profile page/ refresh new data
        return { 
            success: true,
            message: 'Profile updated successfully', 
            data: result.data
        };
    }
    return { success: false, message: result.message || 'Failed to update profile' };
  }catch(error: Error | any){
    return { success: false, message: error.message };
  }
}

export const handleRequestPasswordReset = async (email: string) => {
    try {
        const response = await requestPasswordReset(email);
        if (response.success) {
            return {
                success: true,
                message: 'Password reset email sent successfully'
            }
        }
        return { success: false, message: response.message || 'Request password reset failed' }
    } catch (error: Error | any) {
        return { success: false, message: error.message || 'Request password reset action failed' }
    }
};

export const handleResetPassword = async (token: string, newPassword: string) => {
    try {
        const response = await resetPassword(token, newPassword);
        if (response.success) {
            return {
                success: true,
                message: 'Password has been reset successfully'
            }
        }
        return { success: false, message: response.message || 'Reset password failed' }
    } catch (error: Error | any) {
        return { success: false, message: error.message || 'Reset password action failed' }
    }
};