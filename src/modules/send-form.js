const sendForm = () => {
  const formsGroup = document.querySelectorAll('.form')
  formsGroup.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      //unmasked input.value
      const formData = new FormData(form)
      let body = {}
      formData.forEach((value, field) => {
        body[field] = value;
      })

      fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        })
        .then(response => {
          if (response.ok) {
            return response.json()
          } else throw new Error(response.status)
        })
        .then(data => {
          console.log(data)
          alert('Данные отправлены успешно')
        })
        .catch(error => {
          alert('Данные отправлены с ошибкой ' + error.message)
        })
        .finally(() => {
          form.reset()
        })
    })
  });
}

export default sendForm