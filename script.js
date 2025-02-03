document.getElementById("matrixForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        alert("Prosim, vnesite datum rojstva.");
        return;
    }

    // Convert birthdate to numbers
    let numbers = birthdate.replaceAll("-", "").split("").map(Number);

    // Sum digits recursively until single number (numerology-style calculation)
    function reduceToSingleDigit(numArr) {
        let sum = numArr.reduce((a, b) => a + b, 0);
        return sum > 9 ? reduceToSingleDigit(String(sum).split("").map(Number)) : sum;
    }

    let destinyNumber = reduceToSingleDigit(numbers);

    // Simple interpretation of destiny numbers
    let meanings = {
        1: "Vodja - imate močno voljo in ste rojeni za vodenje.",
        2: "Diplomat - ste občutljivi, empatični in odlično sodelujete z drugimi.",
        3: "Umetnik - ustvarjalnost in komunikacija sta vaši močni strani.",
        4: "Graditelj - ste zanesljivi, trdni in praktični.",
        5: "Raziskovalec - ljubite svobodo in spremembe.",
        6: "Skrbnik - družina in harmonija sta za vas ključni vrednoti.",
        7: "Mislec - filozofski in intuitivni pogled na svet.",
        8: "Izvajalec - osredotočeni ste na uspeh in materialni svet.",
        9: "Humanist - imate močno željo pomagati drugim."
    };

    let resultText = `Vaša številka usode je <strong>${destinyNumber}</strong>. ${meanings[destinyNumber]}`;

    document.getElementById("matrixOutput").innerHTML = resultText;
    document.getElementById("result").classList.remove("hidden");
});
