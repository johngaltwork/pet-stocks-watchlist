const body = document.body;
const form_wraper = document.createElement('div');
form_wraper.classList.add('form_wraper');
const form = `
    <div></div>
    <div class='form'>
      <input class='ticker'>
      <input class='side'>
      <input class='context'>
      <input class='execution'>
      <button type="button" class='sub'>Добавить</button>
    </div>
    <div></div>
    <div></div>
    <div class='list'><ul></ul></div>
    <div></div>
`;
body.appendChild(form_wraper);
form_wraper.innerHTML = form;

const add_button = document.querySelector('.sub');
//console.log(add_button);
function handleClick(e) {
  const ticker_val = document.querySelector('.ticker');
  const side_val = document.querySelector('.side');
  const context_val = document.querySelector('.context');
  const execution_val = document.querySelector('.execution');

  if (
    ticker_val.value == '' ||
    side_val.value == '' ||
    context_val.value == '' ||
    execution_val.value == ''
  ) {
    form_wraper.insertAdjacentHTML(
      'afterend',
      `<p class='alert'>Введите корректные значения</p>`
    );
  } else {
    //document.querySelector('.alert').remove();
    counter = counter + 1;

    const row_list = `<li id='li${counter}'>
    <input type="checkbox" class='check' id='check${counter}'>
    <span class='ticker_val'>${ticker_val.value}</span>
    <span class='side_val'>${side_val.value}</span>
    <span class='context_val'>${context_val.value}</span>
    <span class='execution_val'>${execution_val.value}</span>
    </li>`;
    const ulList = form_wraper.querySelector('ul');
    ulList.insertAdjacentHTML('afterbegin', row_list);

    const arrVal = [ticker_val, side_val, context_val, execution_val];
    arrVal.forEach((e) => (e.value = ''));
    //console.log(counter);
  }
}
add_button.addEventListener('click', handleClick);
let counter = 0;
