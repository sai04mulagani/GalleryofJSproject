var allImgTags=document.images
console.log(allImgTags)
for (i=0;i<8;i++)
{
    allImgTags[i].src=`./photos/${i}.jpg`
    allImgTags[i].addEventListener("click",function(){
        document.getElementById("bigImgContainer").style.display="flex"
        document.getElementById("bigImg").style.backgroundImage=`url(${this.src})`
    })
}
function closeWindow(){
    document.getElementById("bigImgContainer").style.display="none"
}