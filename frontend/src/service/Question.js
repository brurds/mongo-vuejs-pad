import {http} from './baseURL'

export default {

    listAll:() => {
        return http.get('question')
    },
    save:(question)=>{
        return http.post('question',question)
    },
    delete:(question)=>{
        return http.delete('question/'+question._id)
    },
    update:(question)=>{
        return http.put('question/'+question._id,question)
    }
}
