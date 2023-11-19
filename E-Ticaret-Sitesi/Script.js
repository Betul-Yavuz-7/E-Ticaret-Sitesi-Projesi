// JavaScript Document
$(document).ready(function(){

    /* Ufak cihazlar için menü açma butonunun işlemleri >>>>> */
    $("#HeaderMenuButtonArea").on("click", function(){
        $("#HeaderMenuButtonLimitationArea").slideToggle("slow");
    });
    /* Ufak cihazlar için menü açma butonunun işlemleri <<<<< */

    /* Main ve footer alanı için üstten boşluk hesaplamaları >>>>> */
    var DokumanGenisligi    =   $(window).outerWidth();
    if(!$("#HeaderImageArea").length){
        if (DokumanGenisligi>=1200){   /* XL */
            var OfsetDegeri     =   108;
        }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){   /* L */
            var OfsetDegeri     =   98;
        }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){   /* M */
            var OfsetDegeri     =   88;
        }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){   /* S */
            var OfsetDegeri     =   78;   
        }else if(DokumanGenisligi<=575){   /* XS */
            var OfsetDegeri     =   78;
        }
    }else{
        if (DokumanGenisligi>=1200){   /* XL */
            var OfsetDegeri     =   148;
        }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){   /* L */
            var OfsetDegeri     =   138;
        }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){   /* M */
            var OfsetDegeri     =   118;
        }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){   /* S */
            var OfsetDegeri     =   108;   
        }else if(DokumanGenisligi<=575){   /* XS */
            var OfsetDegeri     =   103;
        }
    }
    $("main").css("top", OfsetDegeri);
    $("footer").css("top", OfsetDegeri);

    $(window).resize(function(){
        var DokumanGenisligi    =   $(window).outerWidth();
        if(!$("#HeaderImageArea").length){
            if (DokumanGenisligi>=1200){   /* XL */
                var OfsetDegeri     =   108;
            }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){   /* L */
                var OfsetDegeri     =   98;
            }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){   /* M */
                var OfsetDegeri     =   88;
            }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){   /* S */
                var OfsetDegeri     =   78;   
            }else if(DokumanGenisligi<=575){   /* XS */
                var OfsetDegeri     =   78;
            }
        }else{
            if (DokumanGenisligi>=1200){   /* XL */
                var OfsetDegeri     =   148;
            }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){   /* L */
                var OfsetDegeri     =   138;
            }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){   /* M */
                var OfsetDegeri     =   118;
            }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){   /* S */
                var OfsetDegeri     =   108;   
            }else if(DokumanGenisligi<=575){   /* XS */
                var OfsetDegeri     =   103;
            }
        }
        $("main").css("top", OfsetDegeri);
        $("footer").css("top", OfsetDegeri);
    });
    /* Main ve footer alanı için üstten boşluk hesaplamaları <<<<< */

    /* SSS içerik göster / gizle >>>>> */
    $.SSSIceriginiGoster    =   function(ElemanID){
        var SoruIDsi        =   ElemanID;
        var IslenecekAlan   =   "#" + SoruIDsi;

        $(".PageFrameAnswer").slideUp();
        $(IslenecekAlan).parent().find(".PageFrameAnswer").slideToggle();
    }
    /* SSS içerik göster / gizle <<<<< */

    /* Alışveriş sepeti fatura ve teslimat adresleri formu gönder işlemi >>>>> */
    $.AlisverisSepetiFormGonder =   function(){
        $("form").submit();
    }
    /* Alışveriş sepeti fatura ve teslimat adresleri formu gönder işlemi <<<<< */

    /* Alışveriş sepeti ödeme sistemleri alanları açma / kapatma işlemi >>>>> */
    $.AlisverisSepetiOdemeSayfasiIcinKrediKartiSistemiSecildi      =   function(){
        $("#PaymentAreaCreditCard").css("display", "block");
        $("#PaymentAreaMobilePayment").css("display", "none");
        $("#PaymentAreaBankTransfer").css("display", "none");
    }

    $.AlisverisSepetiOdemeSayfasiIcinMobilOdemeSistemiSecildi      =   function(){
        $("#PaymentAreaCreditCard").css("display", "none");
        $("#PaymentAreaMobilePayment").css("display", "block");
        $("#PaymentAreaBankTransfer").css("display", "none");
    }

    $.AlisverisSepetiOdemeSayfasiIcinBankaHavalesiSistemiSecildi   =   function(){
        $("#PaymentAreaCreditCard").css("display", "none");
        $("#PaymentAreaMobilePayment").css("display", "none");
        $("#PaymentAreaBankTransfer").css("display", "block");
    }
    /* Alışveriş sepeti ödeme sistemleri alanları açma / kapatma işlemi <<<<< */

    /* Ürün detay sayfası resim değiştirme işlemi >>>>> */
    $.UrunDetaySayfasiIcinResimDegistir   =   function(ResimDegeri){
        var DegisecekResimDosyasiYolu  =   "images\erkek-hirka-1.png";
        var ResimOlustur               =    DegisecekResimDosyasiYolu + ResimDegeri;

        $("#BigImage").attr("src", ResimOlustur);
    }
    /* Ürün detay sayfası resim değiştirme işlemi <<<<< */

    /* Slayt alanı >>>>> */
    $(function(){
        var SlaytElementi                   =   $(".SlideArea");
        var SlaytListeOlusturmaElementi     =   SlaytElementi.find(".SlideImageArea");
        var SlaytListesiUzunlugu            =   SlaytListeOlusturmaElementi.find(".SlideImage").length;
        var SlaytIcinDokumanGenisligi       =   SlaytElementi.outerWidth();
        var ToplamGenislik                  =   SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;
        var ResimSirasi                     =   0;
        var KayacakAlan                     =   0;

        SlaytListeOlusturmaElementi.find(".SlideImage").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik);

        $(window).resize(function(){
            SlaytElementi                   =   $(".SlideArea");
            SlaytListeOlusturmaElementi     =   SlaytElementi.find(".SlideImageArea");
            SlaytListesiUzunlugu            =   SlaytListeOlusturmaElementi.find(".SlideImage").length;
            SlaytIcinDokumanGenisligi       =   SlaytElementi.outerWidth();
            ToplamGenislik                  =   SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;

            SlaytListeOlusturmaElementi.find(".SlideImage").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik).css("margin-left", "-" + (ResimSirasi * SlaytIcinDokumanGenisligi) + "px");
        });

        $.OtomatikDegistir          =   function(){
            if(ResimSirasi < SlaytListesiUzunlugu - 1){
                ResimSirasi++;
                KayacakAlan         =   "-" + (ResimSirasi * SlaytIcinDokumanGenisligi) + "px";
            }else{
                ResimSirasi         =   0;
                KayacakAlan         =   0;
            }

            SlaytListeOlusturmaElementi.stop().animate({
                marginLeft:KayacakAlan
            }, 500, function(){
                SlaytElementi                   =   $(".SlideArea");
                SlaytListeOlusturmaElementi     =   SlaytElementi.find(".SlideImageArea");
                SlaytListesiUzunlugu            =   SlaytListeOlusturmaElementi.find(".SlideImage").length;
                SlaytIcinDokumanGenisligi       =   SlaytElementi.outerWidth();
                ToplamGenislik                  =   SlaytListesiUzunlugu * SlaytIcinDokumanGenisligi;

                SlaytListeOlusturmaElementi.find(".SlideImage").width(SlaytIcinDokumanGenisligi).end().width(ToplamGenislik).css("margin-left", "-" + (ResimSirasi * SlaytIcinDokumanGenisligi) + "px");
            });
        }

        var SlaytOynat              =   setInterval("$.OtomatikDegistir()", 3000);
    });
    /* Slayt alanı <<<<< */
});
