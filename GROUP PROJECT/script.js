function convert() {
    var input = document.getElementById("input").value;
    var base = parseInt(document.getElementById("base").value);
    var output_base = parseInt(document.getElementById("output_base").value);
    var result = document.getElementById("result");

    var decimal = parseInt(input, base);
    var output = decimal.toString(output_base);

    result.innerHTML = "The converted number is : " + output;
}
