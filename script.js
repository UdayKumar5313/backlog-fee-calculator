const fees = { 1: 360, 2: 460, 3: 560, 4: 760 };

function calculateFee(sem) {
    const input = document.getElementById(`sem${sem}-input`);
    const feeDisplay = document.getElementById(`sem${sem}-fee`);
    const backlogs = parseInt(input.value) || 0;

    let fee = 0;
    if (backlogs >= 1) {
        fee = backlogs >= 4 ? fees[4] : fees[backlogs];
    }

    feeDisplay.textContent = fee;
    updateTotalFee();
}

function updateTotalFee() {
    let total = 0;

    for (let i = 1; i <= 8; i++) {
        const fee = parseInt(document.getElementById(`sem${i}-fee`).textContent) || 0;
        total += fee;
    }

    document.getElementById("total-fee").textContent = total;
}

function resetAll() {
    for (let i = 1; i <= 8; i++) {
        document.getElementById(`sem${i}-input`).value = "";
        document.getElementById(`sem${i}-fee`).textContent = "0";
    }
    document.getElementById("total-fee").textContent = "0";
}
