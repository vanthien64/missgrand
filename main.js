var $=document.querySelector.bind(document)
var $$=document.querySelectorAll.bind(document)
var mai=$$('.missvote-header_selection')
//animation cho các cái kéo tới mà hình á nề
document.onscroll=function()
{
    var thien1=370
    var thien11=310
    var thien2=950
    var thien22=1030
    var thien3=500
    var thien4=1900
    var thien44=2020
    var thien5=2000
    var thien55=2200
    var thien6=3300
    var thien66=3450
    var thien7=3200
    var thien77=3300
    var thien8=200
    var thien88=250
    var thien= scrollY
    //cái chữ với phông nền
    if(thien>thien1)
    {
        $('.missvote-body_content_detail').classList.remove('hien1')
        $('.missvote-body_content_detail').classList.add('hien')
    }
    if (thien < thien11)
    {
        $('.missvote-body_content_detail').classList.remove('hien')
        $('.missvote-body_content_detail').classList.add('hien1')
    }
    //ảnh bà tiên
    if(thien>thien3)
    {
        $('.anhtien').classList.remove('hien2')
        $('.anhtien').classList.add('hien')
    }
    if(thien<thien3)
    {
        $('.anhtien').classList.remove('hien')
        $('.anhtien').classList.add('hien2')
    }
    //hoạt động gần đây
    if(thien>thien2)
    {
        $('.hoatdongganday').classList.remove('hien3')
        $('.hoatdongganday').classList.add('hien')
    }
    if(thien < thien22)
    {
        $('.hoatdongganday').classList.remove('hien')
        $('.hoatdongganday').classList.add('hien3')
    }
    //phần 3
    if(thien > thien4)
    {
        $('.phanbadau').classList.remove('hien3')
        $('.phanbadau').classList.add('hien')
    }
    if(thien < thien44)
    {
        $('.phanbadau').classList.remove('hien')
        $('.phanbadau').classList.add('hien3')
    }
    //ảnh
    if(thien > thien5)
    {
        $('.phanbathisinh').classList.remove('hien4')
        $('.phanbathisinh').classList.add('hien11')
    }
    if(thien < thien55)
    {
        $('.phanbathisinh').classList.remove('hien11')
        $('.phanbathisinh').classList.add('hien4')
    }
    //phanchan
    if(thien > thien6)
    {
        $('.khoa').classList.remove('hien5')
        $('.khoa').classList.add('hien11')
    }
    if(thien < thien66)
    {
        $('.khoa').classList.remove('hien11')
        $('.khoa').classList.add('hien5')
    }
    //ảnh logo
    if(thien > thien7)
    {
        $('.anhlogo').classList.remove('hien5')
        $('.anhlogo').classList.add('hien11')
    }
    if(thien < thien77)
    {
        $('.anhlogo').classList.remove('hien11')
        $('.anhlogo').classList.add('hien5')
    }
    // thanhluachon
    if(thien > thien8)
    {
        $('.missvote-header').classList.add('hien6')
        mai.forEach((tinh) =>
        {
        tinh.classList.add('hien7')
        })
    }
    if(thien < thien88)
    {
        $('.missvote-header').classList.remove('hien6')
        mai.forEach((tinh) =>
        {
        tinh.classList.remove('hien7')
        })
    }

}
//chuyển chức năng nề
var thien9= $$('.missvote-header_selection')
thien9.forEach((thien9s,index)=>
{
    thien9s.onclick=function()
    {
        $('.chinh').classList.remove('chinh')
        thien9s.classList.add('chinh')
        $('.chucnang').classList.remove('chucnang')
        $$('.missvote-body_content')[index].classList.add('chucnang')
        window.scrollTo(0, 0);
    }
})
// lấy dữ liệu
var thisinh1=
{
    id:0,
    diemthisinh:0,
    tents:'Hoàng Thị Mai Thảo',
    anh:'./img/anhthisinh/1_maithao.jpg'
}
var thisinh2=
{
    id:2,
    diemthisinh:0,
    tents:'Đoàn Thiên Ân',
    anh:'./img/anhthisinh/10_thienan.jpg'
}
var thisinh3=
{
    id:3,
    diemthisinh:0,
    tents:'Nguyễn Thị Quỳnh Trang',
    anh:'./img/anhthisinh/11_quynhtrang.jpg'
}
var thisinh4=
{
    id:4,
    diemthisinh:0,
    tents:'Phù Thị Phương Trang',
    anh:'./img/anhthisinh/12_phuongtrang.jpg'
}
var thisinh5=
{
    id:5,
    diemthisinh:0,
    tents:'Nguyễn Tiểu Hồng',
    anh:'./img/anhthisinh/13_tieuhong.jpg'
}
var thisinh6=
{
    id:6,
    diemthisinh:0,
    tents:'Đỗ Trần Tuệ Anh',
    anh:'./img/anhthisinh/14_tueanh.jpg'
}
var thisinh7=
{
    id:7,
    diemthisinh:0,
    tents:'Hoàng Thị Kim Chi',
    anh:'./img/anhthisinh/15_kimchi.jpg'
}
var thisinh8=
{
    id:8,
    diemthisinh:0,
    tents:'Bùi Lý Thiên Hương',
    anh:'./img/anhthisinh/16_thienhuong.jpg'
}
var hd1=
{
    
}
var hd2=
{

}
var hd3=
{

}
var hd4=
{

}
var hd5=
{

}
var hd6=
{

}
localStorage.setItem("0", JSON.stringify(thisinh1))
localStorage.setItem("1", JSON.stringify(thisinh2))
localStorage.setItem("2", JSON.stringify(thisinh3))
localStorage.setItem("3", JSON.stringify(thisinh4))
localStorage.setItem("4", JSON.stringify(thisinh5))
localStorage.setItem("5", JSON.stringify(thisinh6))
localStorage.setItem("6", JSON.stringify(thisinh7))
localStorage.setItem("hoatdongganday1", JSON.stringify(hd1))
localStorage.setItem("hoatdongganday2", JSON.stringify(hd2))
localStorage.setItem("hoatdongganday3", JSON.stringify(hd3))
localStorage.setItem("hoatdongganday4", JSON.stringify(hd4))
localStorage.setItem("hoatdongganday5", JSON.stringify(hd5))
localStorage.setItem("hoatdongganday6", JSON.stringify(hd6))

