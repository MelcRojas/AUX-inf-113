function lote() {
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var f = 1;
    for (var i = 1; i <= a; i++) {
        f = f * i;
    }
    var g = 1;
    for (var i = 1; i <= b; i++) {
        g = g * i;
    }
    var p = a - b;
    var h = 1;
    for (var i = 1; i <= p; i++) {
        h = h * i;
    }
    var z = f / (g * h);
    document.getElementById("res").innerHTML = z;
}
