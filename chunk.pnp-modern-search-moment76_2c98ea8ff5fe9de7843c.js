(window.webpackJsonp_1a86ce4e35bac7ae60ca710fe0988d33=window.webpackJsonp_1a86ce4e35bac7ae60ca710fe0988d33||[]).push([[125],{"Cda/":function(e,a,i){!function(e){"use strict";var a={ss:"sekundė_sekundžių_sekundes",m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"};function i(e,a,i,s){return a?n(i)[0]:s?n(i)[1]:n(i)[2]}function s(e){return e%10==0||e>10&&e<20}function n(e){return a[e].split("_")}function _(e,a,_,d){var t=e+" ";return 1===e?t+i(0,a,_[0],d):a?t+(s(e)?n(_)[1]:n(_)[0]):d?t+n(_)[1]:t+(s(e)?n(_)[1]:n(_)[2])}e.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:function(e,a,i,s){return a?"kelios sekundės":s?"kelių sekundžių":"kelias sekundes"},ss:_,m:i,mm:_,h:i,hh:_,d:i,dd:_,M:i,MM:_,y:i,yy:_},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}})}(i("FjVC"))}}]);