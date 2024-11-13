function heading() {
    //document.getElementById("firstParagraph").style.fontSize='30px'; 
    //window.alert('Heading color will be changed');
    //prompt('Heading color will be changed');
    document.getElementById("firstParagraph").style.color = 'Red';
    //window.alert("Look at your heading color");
}
function printFunction() {
    window.print();
}

let x = [1, 2, 3, 4, 5];
x[2] = 10;
x.push(6);
document.write(x);

// arrow function
const p = (a, b) => {
    return a * b;
}
document.write("<br>", p(2, 3));
