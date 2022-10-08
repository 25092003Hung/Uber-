var btnTinhTien = document.getElementById('btn-tinhtien');
var km = document.getElementById('km');
var time = document.getElementById('waittime');
var car1 = document.getElementById('uberX');
var car2 = document.getElementById('uberSUV');
var car3 = document.getElementById('uberBlack');
var xuathien = document.getElementById('divThanhTien');
var thanhTien = document.getElementById('xuatTien')
var tien;
btnTinhTien.onclick = function()
{
    if (km.value ==='' || time.value ==='')
    {
        alert('Vui long chon loai xe');
        return;
    }
    if(car1.checked ==false && car2.checked ==false && car3.checked ==false )
    {
        alert('Vui long chon loai xe');
        return;
    }
    if(isNaN(km.value) || isNaN(time.value))
    {
        alert('Vui long nhap so hop le');
        return;
    }
    xuathien.style.display = 'block';
    if(km.value>=1 && km.value<=20 && car1.checked==true)
    {
         tien = (km.value-1) * 12000 + 8000 + time.value *2000 ;
         thanhTien.innerHTML = tien;
    }
    if(km.value >=21 && car1.checked==true)
    {
         tien = 236000 + (km.value-20)*10000 + time.value *2000;
         thanhTien.innerHTML = tien;
    }
    if(km.value>=1 && km.value<=20 && car2.checked==true)
    {
         tien = (km.value-1) * 14000 + 9000 +time.value * 3000;
         thanhTien.innerHTML = tien;
    }
    if(km.value >=21 && car2.checked==true)
    {
         tien = 275000 + (km.value-20)*12000 + time.value *3000;
         thanhTien.innerHTML = tien;
    }
    if(km.value>=1 && km.value<=20 && car3.checked==true)
    {
         tien = (km.value-1) * 16000 + 10000 + time.value * 4000; 
         thanhTien.innerHTML = tien;
    }
    if(km.value >=21 && car3.checked==true)
    {
         tien = 314000 + (km.value-20)*14000 + time.value *4000;
         thanhTien.innerHTML = tien;
    }
}


// 
var nameCarA = document.getElementById('nameCarA');
var suDungA = document.getElementById('suDungA');
var donGiaA = document.getElementById('donGiaA');
var thanhTienA = document.getElementById('thanhTienA');
var nameCarB = document.getElementById('nameCarB');
var suDungB = document.getElementById('suDungB');
var donGiaB = document.getElementById('donGiaB');
var thanhTienB = document.getElementById('thanhTienB');
var valuEs = document.getElementById('valuEs');
var donGiaC = document.getElementById('donGiaC');
var thanhTienC = document.getElementById('thanhTienC');
var total = document.getElementById('total');
var valueTotal = document.getElementById('valueTotal');
var inhoadon = document.getElementById('inhoadon');

inhoadon.onclick = function()
{
     var bienMot;
     var bienHai;
     if(car1.checked == true)
     {
          nameCarA.innerText = 'Uberx';
          nameCarB.innerText = 'Uberx';
          suDungA.innerText  = '1km';
          suDungB.innerText  = (km.value-1) +'km';
          valuEs.innerText = time.value +'phut';
          donGiaA.innerText = '8000vnd';
          donGiaB.innerText = '12000vnd';
          donGiaC.innerText = '2000vnd';
          bienMot = thanhTien.innerText - 8000 - time.value * 2000;
          thanhTienA.innerHTML = '8000';
          thanhTienB.innerText = bienMot;
          bienHai = time.value * 2000;
          thanhTienC.innerText = bienHai;
          valueTotal.innerHTML = thanhTien.innerHTML;
     }
     if(car2.checked == true)
     {
          nameCarA.innerText = 'Uber SUV';
          nameCarB.innerText = 'Uber SUV';
          suDungA.innerText  = '1km';
          suDungB.innerText  = (km.value-1) +'km';
          valuEs.innerText = time.value +'phut';
          donGiaA.innerText = '9000vnd';
          donGiaB.innerText = '14000vnd';
          donGiaC.innerText = '3000vnd';
          bienMot = thanhTien.innerText - 9000 - time.value * 3000;
          thanhTienA.innerHTML = '9000';
          thanhTienB.innerText = bienMot;
          bienHai = time.value * 3000;
          thanhTienC.innerText = bienHai;
          valueTotal.innerHTML = thanhTien.innerHTML;
     }
     if(car3.checked == true)
     {
          nameCarA.innerText = 'Uber Black';
          nameCarB.innerText = 'Uber Black';
          suDungA.innerText  = '1km';
          suDungB.innerText  = (km.value-1) +'km';
          valuEs.innerText = time.value +'phut';
          donGiaA.innerText = '10000vnd';
          donGiaB.innerText = '16000vnd';
          donGiaC.innerText = '4000vnd';
          bienMot = thanhTien.innerText - 10000 - time.value * 4000;
          thanhTienA.innerHTML = '10000';
          thanhTienB.innerText = bienMot;
          bienHai = time.value * 4000;
          thanhTienC.innerText = bienHai;
          valueTotal.innerHTML = thanhTien.innerHTML;
     }
}