var huyen=$$('.diem')
var tuan=$$('.tenthisinh')
var trinh= $$('.nutbinhchon')
var duong=$$('.anhthisinh')
var thu=$$('.danhsachhoatdongganday')
var thu1=$$('.anhhd')
var thu2=$$('.tenthisinhganday')
var thu3=$$('.idthisinhganday')
var thu4=$$('.mabinhchon')
var thu5=$$('.manguoibinhchon')
var thu6=$$('.thoigianbinhchon')
var date= new Date()
var layngay=date.getDay()
var laythang=date.getMonth()+1
var laynam=date.getFullYear()
var laygio=date.getHours()
var layphut=date.getMinutes()
var laygiay=date.getSeconds()
var laydate=layngay+"/"+laythang+"/"+laynam+" "+laygio+":"+layphut+":"+laygiay
var i=0
var y=0
var t=0
var xephang=$$('.anhxephangthisinh')
var ne3=localStorage.getItem('hoatdongganday1')
var ne4=localStorage.getItem('hoatdongganday2')
var ne5=localStorage.getItem('hoatdongganday3')
var ne6=localStorage.getItem('hoatdongganday4')
var ne7=localStorage.getItem('hoatdongganday5')
var ne8=localStorage.getItem('hoatdongganday6')
var ve1=[]
var ve2=[]
var ve3=[]
var ve4=[]
var ve5=[]
var ve6=[]
var ve1=JSON.parse(localStorage.getItem('hoatdongganday1'))
var ve2=JSON.parse(localStorage.getItem('hoatdongganday2'))
var ve3=JSON.parse(localStorage.getItem('hoatdongganday3'))
var ve4=JSON.parse(localStorage.getItem('hoatdongganday4'))
var ve5=JSON.parse(localStorage.getItem('hoatdongganday5'))
var ve6=JSON.parse(localStorage.getItem('hoatdongganday6'))
var tam=
{
    id:0,
    diemthisinh:0,
    tenthisinh:'' 
}
while(i<trinh.length-1)
{
    var ne=JSON.parse(localStorage.getItem(i))
    var ne2=JSON.parse(localStorage.getItem((i+1)))
    if(ne.diemthisinh < ne2.diemthisinh)
    {
        tam=ne
        ne=ne2
        ne2=tam
        localStorage.setItem(i,JSON.stringify(ne));
        localStorage.setItem(i+1,JSON.stringify(ne2));
    }
    xephang[i].setAttribute('src',ne.anh)
    i=i+1;
}
xephang[i].setAttribute('src',ne2.anh)
trinh.forEach((trinhs,index)=>
{
    var ne=JSON.parse(localStorage.getItem(index))
    console.log(ne)
    huyen[index].innerText=JSON.parse(ne.diemthisinh)
    tuan[index].innerText=ne.tents
    duong[index].setAttribute('src',ne.anh)
    trinhs.onclick=function()
    {
        var a=
        {
            diemthisinh:0
        }
        var b=
        {
            tents:""
        }
        var c=
        {
            anh:""
        }
        var ne=JSON.parse(localStorage.getItem(index))
        var ne2=JSON.parse(localStorage.getItem(index-1))
        ne.diemthisinh+=1
        localStorage.setItem(index,JSON.stringify(ne));
        var hoa1=localStorage.getItem(index);
        huyen[index].innerText=JSON.parse(hoa1).diemthisinh
        if(y<4)
        {
        thu1[y].setAttribute('src',ne.anh)
        thu2[y].innerText=JSON.parse(hoa1).tents
        thu3[y].innerText= 'SBD:'+JSON.parse(hoa1).id
        thu4[y].innerText=Math.floor(Math.random()*1000000000)
        thu5[y].innerText=Math.floor(Math.random()*1000000000)
        thu6[y].innerHTML=laydate
        ve1.push(ne.anh)
        ve2.push(JSON.parse(hoa1).tents)
        ve3.push('SBD:'+JSON.parse(hoa1).id)
        ve4.push(Math.floor(Math.random()*1000000000))
        ve5.push(Math.floor(Math.random()*1000000000))
        ve6.push(laydate)
        y=y+1
        localStorage.setItem("hoatdongganday1",JSON.stringify(ve1))
        localStorage.setItem("hoatdongganday2",JSON.stringify(ve2))
        localStorage.setItem("hoatdongganday3",JSON.stringify(ve3))
        localStorage.setItem("hoatdongganday4",JSON.stringify(ve4))
        localStorage.setItem("hoatdongganday5",JSON.stringify(ve5))
        localStorage.setItem("hoatdongganday6",JSON.stringify(ve6))
        }
        else if(y >=4) {
            y=1
            thu1[0].setAttribute('src',ne.anh)
            thu2[0].innerText=JSON.parse(hoa1).tents
            thu3[0].innerText='SBD:'+ JSON.parse(hoa1).id
            thu4[0].innerText=Math.floor(Math.random()*1000000000)
            thu5[0].innerText=Math.floor(Math.random()*1000000000)
            thu6[0].innerHTML=laydate
        ve1.push(ne.anh)
        ve2.push(JSON.parse(hoa1).tents)
        ve3.push('SBD:'+JSON.parse(hoa1).id)
        ve4.push(Math.floor(Math.random()*1000000000))
        ve5.push(Math.floor(Math.random()*1000000000))
        ve6.push(laydate)
        localStorage.setItem("hoatdongganday1",JSON.stringify(ve1))
        localStorage.setItem("hoatdongganday2",JSON.stringify(ve2))
        localStorage.setItem("hoatdongganday3",JSON.stringify(ve3))
        localStorage.setItem("hoatdongganday4",JSON.stringify(ve4))
        localStorage.setItem("hoatdongganday5",JSON.stringify(ve5))
        localStorage.setItem("hoatdongganday6",JSON.stringify(ve6))
        }
        if(ne.diemthisinh>ne2.diemthisinh)
        {
            a.diemthisinh=ne.diemthisinh
            ne.diemthisinh=ne2.diemthisinh
            ne2.diemthisinh=a.diemthisinh
            b.tents=ne.tents
            ne.tents=ne2.tents
            ne2.tents=b.tents
            c.anh=ne.anh
            ne.anh=ne2.anh
            ne2.anh=c.anh
            localStorage.setItem(index,JSON.stringify(ne));
            localStorage.setItem(index-1,JSON.stringify(ne2));
            var hoa1=localStorage.getItem(index);
            var hoa2=localStorage.getItem(index-1);
            huyen[index].innerText=JSON.parse(hoa1).diemthisinh
            huyen[index-1].innerText=JSON.parse(hoa2).diemthisinh
            tuan[index].innerText=JSON.parse(hoa1).tents
            tuan[index-1].innerText=JSON.parse(hoa2).tents
            duong[index].setAttribute('src',JSON.parse(hoa1).anh)
            duong[index-1].setAttribute('src',JSON.parse(hoa2).anh)
            xephang[index].setAttribute('src',ne.anh)
            xephang[index-1].setAttribute('src',ne2.anh)
        }
    }
})
var xemthem=$('.nutxemthem')

