/*
POO
Clases: molde o plantilla para que podamos crear objetos 
Constructor: función obligatoria para construir objetos a 
través de características o atributos específicas. 
Objeto: Es lo que construimos a través de la clase y el constructor. 
Atributos: Se refieren a las características o propiedades de mi objeto
Método: lo que hace nuestro objeto 
Instanciación: Se refiere a cuándo ya creamos la clase, el constructor 
y el objeto. 

Herencia: Cuenta la palabra reservada extends. Permite reutilizar el código 
de la clase padre a la clase hijo
Polimorfismo: El comportamiento de cada objeto de la misma clase a un método
Encapsulamiento: Se refiere a encerrar y/o ocultar el código 
Abstracción: Se refiere a ser muy específicos con los objetos (resumir)
Modularidad: Nos permite reutilizar código, hacer modificaciones específicas, 
tener orden, entender y mantener el código
METODOS ESTÁTICAS: utiliza la palabra reservada static, nos permite ejecutar 
una clase sin instanciar el objeto
MÉTODOS ACCESORES
método especial utilizado para obtener o establecer el valor de una propiedad 
de un objeto. Estos métodos se conocen como getters y setters
Principios SOLID 

*/
class ch47 {//Clase principal o clase padre 
   constructor(nombre, apellido, email, edad) {//nos permite crear el objeto 
      this.name = nombre;//this nos permite seleccionar el objeto que voy a crear 
      this.lastName = apellido;
      this.email = email;
      this.age = edad;
      this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age}`
   }
   infoIntegrantes() {
      console.log(this.info);
   }
   //Getter
   get obtenerInfo() {
      return this.info;
   }
}
class instruccion extends ch47 {
   constructor(nombre, apellido, email, edad, escolaridad) {
      super(nombre, apellido, email, edad)
      this.grado = escolaridad;
      this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age} mi escolaridad es ${this.grado}`
   }
   static darSesiones() {
      console.log("Hoy no tienes sesión");
   }
}
class mentoria extends ch47 {
   constructor(nombre, apellido, email, edad, telefono) {
      super(nombre, apellido, email, edad)
      this.tel = telefono;
      this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age} mi telefono es ${this.tel}`;
   }
  static darMentoria(){
   console.log("Tienes muchos mentees");
}
}
class aprendices extends ch47 {
   constructor(nombre, apellido, email, edad, linkedin) {
      super(nombre, apellido, email, edad)
      this.linkedin = linkedin;
      this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age} mi linkedin es ${this.linkedin}`
   }
   static tenerClases() {
      console.log("Tienes clase hoy");
   }
}
class mentees extends ch47 {
   constructor(nombre, apellido, email, edad, mentora) {
      super(nombre, apellido, email, edad)
      this.mentora = mentora;
      this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age} mi mentora es ${this.mentora}`
   }
   static tenerMentoria() {
      console.log("Hoy no tienes mentoría");
   }
}

const inte1 = new ch47("Xaxiry", "Gonzalez", "xaxiry@gmial.com", 27);//los objetos se deben definir con const
const inte2 = new instruccion("Liliana", "Aguirre", "lilyy@gmial.com", 30, "licenciatura");
const inte3 = new mentoria("Yareri", "Arcos", "yare@gmial.com", 29, 556742255);
const inte4 = new aprendices("Areli", "Cruz", "areli@gmial.com", 28, "http/linkedin.com");
const inte5 = new mentoria("Areli", "Cruz", "areli@gmial.com", 28, "Yareri");

console.log(inte1.obtenerInfo);
console.log(inte2.obtenerInfo);

mentoria.darMentoria();
console.log(inte3.obtenerInfo);
aprendices.tenerClases();
console.log(inte4.obtenerInfo);
mentees.tenerMentoria();
console.log(inte5.obtenerInfo);


