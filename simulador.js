var Simulador = {
  init: function(valorPrestado, numeroCuotas, tasasDeInteres) {
    this.valorPrestado = valorPrestado
    this.numeroCuotas = numeroCuotas
    this.tasasDeInteres = tasasDeInteres
    this.cuotaMensual = this.calcularCuotaMensual()
    this.ahorroDiario = this.calcularAhorroDiario()
    this.cuotaMensualMoneda = this.formatoMoneda(this.cuotaMensual)
  },

  formatoMoneda: function (valorMoneda) {
    var valorMonedaArray = Array.from(valorMoneda.toString())

    valorMonedaArray.unshift("$")
    valorMonedaArray.splice(-3, 0, ".")

    if (valorMonedaArray.length > 8) {
      valorMonedaArray.splice(-7, 0, "'")
    }

    valorMonedaArray.push(" COP")

    return valorMonedaArray.join("")
  },

  redondearCuotaMensual: function (cuotaMensual) {
    var cuotaMensualArray = Array.from(cuotaMensual.toString())
    cuotaMensualArray.splice(-3, 0, ".")
    var cuotaMensualString = cuotaMensualArray.join("")
    var cuotaMensualFlotante = parseFloat(cuotaMensualString)

    var cuotaMensual = Math.round(cuotaMensualFlotante) * 1000

    return Math.round(cuotaMensualFlotante) * 1000
  },

  calcularCuotaMensual: function() {
    var tasaInteres = this.tasasDeInteres[this.numeroCuotas]
    var cuotaMensual = parseInt(this.valorPrestado * tasaInteres)

    return this.redondearCuotaMensual(cuotaMensual)
  },

  calcularAhorroDiario: function() {
    return this.formatoMoneda(parseInt(this.cuotaMensual / 30))
  }
}
