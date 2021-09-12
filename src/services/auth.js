import { post } from "../utility/requests";
import api from '../api/api'

//new user
export function createUserApi(userName){
    return post(api.create_user,userName)
}

//new event
export function createEventApi(event){
    return post(api.create_event,event)
}

//get event
export function createInfoApi(){
    return get(api.get_event)
}

//get info
export function createInfoApi(id){
    return post(api.get_info, id)
}

//attend event
export function attendEventApi(id){
    return post(api.attend_event, id)
}