let formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let palabra = document.querySelector(".palabra");
    let anagrama = document.querySelector(".anagrama");

    let palabraOrdenada = [];
    let anagramaOrdenado = [];

    for (let i = 0; i < palabra.value.length; i++) {
        palabraOrdenada.push(palabra.value.charAt(i).toLowerCase());
    }

    for (let i = 0; i < anagrama.value.length; i++) {
        anagramaOrdenado.push(anagrama.value.charAt(i).toLowerCase());
    }

    palabraOrdenada = palabraOrdenada.sort();
    anagramaOrdenado = anagramaOrdenado.sort();

    let ok = true;
    if (palabraOrdenada.length === anagramaOrdenado.length) {
        for (let i = 0; i < palabraOrdenada.length; i++) {
            if (palabraOrdenada[i] !== anagramaOrdenado[i]) {
                ok = false;
            }
        }
    } else {
        ok = false;
    }

    if (ok) {
        alert("Anagrama");
        //e.currentTarget.submit();
        //formulario.submit();
        this.submit();
    } else {
        alert("No anagrama");
    }
});