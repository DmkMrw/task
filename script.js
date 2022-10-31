const div = document.querySelector('.container');

const count = function (arg) {

  const data = arg.split(' ');

  const correctValue = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].includes(',')) {
      correctValue.push(data[i].replace(',', '.'));
    } else if (data[i].charAt(data[i].length - 1) === 'b') {
      correctValue.push(parseInt(data[i], 2));
    } else if (data[i].includes('x')) {
      correctValue.push(parseInt(data[i], 16));
    } else correctValue.push(data[i]);
  };

  let result = Number(correctValue[0]);

  for (let i = 1; i < correctValue.length; i++) {

    if (correctValue[i] == '-' && correctValue[i + 2] !== '*') {
      result = result - correctValue[i + 1] * 1

    } else if (correctValue[i] == '+' && correctValue[i + 2] !== '*') {
      result = result + correctValue[i + 1] * 1

    } else if (correctValue[i] == '*') {
      result = result + (correctValue[i - 1] * 1 * correctValue[i + 1] * 1);
    };
  };
  console.log('result', result);
  div.innerHTML = result;
};

count("22 + 33,22 * 33 – 12 – 0001b + 0xFF")
