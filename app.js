const express = require('express');
const{traerEstudiantes,agregarEstudiantes,eliminarEstudiantes,estudianteActualizado,contarEstudiantes} = require("./modelsESTUDIANTES/colegiomodel.js",);
const{traerMaterias, agregarMaterias,eliminarMateria,materiaActualizada, contarMaterias} = require("./modelsMaterias/materiasmodels.js")

const app = express();
const PORT =3004;
app.use(express.json());

app.get("/estudiantes", (req,res)=>{

    traerEstudiantes((results)=>{
        res.json(results)
    } )

})

app.post("/estudiantes", (req,res)=>{
    let nuevoEstudiante = req.body 
    if (!nuevoEstudiante.nombre || !nuevoEstudiante.apellido || !nuevoEstudiante.numeroID || !nuevoEstudiante.telefono || !nuevoEstudiante.direccion) {

res.send ("campos no deberian estar vacios")        
    }else{
        agregarEstudiantes(nuevoEstudiante,(results)=>{
            res.json({mensaje:"estudiante agregado"})
        })
    }

})

app.delete("/estudiantes/:id", (req,res)=>{
    let idEstudiante = req.params.id; 
    eliminarEstudiantes(idEstudiante,(err, results) =>{
        if (!err){
            return res.send("error al eliminar empleado")

        }else{
         return res.json({mensaje:"estudiante eliminado"})
        }
    })
});


app.put("/estudiantes/:id",(req,res)=>{
    let idEstudiante = req.params.id;
    const nuevoEstudiante = req.body
    estudianteActualizado(idEstudiante,nuevoEstudiante,(err,results)=>{
         res.json(results)
    });
});

app.get("/estudiantes2", (req,res)=>{
    contarEstudiantes((results)=>{
        res.json(results)
    })
})



 //APP MATERIAS 
 app.get("/materias", (req,res)=>{
    traerMaterias((results)=>{
        res.json(results)
    } ) 
 })

 app.post("/materias", (req, res) => {
    let nuevaMateria = req.body;
    
    // Validar campos vacíos
    if (!nuevaMateria.nombre || !nuevaMateria.duracion || !nuevaMateria.hora || !nuevaMateria.idestudiantes) {
        return res.send("Algunos campos están vacíos");
    } else {
        agregarMaterias(nuevaMateria, (results) => {
            res.json({ mensaje: "Materia agregada" });
        });
    }
});

app.delete("/materias/:id", (req, res) => {
    let idMateria = req.params.id;
    eliminarMateria(idMateria,(err,results)=>{
        if (!err) {
            return res.send("Error al eliminar materia");
        }else{
          return  res.json({ mensaje: "Materia eliminada" });
        }
    })

})

app.put("/materias/:id", (req, res) =>{
    let idmateria = req.params.id;
    const nuevaMateria = req.body;
    materiaActualizada(idmateria, nuevaMateria,(err,results)=>{
        res.json(results)
    })
})

 app.listen(PORT, ()=>{
    console.log("corriendo servidor");

 });


 app.get("/materias2", (req, res)=>{
    contarMaterias((results)=>{
        res.json(results)
    })
 })
 

