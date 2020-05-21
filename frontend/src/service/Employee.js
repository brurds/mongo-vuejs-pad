import {http} from './baseURL'

export default {

    listAll:() => {
        return http.get('employee')
    },
    findOne:(id) => {
        return http.get('employee/'+id)
    },
    save:(employee)=>{
        return http.post('employee',employee)
    },
    delete:(employee)=>{
        return http.delete('employee/'+employee._id)
    },
    update:(employee)=>{
        return http.put('employee/'+employee._id,employee)
    }
}
