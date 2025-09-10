import { getUser } from './get-user';
import { addUser } from './add-user';
import { createSession } from './create-session'


export const server =  {
    async authorize(authorizeLogin, authorizePassword) {
       const user = await getUser(authorizeLogin);



        if (!user) {
            return {
                error: 'Такой пользователь не найден',
                res: null,
            };
        }

        if (user.password !== authorizePassword) {
            return {
                error: 'Неверный пароль',
                res: null,
            };
        }

        return {
            error: null,
            res: createSession(user.role_id),
        };
    },
    async register(registerLogin, registerPassword) {

       const user = await getUser(registerLogin);

       if (user) {
        return {
            error: 'Такой пользователь уже существует',
            res: null,
         };
       }

       await addUser(registerLogin, registerPassword);

       return {
        error: null,
        res: createSession(user.role_id),
       }
    },
};