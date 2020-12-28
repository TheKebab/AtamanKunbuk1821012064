var express = require("express");
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render("mekanlar-liste", {
    baslik: "Anasayfa",
    sayfaBaslik: {
      siteAd: "Mekan32",
      aciklama: "Isparta civarındaki mekanları keşfedin!",
    },
    footer:"Ataman Kunbuk",
    mekanlar: [
      {
        ad: "Starbucks",
        adres: "Centrum Garden",
        puan: "3",
        imkanlar: ["kahve", "çay", "pasta"],
        mesafe: "10km",
      },
      {
        ad: "Hell-Hot Fast Food",
        adres: "Iyaş AVM",
        puan: "2",
        imkanlar: ["Dürüm", "Döner", "Hamburger"],
        mesafe: "5km",
      },
      {
        ad: "For Sale Pub",
        adres: "Iyaş AVM",
        puan: "5",
        imkanlar: ["Bira", "Sandviç", "Fıstık"],
        mesafe: "5km",
      },
      {
        ad: "Benim Adım İskender",
        adres: "Iyaş AVM",
        puan: "4",
        imkanlar: ["İskender", "Kebap","Döner"],
        mesafe: "5km",
      },
      {
        ad: "The Pastane",
        adres: "Çünür",
        puan: "4",
        imkanlar: ["Pasta", "Börek", "Çay"],
        mesafe: "10km",
      },

    ],
  });
};

const mekanBilgisi = function (req, res, next) {
  res.render("mekan-detay", {
    baslik: "Mekan Bilgisi",
    sayfaBaslik: "Starbucks",
    footer:"Ataman Kunbuk",
    mekanBilgisi: {
      ad: "Starbucks",
      adres: "Centrum Garden",
      puan: "3",
      imkanlar: ["kahve", "çay", "pasta"],
      koordinatlar: {
        enlem: 37.781885,
        boylam: 30.566034,
      },
      saatler: [
        {
          gunler: "Pazartesi-Cuma",
          acilis: "7:00",
          kapanis: "23:00",
          kapali: false,
        },
        {
          gunler: "Cumartesi",
          acilis: "9:00",
          kapanis: "22:30",
          kapali: false,
        },
        {
          gunler: "Pazar",
          kapali: true,
        },
      ],
      yorumlar: [
        {
          yorumYapan: "Ataman Kunbuk",
          puan: "3",
          tarih: "1 Aralık 2020",
          yorumMetni: "Denendiniz.",
        },
      ],
    },
  });
};

const yorumEkle = function (req, res, next) {
  res.render("yorum-ekle", { title: "Yorum Ekle" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
};
