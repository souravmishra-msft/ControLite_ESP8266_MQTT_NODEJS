const on_btn = document.getElementById('power_on_btn');
const off_btn = document.getElementById('power_off_btn');
const status_msg = document.getElementById('status');
const icon = document.querySelector('.light');

let state = "OFF";
let url = "http://localhost:4000/status_check";

on_btn.addEventListener('click', () => {
    // console.log(`Light_Status: ON`);
    state = "ON";
    status_msg.innerText = "ON";
    icon.innerHTML = "";
    icon.innerHTML = `<i class="fas fa-lightbulb" style="color: #FCE204"></i>`

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "state": state
        }),
    }).then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error(Error);
        }
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
    
});

off_btn.addEventListener('click', () => {
    // console.log(`Light_Status: OFF`);
    state = "OFF";
    status_msg.innerText = "OFF";

    icon.innerHTML = "";
    icon.innerHTML = `<i class="far fa-lightbulb"></i>`

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "state": state
        }),
    }).then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error(Error);
        }
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
});

// const test = document.getElementById("test");

// test.addEventListener('click', () => {
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "state": state
//         }),
//     }).then((response) => {
//         if(response.ok) {
//             return response.json();
//         } else {
//             throw new Error(Error);
//         }
//     }).then((data) => {
//         console.log(data);
//     }).catch((error) => {
//         console.log(error);
//     });
// });
