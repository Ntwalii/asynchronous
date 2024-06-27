fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Aubin',
        body: 'Aubin',
        userId: 420
    })
})
.then(response => response.json())
.then(json => console.log(json));