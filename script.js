document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formDieta").addEventListener("submit", function (e) {
        e.preventDefault();

        // Captura os valores dos inputs
        let peso = document.getElementById("peso").value;
        let altura = document.getElementById("altura").value;
        let idade = document.getElementById("idade").value;
        let objetivo = document.getElementById("objetivo").value;
        let calorias = document.getElementById("calorias").value;

        // Verificação básica
        if (!peso || !altura || !idade || !objetivo || !calorias) {
            alert("Preencha todos os campos!");
            return;
        }

        // Geração de plano de dieta personalizado
        let dieta = {
            emagrecer: [
                "🥗 Salada + Frango grelhado + Arroz integral",
                "🍎 Fruta + Iogurte natural",
                "🍽️ Sopa de legumes"
            ],
            ganho_massa: [
                "🥞 Crepioca + Queijo + Suco Natural",
                "🍚 Arroz + Feijão + Carne Vermelha",
                "🥑 Abacate + Pão integral"
            ],
            definir: [
                "🍳 Omelete + Fruta",
                "🍗 Peito de frango + Brócolis",
                "🍠 Batata doce + Ovos cozidos"
            ]
        };

        let planoGerado = dieta[objetivo];

        // Exibir resultado
        let resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `
            <h3>🔥 Sua Dieta Personalizada 🔥</h3>
            <p><strong>Objetivo:</strong> ${objetivo.replace("_", " ")}</p>
            <p><strong>Calorias diárias:</strong> ${calorias} kcal</p>
            <hr>
            <h4>📌 Café da Manhã:</h4> <p>${planoGerado[0]}</p>
            <h4>🍛 Almoço:</h4> <p>${planoGerado[1]}</p>
            <h4>🍽️ Jantar:</h4> <p>${planoGerado[2]}</p>
        `;
        resultadoDiv.style.display = "block";
    });
});
