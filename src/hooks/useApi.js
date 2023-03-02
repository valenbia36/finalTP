import {firestore, db} from '../database/firebase'

export function useApi() {

    const writeComment=(item,text) => (
        set(ref(db, 'Familia/'+item.id), {
          id:item.id,
          name: item.name,
          comment: texts
        })
        .then(()=>{console.log("se agrego correctamente el comentario a " + item.name)})
        .catch((error)=>{console.log("hubo un error")})
    )





}




