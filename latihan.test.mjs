import { expect } from 'chai';
import { kurang, bagi, kali, tambah } from './math.mjs';

describe('Pengujian Fungsi Pengurangan dan Pembagian (Latihan 1)', function () {
    it('seharusnya mengembalikan hasil negatif saat mengurangkan angka lebih kecil dari yang dikurangi', function () {
        expect(kurang(5, 10)).to.equal(-5);
    });
    it('seharusnya mengembalikan 0 saat mengurangkan dua angka yang sama', function () {
        expect(kurang(2, 2)).to.equal(0);
    });
    it('seharusnya mengembalikan hasil pembagian yang benar saat input valid', function () {
        expect(bagi(10, 2)).to.equal(5);
    });
    it('seharusnya mengembalikan error saat membagi dengan 0', function () {
        expect(() => bagi(10, 0)).to.throw('Tidak bisa membagi dengan nol');
    });

});

describe('Pengujian Kasus Negatif Fungsi Tambah dan Kali (Latihan 2)', function () {
    it('seharusnya mengembalikan error jika input "tambah" berupa string', function () {
        expect(() => tambah("a", 2)).to.throw('Input harus berupa angka');
    });
    it('seharusnya mengembalikan error jika input "tambah" berupa null', function () {
        expect(() => tambah(null, 2)).to.throw('Input tidak boleh null');
    });
    it('seharusnya mengembalikan error jika input "kali" berupa string', function () {
        expect(() => kali("a", 3)).to.throw('Input harus berupa angka');
    });
    it('seharusnya mengembalikan error jika input "kali" berupa null', function () {
        expect(() => kali(null, 3)).to.throw('Input tidak boleh null');
    });
});
