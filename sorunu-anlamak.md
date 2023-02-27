# Sorunu Anlamak:
1. 1 butonuna basılmasından, güncellenen değerimizin render edilmesine kadar olan uygulama adımları nelerdir? 
Her adım için kodun hangi bölümünün geçerli olduğunu listeleyin.
* Kullanıcı 1 butonuna tıkladı.
* Butona basınca addOne fonksiyonuna gidiyoruz. 
* Fonksiyon dispatch ile ADD_ONE aksiyonunu uygula diyor.
* reducer içinde case ADD_ONE durumuna gidiyor.
* ilk baştaki state değerlerimizi spread operatörü ile tutuyoruz ve totale 1 ekliyoruz.
* Oluşan total değerini TotalDisplay fonksiyonunda readonly value değerine atıp textareada görünür kılıyoruz.
* Bu süreci ve TotalDisplay bileşenini kapsayan App fonksiyonunu index.js'de renderlıyoruz.
* TotalDisplay total artı 1'i gösterdi.

2- Tüm sayılar aktif edilmeli
* Hesap makinemiz şu an sadece 1 butonuna basınca otomatik olarak ekleme yapıyor. 
* Herhangi bir sayı butonuna basınca değer kadar işlemi yapmalı.
