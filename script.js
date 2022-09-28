/**Calculadora**/
const inputnum1 = document.getElementById("num1")
const inputnum2 = document.getElementById("num2")
const inputresultado = document.getElementById("resultado")

/**Suma**/
const btnsuma = document.getElementById("suma")
const suma = (a, b) => a + b
const handlesuma = () => {
    const num1 = parseFloat(inputnum1.value)
    const num2 = parseFloat(inputnum2.value)
    inputresultado.value = suma(num1, num2)
}
btnsuma.addEventListener("click", handlesuma)

/**Resta**/
const btnresta = document.getElementById("resta")
const resta = (a, b) => a - b
const handleresta = () => {
    inputresultado.value = resta(inputnum1.value, inputnum2.value)
}
btnresta.addEventListener("click", handleresta)

/**Multiplicación**/
const btnmultiplicación = document.getElementById("multiplicación")
const multiplicación = (a, b) => a * b
const handlemultiplicación = () => {
    inputresultado.value = multiplicación(inputnum1.value, inputnum2.value)
}
btnmultiplicación.addEventListener("click", handlemultiplicación)

/**División**/
const btndivisión = document.getElementById("división")
const división = (a, b) => a / b
const handledivisión = () => {
    inputresultado.value = división(inputnum1.value, inputnum2.value)
}
btndivisión.addEventListener("click", handledivisión)