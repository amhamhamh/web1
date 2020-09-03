var Body = {
    setbackgroundcolor: function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
        },
    setcolor : function(color){
     //   document.querySelector('body').style.color = color;  
        $('body').css('color',color);
        }
}
var Links={
    setAcolor : function(color){
    //var alist =document.querySelectorAll('a');
    //var i = 0 ;
    //while (i<alist.length) {
    //    alist[i].style.color =color;
    //    i = i+1;
    //}
    $('a').css('color',color);    
    }    

}