function post_success(response) {
    alert(`Posted`);
}

function post_failure(error) {
  document.body.insertAdjacentHTML(
    `beforeend`,
    `
      <h1>Try again</h1>
      `
  );
}

function postUserMessage(details) {

  let user_title_input = document.getElementById(`title`);
  let user_title_value = user_title_input[`value`];

  let user_body_input = document.getElementById(`body`);
  let user_body_value = user_body_input[`value`];

  axios
    .request({
      url: `https://jsonplaceholder.typicode.com/posts`,
      method: `POST`,
      data: {
        title: user_title_value,
        body: user_body_value,
      },
    })
    .then(post_success)
    .catch(post_failure);
}

let button = document.querySelector(`button`);
button.addEventListener(`click`, postUserMessage);

function post_success_change(response) {
    alert(`Change made`);
}

function post_failure_change(error) {
  document.body.insertAdjacentHTML(
    `beforeend`,
    `
      <h1>Try again</h1>
      `
  );
}

function postUserMessageChange(details) {

  let id_input = document.getElementById(`change_id`);
  let id_value_change = id_input[`value`];

  let user_title_input = document.getElementById(`change_title`);
  let user_title_value_change = user_title_input[`value`];

  let user_body_input = document.getElementById(`change_body`);
  let user_body_value_change = user_body_input[`value`];

  axios
    .request({
      url: `https://jsonplaceholder.typicode.com/posts/1`,
      method: `PATCH`,
      data: {
        id: id_value_change,
        title: user_title_value_change,
        body: user_body_value_change,
      },
    })
    .then(post_success_change)
    .catch(post_failure_change);
}

let button_change = document.getElementById(`button_change`);
button_change.addEventListener(`click`, postUserMessageChange);

function post_success_delete(response) {
    alert(`Post deleted`);
}

function post_failure_delete(error) {
  
    document.body.insertAdjacentHTML(
    `beforeend`,
    `
        <h1>Try again</h1>
        `
  );
}

function postUserMessageDelete(details) {
  let id_input = document.getElementById(`delete_id`);
  let id_value_delete = id_input[`value`];

  axios
    .request({
      url: `https://jsonplaceholder.typicode.com/posts/${id_value_delete}`,
      method: `DELETE`
    })
    .then(post_success_delete)
    .catch(post_failure_delete);
}

let button_delete = document.getElementById(`button_delete`);
button_delete.addEventListener(`click`, postUserMessageDelete);

function post_success_all(response) {
    for(let i = 0; i < response[`data`].length; i++) {
        document.body.insertAdjacentHTML(
            `beforeend`,
            `
                <h4>User ID: ${response[`data`][i][`userId`]}</h4>
                <h5>Post ID: ${response[`data`][i][`id`]}</h5>
                <h1>User ID${response[`data`][i][`title`]}</h1>
                <p>User ID${response[`data`][i][`body`]}</p>
                `
        )
    }
}

function post_failure_all(error) {
    document.body.insertAdjacentHTML(
        `beforeend`,
        `
            <h1>Try again</h1>
            `
    )
}

axios
  .request({
    url: `https://jsonplaceholder.typicode.com/posts`
  })
  .then(post_success_all)
  .catch(post_failure_all);
