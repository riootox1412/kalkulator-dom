function tambah() {
  document.getElementById('hasil').value = '+';
}
function kurang() {
  document.getElementById('hasil').value = '-';
}
function kali() {
  document.getElementById('hasil').value = '*';
}
function bagi() {
  document.getElementById('hasil').value = '/';
}

function hitung() {
  let angka1 = parseInt(document.getElementById('inp1').value);
  let angka2 = parseInt(document.getElementById('inp2').value);
  let operator = document.getElementById('hasil').value;
  let hasil;

  switch (operator) {
    case '+':
      hasil = angka1 + angka2;
      break;
    case '-':
      hasil = angka1 - angka2;
      break;
    case '*':
      hasil = angka1 * angka2;
      break;
    case '/':
      hasil = angka1 / angka2;
      break;
  }

  document.getElementById('hasil').value = hasil;
}

function reset() {
  document.getElementById('inp1').value = '';
  document.getElementById('inp2').value = '';
  document.getElementById('hasil').value = '';
}
