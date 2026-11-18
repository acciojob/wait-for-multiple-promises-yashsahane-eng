//your JS code here. If required.
const output = document.getElementById("output");

const startTime = performance.now();

function createPromise() {
    return new Promise(resolve => {
        const delay = Math.floor(Math.random() * 3) + 1;

        setTimeout(() => {
            resolve(delay);
        }, delay * 1000);
    });
}

const promises = [
    createPromise(),
    createPromise(),
    createPromise()
];

Promise.all(promises).then(results => {
    const totalTime = (performance.now() - startTime) / 1000;

    output.innerHTML = "";

    results.forEach((time, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>Promise ${index + 1}</td>
            <td>${time.toFixed(3)}</td>
        `;

        output.appendChild(row);
    });

    const totalRow = document.createElement("tr");

    totalRow.innerHTML = `
        <td><strong>Total</strong></td>
        <td><strong>${totalTime.toFixed(3)}</strong></td>
    `;

    output.appendChild(totalRow);
});