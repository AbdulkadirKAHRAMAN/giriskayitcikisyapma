
let bilgiler=[
    {
      id:1,
      kullaniciAdi:"abdulkadir",
      sifre:"123456",
    }
  ]
  while(true){
    const ilkSoru=prompt("Giriş yapmak için: 1  / Kayıt olmak için: 2 / Çıkış yapmak için: 3");
    if(ilkSoru==="1"){
        const kullaniciAdi = prompt("Kullanıcı adınızı girin");
        const sifre= prompt("Şİfrenizi giriniz");
        let girisBasarili=false;
        for (let index = 0; index < bilgiler.length; index++) {
        if(bilgiler[index].kullaniciAdi===kullaniciAdi && bilgiler[index].sifre===sifre){;
        alert("Başarılı giriş yaptın");
        girisBasarili=true;
        break;
        }
      }
      if(!girisBasarili){
        alert("kayıtlı böyle bir kullanıcı yok");
      }
    }else if(ilkSoru==="2"){
      let yeniKullaniciAdi=prompt("Kullanıcı adınızı olusturun");
      let yeniSifre=prompt("Şifrenizi oluşturun");
      bilgiler.push({
        id: bilgiler.length+1,
        kullaniciAdi: yeniKullaniciAdi,
        sifre: yeniSifre
      });
      alert("Başarılı kayıt oldun");
    }else if(ilkSoru==="3"){
      alert("Çıkış yapıldı");
      break;
    }else{
      alert("Geçersiz giriş! Lütfen geçerli bir secenek girin");
    }
  
  }