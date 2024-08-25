function getNamesArray() {
    const namesInput = document.getElementById('namesInput').value;
    return namesInput.split(',').map(name => name.trim()).filter(name => name);
}

function getQuantity() {
    return parseInt(document.getElementById('quantityInput').value);
}

function validateInputs(namesArray, quantity) {
    if (namesArray.length === 0) {
        alert('Por favor, insira ao menos um nome.');
        return false;
    }
    if (isNaN(quantity) || quantity < 1) {
        alert('Por favor, insira uma quantidade válida.');
        return false;
    }
    if (quantity > namesArray.length) {
        alert('A quantidade de nomes a sortear não pode ser maior que o número de nomes inseridos.');
        return false;
    }
    return true;
}

function drawNames(namesArray, quantity) {
    const selectedNames = [];
    const usedIndexes = new Set();

    while (selectedNames.length < quantity) {
        const randomIndex = Math.floor(Math.random() * namesArray.length);
        if (!usedIndexes.has(randomIndex)) {
            selectedNames.push(namesArray[randomIndex]);
            usedIndexes.add(randomIndex);
        }
    }

    return selectedNames;
}

function displayResult(names) {
    document.getElementById('result').textContent = `Nomes sorteados: ${names.join(', ')}`;
}

function setupEventListeners() {
    document.getElementById('drawButton').addEventListener('click', function() {
        const namesArray = getNamesArray();
        const quantity = getQuantity();
        if (validateInputs(namesArray, quantity)) {
            const selectedNames = drawNames(namesArray, quantity);
            displayResult(selectedNames);
        }
    });
}

document.addEventListener('DOMContentLoaded', setupEventListeners);
