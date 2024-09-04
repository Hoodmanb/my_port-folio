// material icons
const errorIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M440-440h80v-200h-80v200Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>'
const successIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg>'
const sendIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"> <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" /> </svg>`

document.addEventListener('DOMContentLoaded', (e) => {
  const popup = document.getElementById('popup');
  const form = document.getElementById('form');
  const submit = document.getElementById("submit");
  submit.innerHTML = `Send ${sendIcon}`
})

// Show the appropriate message and style the popup based on the status
function messageInfo(display, innerText, class1, class2) {
  popup.classList.add(class1);
  popup.classList.add(class2);

  popup.innerHTML = innerText;
  popup.style.display = display;

  setTimeout(() => {
    popup.style.display = 'none'
    popup.classList.remove('show');
  }, 7000);
}

if (form) {

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    submit.innerHTML = `Processing... `
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
      name: name,
      email: email,
      message: message
    };

    const url = '/sendmail';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        form.reset()
        if (!response.ok) {
          submit.innerHTML = `Send ${sendIcon}`
          messageInfo('block', `${errorIcon} <p>Not sent, Try Again!</P>`, 'error', 'show')
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('responce:', data);
        submit.innerHTML = `Send ${sendIcon}`
        if (data.message !== 'successful!') {
          return messageInfo('block', `${errorIcon} <p>\nMessage not sent</P>`, 'error', 'show')
        }
        return messageInfo('block', `${successIcon} <p>Sent</p>`, 'success', 'show')
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
}