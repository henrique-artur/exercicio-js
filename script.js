function questao1() {
    function maior_menor(a, b, c, d, e) {
        var integers = [a, b, c, d, e];
        integers.sort();
        alert("O menor: " + integers[0] + "\nO maior: " + integers[4]);
    }

    maior_menor(
        document.getElementById('int1').value,
        document.getElementById('int2').value,
        document.getElementById('int3').value,
        document.getElementById('int4').value,
        document.getElementById('int5').value
    );
}

function questao2() {
    function vogal(c) {
        return (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') ? 1 : 0;
    }

    alert(vogal(document.getElementById('char1').value));
}

function questao3() {
    function limites(li, ls) {
        if (li % 2 == 0)
            li += 2;
        else
            li += 1;

        var pares = [];
        var soma = 0;
        for (li; li < ls; li += 2) {
            pares.push(li);
            soma += li;
        }

        return {
            paresDoIntervalo: pares,
            somaDosPares: soma
        };
    }

    saida = limites(
        parseInt(document.getElementById('limite1').value),
        parseInt(document.getElementById('limite2').value)
    );
    alert('Intervalo: ' + saida.paresDoIntervalo + '\nSoma: ' + saida.somaDosPares);
}

function questao4() {
    function ordem(a, b, c) {
        elementos = [a, b, c];
        elementos.sort();
        return elementos;
    }

    alert(ordem(
        document.getElementById('para').value,
        document.getElementById('parb').value,
        document.getElementById('parc').value
    ));
}

function questao5() {
    function positivo_negativo(x) {
        return x >= 0;
    }

    alert(positivo_negativo(document.getElementById('xmaiormenor').value));
}

function questao6() {
    function par_impar(x) {
        return x % 2 == 0;
    }

    alert(par_impar(document.getElementById('xparimpar').value));
}