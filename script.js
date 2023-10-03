var cel = document.getElementById("cel")
var fah = document.getElementById("fah")  /*targeting the 2 inputs*/

cel.addEventListener('input', function(){
    let c = this.value; /*javascript is case sensitive*/
    let f =(c*9/5) + 32;
    fah.value = f;
})
fah.addEventListener('input', function(){
    let f = this.value; /*javascript is case sensitive*/
    let c = ( f-32 )*5/9;
    cel.value = c;
})

function reset() {
    // Get references to the Celsius and Fahrenheit input fields
    var celInput = document.getElementById("cel");
    var fahInput = document.getElementById("fah");

    // Set the values of the input fields to their initial values
    celInput.value = 0;
    fahInput.value = 32;
}
