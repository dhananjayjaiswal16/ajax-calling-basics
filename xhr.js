const myAxios = (method, url, body = null) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);//open a server request

        xhr.responseType = 'json'; // automatically converts all data to JSON format (prevents us from usinf JSON.parse())
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {   //this func gets called when we fetch response from out server

            if (xhr.status >= 400) { // xhr.status returns status code
                reject(xhr.response);
            } else { // .response gives us data, by default it returns String data
                resolve(xhr.response);
            }
        }
        xhr.onerror = () => {
            reject(xhr.response);
        }

        xhr.send(JSON.stringify(body)); //send request
    })
}

const url = 'https://jsonplaceholder.typicode.com/users';

// myAxios('GET', url);
const bioData = {
    name: 'Dj',
    age: 21,
}
myAxios('POST', url, bioData)
    .then((res) => {
        console.log("Then block\n", res);
    })
    .catch((err) => {
        console.error("Error\n", err);
    })