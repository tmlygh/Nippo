document.addEventListener('DOMContentLoaded', (event) => {
    let fieldCounter = 1;

    document.getElementById('add-button').addEventListener('click', () => {
        fieldCounter++;
        const newField = document.createElement('div');
        newField.innerHTML = `
            <label for="field${fieldCounter}">フィールド ${fieldCounter}:</label>
            <input type="text" id="field${fieldCounter}" name="field${fieldCounter}"><br><br>
        `;
        document.getElementById('input-container').appendChild(newField);
    });
});
