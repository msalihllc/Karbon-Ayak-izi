// Değer artırma veya azaltma fonksiyonu
function changeValue(id, delta) {
    var input = document.getElementById(id);
    var value = parseFloat(input.value) + delta;
    if (value >= parseFloat(input.min)) {
        input.value = value;
    }
}

// Karbon ayak izi hesaplama fonksiyonu
function hesapla() {
    // Uçuş verileri
    var ucusSuresi = parseFloat(document.getElementById("ucusSuresi").value);
    var ucusSayisi = parseInt(document.getElementById("ucusSayisi").value);

    // Kara ulaşımı verileri
    var yakitTuru = document.getElementById("yakitTuru").value;
    var yillikYakıt = parseInt(document.getElementById("yillikYakıt").value);

    // Elektrik tüketimi verisi
    var elektrikTuketimi = parseInt(document.getElementById("elektrikTuketimi").value);
    var co2Elektrik = elektrikTuketimi * 0.492 / 1000;

    // Isınma verileri
    var isinmaYakitTuru = document.getElementById("isinmaYakitTuru").value;
    var isinmaTuketim = parseInt(document.getElementById("isinmaTuketim").value);

    // Uçuş karbon salınımı
    var ucusKarbon = ucusSuresi * ucusSayisi * 0.25; // Örnek katsayılar ile hesaplandı

    // Kara ulaşımı karbon salınımı
    var karaKarbon = yillikYakıt * 0.0025; // Yine örnek katsayılar

    // Isınma karbon salınımı (Örnek olarak, ısınmada doğalgaz tüketimi katsayısı)
    var isinmaKarbon = isinmaTuketim * 0.002; 

    // Toplam karbon ayak izi hesaplama
    var toplamKarbon = ucusKarbon + karaKarbon + co2Elektrik + isinmaKarbon;

    // Sonucu ekrana yazdırma
    document.getElementById("sonuc").innerText = toplamKarbon.toFixed(2);
}
