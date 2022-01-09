const body = document.body;
const form_wraper = document.createElement('div');
form_wraper.classList.add('form_wraper');
const form = `
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class='form gridinp'>

      <div class="form__group field">
        <input class='ticker inpval form__field' placeholder="Ticker" name="ticker" id='ticker' required />
        <label for="ticker" class="form__label">Ticker</label>
      </div>

      <div class="form__group field">
        <input class='side inpval form__field' placeholder="Side" name="side" id='side' required />
        <label for="side" class="form__label">Side</label>
      </div>

      <div class="form__group field">
        <input class='context inpval form__field' placeholder="Context" name="context" id='context' required />
        <label for="context" class="form__label">Context</label>
      </div>

      <div class="form__group field">
        <input class='execution inpval form__field' placeholder="Execution" name="execution" id='execution' required />
        <label for="execution" class="form__label">Execution</label>
      </div>
      
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
    </li>
    </ul>`;
    const ulList = form_wraper.querySelector('.ullist');
    ulList.insertAdjacentHTML('afterbegin', row_list);

    const AdddeleteButton = `<div class="sub btn btn-one" id="delete"><span>Удалить</span></div>`;
    if (document.querySelector('#delete') == null) {
      ulList.insertAdjacentHTML('beforeend', AdddeleteButton);
    }

    const arrVal = [ticker_val, side_val, context_val, execution_val];
    arrVal.forEach((e) => (e.value = ''));
  }

  //Удаление строк
  const getUl = document.getElementById('todo');
  getUl.addEventListener('click', function () {
    this.closest('ul').classList.toggle('active');
  });

  const delBut = document.getElementById('delete');

  delBut.addEventListener('click', function () {
    const checkedUl = document
      .querySelectorAll('.active')
      .forEach((e) => e.remove());
    console.log(checkedUl);
  });
}
add_button.addEventListener('click', handleClick);
let counter = 0;
