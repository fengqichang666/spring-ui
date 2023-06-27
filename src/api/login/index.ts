import { Get, Post } from '@/http/index'
import type { LoginModel } from './model/index'
enum Api {
	Login = '/login',
	Register = '/register'
}
export const Login = (params: LoginModel) => {
	return Post(Api.Login, params)
}
export const Register = (params: LoginModel) => {
	return Post(Api.Register, params)
}
