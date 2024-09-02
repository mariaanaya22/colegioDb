const db = require("../confi/db.js")

function traerEstudiantes (callback) {
    const consultarEstudiantes = "SELECT * FROM estudiantes"
    db.query(consultarEstudiantes, (err, results) =>{
        if (err){
            console.log("consulta no realizada");
            
        }
        else{
            callback(results)
        }

    })

}
function agregarEstudiantes (nuevoEstudiante,callback){
    let infoEstudiantes = "INSERT INTO estudiantes(nombre, apellido, numeroID, telefono, direccion) VALUES(?,?,?,?,?)"
    db.query(infoEstudiantes,[nuevoEstudiante.nombre, nuevoEstudiante.apellido, nuevoEstudiante.numereroID, nuevoEstudiante.telefono, nuevoEstudiante.direccion], (err,results)=>{
        if(err){
            console.log("Error al agregar estudiante")
        }
        else{
            callback(results)
        }

    } )
} 

function eliminarEstudiantes(idEstudiante, callback){
    const queryEliminar = "DELETE FROM estudiantes WHERE id=?";
    db.query(queryEliminar, [idEstudiante], (err,results)=>{
        if(err){
            console.log("error al eliminar ", err);
            
        }else{
            callback(results);
        }
    })
}

function estudianteActualizado(idEstudiante,nuevoEstudiante, callback){
    let actualizarQuery = "UPDATE estudiantes SET nombre=?, apellido=?, numeroID=?, telefono=?, direccion=?  WHERE id=?";
    db.query(actualizarQuery,[nuevoEstudiante.nombre, nuevoEstudiante.apellido, nuevoEstudiante.numeroID, nuevoEstudiante.telefono, nuevoEstudiante.direccion, idEstudiante], (err, results)=>{
    if(err){
        console.log("Error al actualizar estudiante",err)
    }
    else{
        const consultar = "SELECT * FROM estudiantes WHERE id=?"
            db.query(consultar,[idEstudiante], (err, results) =>{
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
function contarEstudiantes (callback) {
    const conEstudiantes = "SELECT COUNT(id) FROM estudiantes"
    db.query(conEstudiantes, (err, results) =>{
        if (err){
            console.log("contada no realizada");
            
        }
        else{
            callback(results)
        }

    })}





module.exports = {traerEstudiantes,agregarEstudiantes, eliminarEstudiantes, estudianteActualizado,contarEstudiantes}