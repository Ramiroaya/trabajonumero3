let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let dato3 = <HTMLInputElement>document.getElementById("dato3");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let rotulo3 = <HTMLParagraphElement>document.getElementById("rotulo3");

//sigue el codigo
btnEnviar.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);
  let numero3: number = Number(dato3.value);
  let numeroMayor: number;
  rotulo1.innerHTML = "Ingrese el primer numero";
  rotulo2.innerHTML = "Ingrese el segundo numero";
  rotulo3.innerHTML = "Ingrese el tercer numero";
  if (numero1 > numero2) numeroMayor = numero1;
  else numeroMayor = numero2;
  if (numero3 > numeroMayor) numeroMayor = numero3;
  console.log("El numero mayor es :" + numeroMayor);
});
