 module.exports =
function toReadable (number) {
   let numToStr = String(number);
   let n=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
   let t=['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
   let h='hundred';
   if(numToStr.length==1) return n[number];
   if(numToStr.length==2 && number<=19) return n[number];
   if(numToStr.length==2 && number>19){
    if(number%10==0){
        return t[Math.floor(number/10)-2];
    }
    else {
        return   t[Math.floor(number/10)-2] + ' ' + n[number%10];
     
    }
} 
    if(numToStr.length==3) 
        if(Math.floor((number%100))<=19 && Math.floor((number%100))>0){
            return n[Math.floor(number/100)] +' ' +h + ' ' + n[Math.floor((number%100))];
        }
        if(Math.floor((number%100)/10)==0 && !(Math.floor((number%100)%10)==0)){
           return n[Math.floor(number/100)] +' ' +h + ' ' + n[Math.floor((number%100)%10)];
        }
        else if(Math.floor((number%100)%10)==0 && !(Math.floor((number%100)/10)==0)){
          return  n[Math.floor(number/100)] + ' ' + h + ' ' + t[Math.floor((number%100)/10)-2] ;
        }
        else if((Math.floor((number%100)%10)==0) && (Math.floor((number%100)/10)==0)){
            return n[Math.floor(number/100)] +' ' + h ;
        }
        else{

            return n[Math.floor(number/100)] + ' ' + h + ' '  + t[Math.floor((number%100)/10)-2] + ' ' + n[Math.floor((number%100)%10)];
        }
}
