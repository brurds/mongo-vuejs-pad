import {http} from './config'

export default {

    listAll:() => {
        return http.get('employee')
    },
    save:(employee)=>{
        return http.post('employee',employee)
    },
    delete:(employee)=>{
        return http.delete('employee/'+employee._id)
    },
    update:(employee)=>{
        return http.put('employee/'+employee._id)
    }
}
