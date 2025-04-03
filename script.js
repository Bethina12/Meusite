document.addEventListener("DOMContentLoaded", function () {
    // Efeito de rolagem suave ao clicar nos links internos
    document.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute("href"));
            destino.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Captura o formulário e adiciona evento de envio
    document.getElementById("formDieta").addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio padrão

        // Capturando os valores dos inputs
        let peso = document.getElementById("peso").value;
        let altura = document.getElementById("altura").value;
        let idade = document.getElementById("idade").value;
        let objetivo = document.getElementById("objetivo").value;
        let calorias = document.getElementById("calorias").value;

        // Verifica se todos os campos estão preenchidos
        if (peso === "" || altura === "" || idade === "" || objetivo === "" || calorias === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Gera um resultado fictício de dieta
        let resultadoHTML = `
            <h3>🔥 Sua Dieta Personalizada 🔥</h3>
            <p><strong>Peso:</strong> ${peso} kg</p>
            <p><strong>Altura:</strong> ${altura} cm</p>
            <p><strong>Idade:</strong> ${idade} anos</p>
            <p><strong>Objetivo:</strong> ${objetivo}</p>
            <p><strong>Calorias diárias:</strong> ${calorias}</p>
            <hr>
            <h4>📌 Café da Manhã:</h4>
            <p>Omelete + Fruta + Café sem açúcar</p>
            <h4>🥗 Almoço:</h4>
            <p>Frango grelhado + Arroz integral + Brócolis</p>
            <h4>🍎 Lanche da Tarde:</h4>
            <p>Iogurte + Castanhas</p>
            <h4>🍽️ Jantar:</h4>
            <p>Sopa de legumes com carne magra</p>
        `;

        // Exibe o resultado na tela com efeito de fade-in
        let resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = resultadoHTML;
        resultadoDiv.style.opacity = 0;
        resultadoDiv.style.display = "block";

        let opacidade = 0;
        let fadeIn = setInterval(() => {
            if (opacidade >= 1) {
                clearInterval(fadeIn);
            }
            resultadoDiv.style.opacity = opacidade;
            opacidade += 0.1;
        }, 50);
    });
});
