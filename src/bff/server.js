import { getUser } from './get-user';
import { addUser } from './add-user';
import { sessions } from './sessions';


export const server =  {
    async logout(session) {
        sessions.remove(session);
    },
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
            res: {
                id: user.id,
                login: user.login,
                roleId: user.role_id,
                session: sessions.create(user),
            },

        };
    },
    async register(registerLogin, registerPassword) {

       const existedUser = await getUser(registerLogin);

       if (existedUser) {
        return {
            error: 'Такой пользователь уже существует',
            res: null,
         };
       }

       const user = await addUser(registerLogin, registerPassword);

       return {
            error: null,
            res: {
                id: user.id,
                login: user.login,
                roleId: user.role_id,
                session: sessions.create(user),
            },

        };
    },
};