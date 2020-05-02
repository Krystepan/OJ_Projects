import caesar from './caesar13';

// console.log(caesar('Przeprogramowani'));

const input = document.querySelector('input');
const output = document.querySelector('.encrypted');
const captured = document.querySelector('.captured');

document.addEventListener('keydown', (key) => {
  if (key.which === 13) {
    output.textContent = caesar(input.value);
    captured.textContent = `${input.value}`;
    input.value = '';
  }
});
