const db = require('../confi/db.js');


function traerMaterias(callback){
    const consultaMaterias = "SELECT * FROM materias";
    db.query(consultaMaterias, (err, results) => {
        if (err) {
            console.log('Error al traer materias');
            
        } else {
            callback(results);
        }
    });
}

function agregarMaterias(nuevaMateria, callback){
    let infomateria = "INSERT INTO materias (nombre,duracion,hora,idestudiantes) VALUES(?,?,?,?)"
db.query(infomateria,[nuevaMateria.nombre,nuevaMateria.duracion,nuevaMateria.hora, nuevaMateria.idestudiantes], (err, results) => {
    if (err){
        console.log("error al agregar materia ");
        
    }else{
        callback(results);
    }
})
}


function eliminarMateria(idMateria,callback){
    const queryEliminar = "DELETE FROM materias WHERE id=?";
    db.query(queryEliminar,[idMateria],(err,results)=>{
        if(err){
            console.log("error al eliminar");
            
        }else{
            callback(results);
        }
    })
}

function materiaActualizada(idMateria,nuevaMateria,callback){
    let actualizarMateria = "UPDATE estudiantes SET nombre=?, duracion=?, hora=?  WHERE id=?"
db.query(actualizarMateria,[nuevaMateria.nombre, nuevaMateria.duracion, nuevaMateria.hora, nuevaMateria.idestudiantes], (err, results)=>{
    if(err){
        console.log("Error al actualizar materia",err)
    }
    else{
        const consultar = "SELECT * FROM estudiantes WHERE id=?"
        db.query(consultar,[idMateria], (err, results) =>{
            if (err){
                console.log("consulta no realizada");
            }
            else{
                callback(null, results[0]);
            }
        })
}
})
}

function contarMaterias(callback) {
    const conMateria = "SELECT COUNT(id) FROM estudiantes"
    db.query(conMateria, (err, results) =>{
        if (err){
            console.log("contada no realizada");
            
        }
        else{
            callback(results)
        }

    })}




module.exports ={traerMaterias,agregarMaterias,eliminarMateria, materiaActualizada, contarMaterias}