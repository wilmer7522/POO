class Estudiante1 {
    constructor(Nombre, Apellido, Curso) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Curso = Curso;
        
    }
    detalles(){
        return  `Estudiante ${this.Nombre}  ${this.Apellido} Curso ${this.Curso}` 
        
        
    }
    
}

class Estudiante2 extends Estudiante1 {
    constructor(Nombre, Apellido, Curso, Carrera) {
        super(Nombre,Apellido,Curso)
        this.Carrera = Carrera;
        
    }

    detalles1(){
        return `Carrera ${super.detalles()} ${this.Carrera}`
    }

 

}


const Alumno2 = new Estudiante2("Wilmer", "Rojas", "T2","Programacion");
console.log(Alumno2.detalles1());



var Persona = function (Nombre, Apellido, Edad) {
    var N = Nombre;
    var A = Apellido;
    var E = Edad;


    this.obtenerDatos = function(){
        return N + A

    }

    this.ObtenerEdad = function(){
        return E;
    }

    this.Cambiaredad = function(NuevaEdad){
        E = NuevaEdad
        
       
        
    }
    
    
}

var persona1 = new Persona("Alexander ", "Fuentes ", 40)

console.log(persona1.obtenerDatos(), persona1.ObtenerEdad() )

persona1.Cambiaredad(30)
console.log(persona1.ObtenerEdad());


console.log(persona1);





class vehiculos {
   color(){
    return "colores"

   }
     
    }


class colores extends vehiculos{
    color(){
        return "verde"
    }
}

class color2 extends vehiculos{
    color(){
        return "azul"
    }
}


const car = new colores()
const car2 =new color2()


console.log(car.color());
console.log(car2.color());


   
