
const myAxios = (method, url, body = null) => {
    const headers = {
        'Content-Type': 'application/json'
    }
    return (
        fetch(url, { //fetch returns a promise
            method: method,
            headers: headers,
            body: JSON.stringify(body) //data passsed at time of func call
        })
            .then((res) => res.json())
            .catch((err) => console.error(err))
    )
}

const url = 'https://jsonplaceholder.typicode.com/users';

// myAxios('GET', url)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch(() => {

//     })

myAxios('POST', url, {
    name: 'Dj',
    college: 'BIT Mesra',
})
    .then((res) => console.log(res))
    .catch((err) => console.log(err))