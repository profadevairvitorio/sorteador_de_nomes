document.getElementById('drawButton').addEventListener('click', function() {
    const namesInput = document.getElementById('namesInput').value;
    const quantityInput = parseInt(document.getElementById('quantityInput').value);
    const namesArray = namesInput.split(',').map(name => name.trim()).filter(name => name);

    if (namesArray.length === 0) {
        alert('Por favor, insira ao menos um nome.');
        return;
    }

    if (isNaN(quantityInput) || quantityInput < 1) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if (quantityInput > namesArray.length) {
        alert('A quantidade de nomes a sortear não pode ser maior que o número de nomes inseridos.');
        return;
    }

    const selectedNames = [];
    const usedIndexes = new Set();

    while (selectedNames.length < quantityInput) {
        const randomIndex = Math.floor(Math.random() * namesArray.length);
        if (!usedIndexes.has(randomIndex)) {
            selectedNames.push(namesArray[randomIndex]);
            usedIndexes.add(randomIndex);
        }
    }

    document.getElementById('result').textContent = `Nomes sorteados: ${selectedNames.join(', ')}`;
});
