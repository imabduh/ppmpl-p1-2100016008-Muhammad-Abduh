function tambah(a, b) {
    if (a === null || b === null) {
        throw new Error('Input tidak boleh null');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input harus berupa angka');
    }
    return a + b;
}

function kali(a, b) {
    if (a === null || b === null) {
        throw new Error('Input tidak boleh null');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input harus berupa angka');
    }
    return a * b;
}

function kurang(a, b) {
    if (a === null || b === null) {
        throw new Error('Input tidak boleh null');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input harus berupa angka');
    }
    return a - b;
}

function bagi(a, b) {
    if (a === null || b === null) {
        throw new Error('Input tidak boleh null');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Input harus berupa angka');
    }
    if (b === 0) {
        throw new Error('Tidak bisa membagi dengan nol');
    }
    return a / b;
}

export { tambah, kali, bagi, kurang };
