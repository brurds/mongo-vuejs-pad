import {http} from './baseURL'

export default {

    listAll:() => {
        return http.get('test')
    },
    findOne:(id) => {
        return http.get('test/'+id)
    },
    save:(test)=>{
        return http.post('test',test)
    },
    delete:(test)=>{
        return http.delete('test/'+test._id)
    },
    update:(test)=>{
        return http.put('test/'+test._id,test)
    }
}
