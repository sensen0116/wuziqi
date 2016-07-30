$(function(){
   var b=0;
        
             
        
 $('.head').addClass('diaoxia'); 
 $('.btn').addClass('chulai'); 
 $('.btn').on('click',function(){
  $('.btn').addClass('xiaoshi')
  
 $('.renren').on('click',function(){
   console.log('人人对战');
  $('.qizi').removeClass('hei').removeClass('bai');
    $('.heng').remove();
  $('.shu').remove();
// 	console.log(66)
  kongbai={};
  for(var i=0;i<15;i++){
       $('<b>')
       .addClass('heng')
       .appendTo('.qipai');
    for(var j=0;j<15;j++){
      kongbai[i+'-'+j]={x:i,y:j};
       $('<i>')
       .addClass('shu')
       .appendTo('.qipai')

       $('<div>').addClass('qizi')
       .attr('id',i+'-'+j)
       .data('pos',{x:i,y:j})
       .appendTo('.qipai')
    }
  }
    
    var join=function(n1,n2){
       return n1+'-'+n2;
    }
     
   var panduan=function(pos,biao){
       var h=1,s=1,zx=1,yx=1;
       var tx,ty;
       tx=pos.x; ty=pos.y;
       while(biao[join(tx,ty-1)]){
        h++;ty--;
       }
       tx=pos.x; ty=pos.y;
       while(biao[join(tx,ty+1)]){
        h++;ty++;
       }

       tx=pos.x; ty=pos.y;
       while(biao[join(tx-1,ty)]){
        s++;tx--;
       }
       tx=pos.x; ty=pos.y;
       while(biao[join(tx+1,ty)]){
        s++;tx++;
       }

       tx=pos.x; ty=pos.y;
       while(biao[join(tx-1,ty+1)]){
        zx++;tx--;ty++;
       }
       tx=pos.x; ty=pos.y;
       while(biao[join(tx+1,ty-1)]){
        zx++;tx++;;ty--;
       }

       tx=pos.x; ty=pos.y;
       while(biao[join(tx-1,ty-1)]){
        yx++;tx--;ty--;
       }
       tx=pos.x; ty=pos.y;
       while(biao[join(tx+1,ty+1)]){
        yx++;tx++;;ty++;
       }
       return Math.max(h,s,zx,yx);
    }

    var kaiguan=true;
    hei={};
    bai={};
    var isAi=true;

    var ai=function(){
      var zuobiao;
      var max=-Infinity;
      for(var i in kongbai){
        var weixie=panduan(kongbai[i],hei);
        if(weixie>max){
          max=weixie;
          zuobiao=kongbai[i];
        }
      }
      var zuobiao2;
      var max2=-Infinity;
      for(var i in kongbai){
        var weixie=panduan(kongbai[i],bai);
        if(weixie>max2){
          max2=weixie;
          zuobiao2=kongbai[i];
        }
      }
      return (max>max2)?zuobiao:zuobiao2;
    }
 
    $('.qizi').on('click',function(){
       
    if($(this).hasClass('hei')||$(this).hasClass('bai')){
      return;
    }
       var pos=$(this).data('pos');
       if(kaiguan){
        $(this).addClass('hei');
         // clearInterval(a);
      // b=0;
      // var a=setInterval(function(){
      //         b+=6;
      //         console.log(b)
      //         if(b>360){
      //           alert('时间到，白赢');
      //           b=0;
      //          return
      //         }
      //           $('.one1').css({
      //       'transform':'rotateZ('+b+'deg)',
      //     });
      //    },1000);  
        $('.one1').css({
          'transform':'rotateZ(0deg)',
         })
        // clearInterval(a);
        $('.two1').css({
          'transform':'rotateZ(0deg)',
         })
        // clearInterval(c);
        console.log(b);
        hei[pos.x+'-'+pos.y]=true;
        delete kongbai[join(pos.x,pos.y)];
        if(panduan(pos,hei)>=5){
          alert('黑赢');
          $('.qipai .qizi').off('click');
        }
       
       }else{
         $(this).addClass('bai');
         // b=0;
         // clearInterval(c)
         // var c=setInterval(function(){
         //      b+=6;
         //      console.log(b)
         //      if(b>360){
         //        alert('时间到，黑赢')
         //        b=0;
         //       return
         //      }
         //        $('.two1').css({
         //    'transform':'rotateZ('+b+'deg)',
         //  });
         // },1000);  
         $('.two1').css({
          'transform':'rotateZ(0deg)',
         })
         $('.one1').css({
          'transform':'rotateZ(0deg)',
         })
          
         bai[pos.x+'-'+pos.y]=true;
        delete kongbai[join(pos.x,pos.y)];

         if(panduan(pos,bai)>=5){
            alert('bai ying');
          $('.qipai .qizi').off('click');
          }
       }
       kaiguan=!kaiguan;

      
   }
   );

    // 人人对战完
    })





$('.renji').on('click',function(){
  console.log('人机')
  $('.qizi').removeClass('bai').removeClass('hei');
  $('.heng').remove();
  $('.shu').remove();

  
    kongbai={};
  for(var i=0;i<15;i++){
       $('<b>')
       .addClass('heng')
       .appendTo('.qipai');
    for(var j=0;j<15;j++){
      kongbai[i+'-'+j]={x:i,y:j};
       $('<i>')
       .addClass('shu')
       .appendTo('.qipai')

       $('<div>').addClass('qizi')
       .attr('id',i+'-'+j)
       .data('pos',{x:i,y:j})
       .appendTo('.qipai')
    }
  }
    
    var join=function(n1,n2){
       return n1+'-'+n2;
    }
     
   var panduan=function(pos,biao){
       var h=1,s=1,zx=1,yx=1;
       var tx,ty;
       tx=pos.x; ty=pos.y;
       while(biao[join(tx,ty-1)]){
        h++;ty--;
       }
       tx=pos.x; ty=pos.y;
       while(biao[join(tx,ty+1)]){
        h++;ty++;
       }

       tx=pos.x; ty=pos.y;
       while(biao[join(tx-1,ty)]){
        s++;tx--;
       }
       tx=pos.x; ty=pos.y;
       while(biao[join(tx+1,ty)]){
        s++;tx++;
       }

       tx=pos.x; ty=pos.y;
       while(biao[join(tx-1,ty+1)]){
        zx++;tx--;ty++;
       }
       tx=pos.x; ty=pos.y;
       while(biao[join(tx+1,ty-1)]){
        zx++;tx++;;ty--;
       }

       tx=pos.x; ty=pos.y;
       while(biao[join(tx-1,ty-1)]){
        yx++;tx--;ty--;
       }
       tx=pos.x; ty=pos.y;
       while(biao[join(tx+1,ty+1)]){
        yx++;tx++;;ty++;
       }
       return Math.max(h,s,zx,yx);
    }

    var kaiguan=true;
    hei={};
    bai={};
    var isAi=true;

    var ai=function(){
      var zuobiao;
      var max=-Infinity;
      for(var i in kongbai){
        var weixie=panduan(kongbai[i],hei);
        if(weixie>max){
          max=weixie;
          zuobiao=kongbai[i];
        }
      }
      var zuobiao2;
      var max2=-Infinity;
      for(var i in kongbai){
        var weixie=panduan(kongbai[i],bai);
        if(weixie>max2){
          max2=weixie;
          zuobiao2=kongbai[i];
        }
      }
      return (max>max2)?zuobiao:zuobiao2;
    }
 
    $('.qizi').on('click',function(){
    if($(this).hasClass('hei')||$(this).hasClass('bai')){
      return;
    }
       var pos=$(this).data('pos');
       if(kaiguan){
        $(this).addClass('hei');
         // b=0;
         // clearInterval(c)
         // var c=setInterval(function(){
         //      b+=6;
         //      console.log(b)
         //      if(b>360){
         //        alert('时间到，白赢')
         //        b=0;
         //       return
         //      }
         //        $('.two1').css({
         //    'transform':'rotateZ('+b+'deg)',
         //  });
         // },1000);  
        hei[pos.x+'-'+pos.y]=true;
        delete kongbai[join(pos.x,pos.y)];
        if(panduan(pos,hei)>=5){
          alert('黑赢');
          $('.qipai .qizi').off('click');
        }
        if(isAi){
          var pos=ai();
          $('#'+join(pos.x,pos.y)).addClass('bai');
          bai[join(pos.x,pos.y)]=true;
          delete kongbai[join(pos.x,pos.y)];
          if(panduan(pos,bai)>=5){
            alert('白赢');
            $('.qipai .qizi').off('click');
          }
          return
        }
       }else{
        
        $(this).addClass('bai')
         bai[pos.x+'-'+pos.y]=true;
        delete kongbai[join(pos.x,pos.y)];

         if(panduan(pos,bai)>=5){
            console.log('白赢');
          $('.qipai .qizi').off('click');
          }
       }
       kaiguan=!kaiguan;
   });

    // 人机对战完
});




    // 点击开始完
    })
	
})

