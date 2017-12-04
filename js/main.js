//function reverses the order of characters in a word

var button = document.getElementById('button-reverse');

function reverseString() {

    var newString = document.getElementById('to-reverse').value;
    var result = document.getElementById('reverse-result');

    result.value = newString.split('').reverse().join('');

}
button.addEventListener('click', function () {
    reverseString();
})

var button = document.getElementById('button-reverse');