var express = require("express");
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render("mekanlar-liste", {
    baslik: "Anasayfa",
    sayfaBaslik: {
      siteAd: "Mekan32",
      aciklama: "Isparta civarındaki mekanları keşfedin!",
    },
    footer: "Kerem Kocaekiz",
    mekanlar: [
      {
        ad: "Starbucks",
        adres: "Centrum Garden",
        puan: "3",
        imkanlar: ["kahve", "çay", "pasta"],
        mesafe: "10km",
      },
      {
        ad: "Gloria Jeans",
        adres: "Iyaş AVM",
        puan: "2",
        imkanlar: ["kahve", "kek", "çay"],
        mesafe: "5km",
      },
      {
        ad: "Sarımsak Gurme",
        adres: "Centrum Garden",
        puan: "5",
        imkanlar: ["Yemek", "Tatlı", "İçecek"],
        mesafe: "10km",
      },
      {
        ad: "Iyaş Bulvar",
        adres: "Iyaş Bulvar",
        puan: "2",
        imkanlar: ["Alışveriş", "Eğlence", "Yemek"],
        mesafe: "8km",
      },
      {
        ad: "Kaktüs Cadde",
        adres: "Iyaş AVM",
        puan: "5",
        imkanlar: ["Yemek", "Tatlı", "İçecek"],
        mesafe: "2km",
      },
    ],
  });
};

const mekanBilgisi = function (req, res, next) {
  res.render("mekan-detay", {
    baslik: "Mekan Bilgisi",
    sayfaBaslik: "Starbucks",
    footer: "Kerem Kocaekiz",
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
          yorumYapan: "Kerem Kocaekiz",
          puan: "3",
          tarih: "1 Aralık 2020",
          yorumMetni: "Kahveleri Çok Kötü",
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
