'use server';

import {  register } from '@/lib/api/auth';

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