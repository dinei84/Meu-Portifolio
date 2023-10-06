document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('freteForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const frete = document.getElementById('frete').value;
        const carga = document.getElementById('carga').value;
        const descarga = document.getElementById('descarga').value;

        // Obtenha todas as entradas existentes de frete do localStorage
        const fretes = JSON.parse(localStorage.getItem('fretes')) || [];

        // Adicione a nova entrada de frete à lista
        fretes.push({ frete, carga, descarga });

        // Armazene a lista atualizada no localStorage
        localStorage.setItem('fretes', JSON.stringify(fretes));

        // Atualize a página atual
        window.location.reload();
    });
});
