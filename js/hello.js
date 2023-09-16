const calculateArea = () => {
    let height = document.getElementById("height").value;
    let base = document.getElementById("base").value;

    let area = 1/2 * base * height;

    document.getElementById("result").innerHTML = area;
    document.getElementById("button").style = "color: #ff0000";
    // return userName;
}

// function testFunction() {
//     return 42;
// }

// console.log(10);
// console.log(10.5);
// console.log('10.5');
// console.log("10.5");
// console.log(`10.${5}`);
// console.log(`10.${5}` + "123123123");

// console.log(typeof 10);
// console.log(typeof 10.5);
// console.log(typeof '10.5');
// console.log(typeof "10.5");
// console.log(typeof `10.${5}`);
// console.log(typeof (1 != 0));

// const user = {
//     id: 1,
//     name: 'Ivan'
// };
// console.log(typeof user);
// console.log(typeof calculateArea);
// console.log(typeof calculateArea('qwe'));


// console.log(typeof testFunction);