// Add your code here
function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body:JSON.stringify({
      name: name,
      email: email,
    })
  })
  .then(res => res.json())
  .then(user => {
    document.body.innerHTML = user.id;
  })
  .catch(err => {
    document.body.innerHTML = err.message;
  })
}