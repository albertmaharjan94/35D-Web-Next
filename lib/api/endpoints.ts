export const API = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    WHOAMI: '/api/auth/whoami',
    UPDATEPROFILE: '/api/auth/update-profile',
  },
  ADMIN: {
    BLOGS: {
      GET_ALL: "/api/admin/blogs",
      GET_ONE: (id: string) => `/api/admin/blogs/${id}`,
      CREATE: "/api/admin/blogs",
      UPDATE: (id: string) => `/api/admin/blogs/${id}`,
      DELETE: (id: string) => `/api/admin/blogs/${id}`
    }
  }
}