xemthem.onclick=function()
{
    $('.chucnang').classList.remove('chucnang')
    $$('.missvote-body_content')[1].classList.add('chucnang')
    $('.chinh').classList.remove('chinh')
    $$('.missvote-header_selection')[1].classList.add('chinh')
    window.scrollTo(0, 0);

}
var thisinh=$$('.thisinhbam')
var manche=$('.manche')
var thongtinthisinh=$('.thongtinthisinh')
 thisinh.forEach((thisinhs,index)=>
 {
     thisinhs.onclick=function()
     {
        var ne=JSON.parse(localStorage.getItem(index))
        thongtinthisinh.classList.add('hienmanche1')
        manche.classList.add('hienmanche')
        $('.anhthongtinthisinh').setAttribute('src',ne.anh)
        $('.ten').innerText=ne.tents
        $('.ma').innerText=ne.id
        
     }
 })
 manche.onclick=function()
 {
     manche.classList.remove('hienmanche')
     thongtinthisinh.classList.remove('hienmanche1')
 }
while(z)
{
thu1[t].setAttribute('src',JSON.parse(ne3)[z-1])
thu2[t].innerText=JSON.parse(ne4)[z-1]
thu3[t].innerText= JSON.parse(ne5)[z-1]
thu4[t].innerText=JSON.parse(ne6)[z-1]
thu5[t].innerText=JSON.parse(ne7)[z-1]
thu6[t].innerHTML=JSON.parse(ne8)[z-1]
t=t+1
z=z-1
if(z<=z-4)
{
    z=JSON.parse(localStorage.getItem("hoatdongganday1")).length
}
}
var z=JSON.parse(localStorage.getItem("hoatdongganday1")).length

