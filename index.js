let label = document.getElementsByTagName('label')[0];
let input = document.getElementsByTagName('input')[0];

label.onclick = function (){
  label.style.display = "none";
  input.focus();
};
input.onblur = function(){
  if(!this.value) label.style.display = 'block';
};

let label2 = document.getElementsByTagName('label')[1];
let input2 = document.getElementsByTagName('input')[1];

label2.onclick = function (){
  label2.style.display = "none";
  input2.focus();
};
input2.onblur = function(){
  if(!this.value) label2.style.display = 'block';
};



const horasDiarias = 8;

const calcularSalario = () => {
  const diasTrabalhados = document.querySelector('#dias').value;
  const valorHora = document.querySelector('#salario_hora').value;
  const valorDia = valorHora * horasDiarias;
  const salarioMes = valorDia * diasTrabalhados;
  const salarioTotal = document.querySelector('#salario_total');
  salarioTotal.innerHTML = 'R$ ' + salarioMes.toFixed(2);
}

function calcularValorHora(){
  const diasTrabalhados = document.querySelector('#dias').value;
  const salarioTotal = document.querySelector('#salario_total').value;
  const valorHora = (salarioTotal / diasTrabalhados) / 8;
  const salarioHora = document.querySelector('#valor_hora');
  salarioHora.innerHTML = 'R$ ' + valorHora.toFixed(2);
}
