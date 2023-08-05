var allImg=document.images
console.log(allImg)


for (i=0;i<=8;i++)
{
    allImg[i].src=`./photos/${i}.jpg`
    allImg[i].addEventListener("click",function(){
        document.getElementById("bigImg").style.backgroundImage=`url(${this.src})`
    })
}