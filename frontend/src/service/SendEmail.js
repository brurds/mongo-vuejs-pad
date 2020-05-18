import {http} from './sendURL'

export default {
    
    send:(email)=>{
        return http.post('send',email)
    },
    
}
