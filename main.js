window.onload = function() {
  var form = document.querySelector("form");
  form.onsubmit = submitted.bind(form);
}

function submitted(event) {
  event.preventDefault();

  var numeroCuotas = document.getElementById("numeroCuotas").value
  var cuotaInicial = document.getElementById("cuotaInicial").value
  var cuotaMensualTexto = document.getElementById("cuotaMensual");
  var ahorroDiarioTexto = document.getElementById("ahorroDiario");
  var prestamoTexto = document.getElementById("prestamo");
  var valorTotal = 1500000


  var valorPrestado = valorTotal - cuotaInicial

  var tasasDeInteres = {
    3: 0.360349,
    6: 0.190762,
    10: 0.123291,
    12: 0.106552,
    15: 0.089941,
    18: 0.078993,
    20: 0.073582,
    24: 0.065587,
    30: 0.057830,
    36: 0.051432,
  }

  Simulador.init(valorPrestado, numeroCuotas, tasasDeInteres);

  prestamoTexto.textContent = Simulador.formatoMoneda(valorPrestado)
  cuotaMensualTexto.textContent = Simulador.cuotaMensualMoneda
  ahorroDiarioTexto.textContent = Simulador.ahorroDiario
}
