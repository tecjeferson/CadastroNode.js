const findAll = (connection) => {
    return new Promise((resolve, reject)=>{
        connection.query('select * from pessoas', (err, results)=>{
           if (err){
               reject(err)
           }else{
               resolve(results)
           }
        })

    })
}

//Desta forma é possivel buscar no banco o item a ser editado
const findById = (connection, id) => {
    return new Promise((resolve, reject) => {
    
      
        connection.query('select * from pessoas where id = ' + id,  (err, results) => {
      
            if (err) {
                reject(err)
            } else {
                if(results.length>0){
                    resolve(results[0])
                }else{
                    resolve({})
                }
            }
        })

    })
}

const deleteOne = (connection, id) =>{
    return new Promise((resolve, reject)=>{
        connection.query('delete from pessoas where id = '+id+' limit 1', (err) =>{
            if(err){
               
                reject(err)
            }else{
                resolve()
            }
        })
    })
}
const create = (connection, data) => {
    return new Promise((resolve, reject) =>{
        connection.query(`insert into pessoas (nome, nascimento, cargo) values ('${data.nome}', '${data.nascimento}', '${data.cargo}')`, (err)=>{
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

const update = (connection, id,data) => {
    return new Promise((resolve, reject) => {
        connection.query(`update pessoas set nome='${data.nome}', nascimento='${data.nascimento}', cargo='${data.cargo}' where id=${id}`, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}


module.exports = {
    findAll,
    findById,
    deleteOne,
    create,
    update
    
}