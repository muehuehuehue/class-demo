








const username  = document.getElementById('username');
const password  = document.getElementById('password');
const confirmPassword  = document.getElementById('confirm_password');

username.addEventListener('input', () => {
    const usernameValue = username.value;
    if (usernameValue.length < 3 || usernameValue.length > 25) {
        console.log('invalid');
    } else {
        console.log('valid');
    }
});


// literal syntax 
// const regex = /pattern/flags;
// const regex1 = new RegExp('pattern', 'flags');

const str = "Holy moly Genseng ggrraaa graaa huang. moly ggrrrraaaaa 3rd affair?!!";

const regex2 = /[^A-Za-z0-9]/g;
const reegex3 = /gra+r/g;
const result1 = regex2.test(str);
const result = str.match(reegex3);
// console.log(result); 
// console.log(result1);
const rejex = /[a-z]/g;
console.log(str.match(rejex));
const uje = /[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;
console.log(uje.test('john@example.com'));