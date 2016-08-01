/**
 * Created by Lebedev on 01.08.2016.
 */

const fetch = require('node-fetch');

fetch('https://api.github.com/users/nest-aka-swan')
    .then(res => {
        return res.json();
    })
    .then(json => {
        console.log(json.html_url);
    });

// promisified xhr get
function httpGet(url) {
    return new Promise(function (resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}

// async await
/*
 async function getFooBar() {
 let foo = await getFoo();
 let bar = await getBar();

 return { foo, bar };
 }
 */