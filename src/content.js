// Função para remover o blur de todos os elementos
// Vocẽê pode testar isso em suas aplicações
function removeBlur() {
    document.querySelectorAll('*').forEach((element) => {
        element.style.filter = 'none';
    });
}

// Função para verificar o status da API e remover o blur se apropriado
function checkAndRemoveBlur() {
    fetch("https://api.mateusdata.com.br/math")
        .then(response => response.json())
        .then(data => {
            // Verifica o valor de 'elng' na resposta
            if (data?.status) {
                // Remove o blur se a condição for atendida
                //console.log(data?.status)
                removeBlur();
            } else {
                // Caso contrário, registra uma mensagem de erro
                console.log("Você não está cadastrado no sistema");
                clearInterval(setInterval)

            }
        })
        .catch(error => {
            console.error("Erro ao buscar dados da API:", error);
            clearInterval(setInterval)
        });
}

// Remove o blur a cada 1 segundo (1000 milissegundos) se a condição for atendida
setInterval(checkAndRemoveBlur, 5000);
