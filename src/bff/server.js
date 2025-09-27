
import { authorize, logout, register, fetchUsers,
    fetchRoles,
    removeUser,
    updateUserRole,  } from './operations';


export const server =  {
    logout,
    authorize,
    register,
    fetchUsers,
    fetchRoles,
    updateUserRole,
    removeUser,
};