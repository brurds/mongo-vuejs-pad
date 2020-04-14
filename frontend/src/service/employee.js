import {http} from './config'

export default {

    listAll:() => {
        return http.get('employee')
    },
    save:(employee)=>{
        return http.post('employee',employee)
    },
    delete:(_id)=>{
        return http.delete('employee/:id',{data:_id})
    }
}