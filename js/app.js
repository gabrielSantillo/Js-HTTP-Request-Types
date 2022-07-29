/* This function is called when the user has success when trying to post their content */
function post_success(response) {
  /* alert that tells the user the that the post was posted */
  alert(`Posted`);
}

/* This function is called when the user has failure when trying to post their content */
function post_failure(error) {
  /* print a message to the user try to post again */
  document.body.insertAdjacentHTML(
    `beforeend`,
    `
      <h1>Try again</h1>
      `
  );
}

/* this function is called when the user click in the post button to then create the post in the API*/
function postUserMessage(details) {
  /* getting the title input by its id */
  let user_title_input = document.getElementById(`title`);
  /* storing the input value in other variable */
  let user_title_value = user_title_input[`value`];

  /* getting the post content input by its id */
  let user_body_input = document.getElementById(`body`);
  /* storing the input value in other variable */
  let user_body_value = user_body_input[`value`];

  /* making a request to the API */
  axios
    .request({
      /* API link */
      url: `https://jsonplaceholder.typicode.com/posts`,
      /* method that will post content into the API */
      method: `POST`,
      data: {
        /* posting the title */
        title: user_title_value,
        /* posting the content */
        body: user_body_value,
      },
    })
    /* if the request is successful, call the function post_success */
    .then(post_success)
    /* if the request fails, call the function post_failure */
    .catch(post_failure);
}

/* This function is called when the user has success when trying to change their post content */
function post_success_change(response) {
  /* alert that tells the user the that the post was changed */
  alert(`Change made`);
}

/* This function is called when the user has failure when trying to change  their post content */
function post_failure_change(error) {
  /* print a message to the user try to post again */
  document.body.insertAdjacentHTML(
    `beforeend`,
    `
      <h1>Try again</h1>
      `
  );
}

/* this function is called when the user click in the change post button to then change the post in the API*/
function postUserMessageChange(details) {
  /* getting the title input by its id */
  let user_title_input = document.getElementById(`change_title`);
  /* storing the input value in other variable */
  let user_title_value_change = user_title_input[`value`];

  /* getting the post content input by its id */
  let user_body_input = document.getElementById(`change_body`);
  /* storing the input value in other variable */
  let user_body_value_change = user_body_input[`value`];

  /* making a request to the API */
  axios
    .request({
      /* API link */
      url: `https://jsonplaceholder.typicode.com/posts/1`,
      /* method that will change content into the API */
      method: `PATCH`,
      data: {
        /* changing the title */
        title: user_title_value_change,
        /* changing the content */
        body: user_body_value_change,
      },
    })
    /* if the request is successful, call the function post_success_change */
    .then(post_success_change)
    /* if the request fails, call the function post_failure_change */
    .catch(post_failure_change);
}

/* This function is called when the user has success when trying to delete their content */
function post_success_delete(response) {
  /* alert that tells the user the that the post was deleted */
  alert(`Post deleted`);
}

/* This function is called when the user has failure when trying to delete their content */
function post_failure_delete(error) {
  /* print a message to the user try to post again */
  document.body.insertAdjacentHTML(
    `beforeend`,
    `
        <h1>Try again</h1>
        `
  );
}

/* this function is called when the user click in the delete button to then delete the post in the API*/
function postUserMessageDelete(details) {
  /* getting the post id input by its id */
  let id_input = document.getElementById(`delete_id`);
  /* storing the input value in other variable */
  let id_value_delete = id_input[`value`];

  /* making a request to the API */
  axios
    .request({
      /* for each post the user wants to delete, the post id will change, that means that for any post id typed in, the url will change and delete the post by its id */
      url: `https://jsonplaceholder.typicode.com/posts/${id_value_delete}`,
      /* method that will delete the post in the API */
      method: `DELETE`,
    })
    /* if the request is successful, call the function post_success */
    .then(post_success_delete)
    /* if the request fails, call the function post_failure */
    .catch(post_failure_delete);
}

/* This function is called when has success trying to post all posts onto the page */
function post_success_all(response) {
  /* for loop to go into all posts and print them all */
  for (let i = 0; i < response[`data`].length; i++) {
    /* print all posts, such as User id, post id, title and content */
    document.body.insertAdjacentHTML(
      `beforeend`,
      `
                <h4>User ID: ${response[`data`][i][`userId`]}</h4>
                <h5>Post ID: ${response[`data`][i][`id`]}</h5>
                <h1>User ID${response[`data`][i][`title`]}</h1>
                <p>User ID${response[`data`][i][`body`]}</p>
                `
    );
  }
}

/* This function is called when failis trying to post all posts */
function post_failure_all(error) {
  /* print a message to the user when happended an error trying to post all posts */
  document.body.insertAdjacentHTML(
    `beforeend`,
    `
            <h1>Sorry for the inconvenient, reload the page to see all posts</h1>
            `
  );
}

/* getting the post button */
let button = document.querySelector(`button`);
/* when the button is clicked, call the function postUserMessage */
button.addEventListener(`click`, postUserMessage);

/* getting the change button */
let button_change = document.getElementById(`button_change`);
/* when the button is clicked, call the function postUserMessageChange */
button_change.addEventListener(`click`, postUserMessageChange);

/* getting the delete button */
let button_delete = document.getElementById(`button_delete`);
/* when the button is clicked, call the function postUserMessageDelete */
button_delete.addEventListener(`click`, postUserMessageDelete);

/* making a request to the API */
axios
  .request({
    /* API link */
    url: `https://jsonplaceholder.typicode.com/posts`,
  })
  /* if the request is successful, call the function post_success_all */
  .then(post_success_all)
  /* if the request fails, call the function post_failure_all */
  .catch(post_failure_all);
