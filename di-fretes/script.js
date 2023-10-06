document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('freteForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita o envio padrão do formulário

        const uf = document.getElementById('uf').value;
        const destino = document.getElementById('destino').value;
        const embalagem = document.getElementById('embalagem').value;
        const coleta = document.getElementById('coleta').value;
        const entrega = document.getElementById('entrega').value;
        const cliente = document.getElementById('cliente').value;
        const produto = document.getElementById('produto').value;
        const infoAdicionais = document.getElementById('infoAdicionais').value;

        // Obtenha todas as entradas existentes de frete do localStorage
        const fretes = JSON.parse(localStorage.getItem('fretes')) || [];

        // Adicione a nova entrada de frete à lista
        fretes.push({ 
            uf, 
            destino, 
            embalagem, 
            coleta, 
            entrega, 
            cliente, 
            produto, 
            infoAdicionais 
        });

        // Armazene a lista atualizada no localStorage
        localStorage.setItem('fretes', JSON.stringify(fretes));
    });
});
