const body = document.body;
const form_wraper = document.createElement('div');
form_wraper.classList.add('form_wraper');
const form = `
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class='form gridinp'>
      <input class='ticker inpval'>
      <input class='side inpval'>
      <input class='context inpval'>
      <input class='execution inpval'>
      
      <div class="sub btn btn-one"><span>Добавить</span></div>
    </div>
    <div></div>
    <div></div>
    <div class='ullist'><ul></ul></div>
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

    const row_list = `<ul class='list'><li id='li${counter}'>
    <span class='check'>
    
    <input type="checkbox" id="todo" class='check${counter}' name="todo" value="todo"> 

    </span>
    <span class='ticker_val outputstyle'>${ticker_val.value}</span>
    <span class='side_val outputstyle'>${side_val.value}</span>
    <span class='context_val outputstyle'>${context_val.value}</span>
    <span class='execution_val outputstyle'>${execution_val.value}</span>
    </li></ul>`;
    const ulList = form_wraper.querySelector('.ullist');
    ulList.insertAdjacentHTML('afterbegin', row_list);

    const arrVal = [ticker_val, side_val, context_val, execution_val];
    arrVal.forEach((e) => (e.value = ''));
    //console.log(counter);
  }
}
add_button.addEventListener('click', handleClick);
let counter = 0;
