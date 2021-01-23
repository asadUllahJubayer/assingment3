// killometerToMeter
function killometerToMeter(killometer){
    if(killometer>0){
    return meter = killometer * 1000;
    } 
    else{ return messeage = "Incorrect"}
}

//budgetCalculator
function budgetCalculator(watch, mobile, leptop){
       let watchPrice, mobilePrice, leptopPrice;
    if(watch > 0 && mobile > 0 && leptop>0){
         watchPrice = 50 * watch;
         mobilePrice = 100 * mobile;
         leptopPrice = 500 * leptop;
    
        let total = watchPrice + mobilePrice + leptopPrice;
        return total;
    }
    else if(watch>0 && mobile>0){
        watchPrice = 50 * watch;
        mobilePrice = 100 * mobile;
        
        total = watchPrice + mobilePrice;
        return total;
    }
    else if(watch>0 && leptop>0){
        watchPrice = 50 * watch;
        leptopPrice = 500 * leptop;
        
        total = watchPrice + leptopPrice;
        return total;
    }
    else if(mobile>0 && leptop>0){
      
        mobilePrice = 100 * mobile;
        leptopPrice = 500 * leptop;
        
        total = mobilePrice + leptopPrice;
        return total;
    }

    else if(watch>0){
        watchPrice = 50 * watch;
        total = watchPrice;
        return total;
    }
    else if(mobile>0){
        mobilePrice = 50 * watch;
        total = mobilePrice;
        return total;
    }
    else if(leptop>0){
        leptopPrice = 50 * watch;
        total = leptopPrice;
        return total;
    }
    else{
        return messeage = "Incorrect"
    }
}

//hotelCost

function hotelCost(days){
    let totalAmount=0;
     hoteldays = days;
    if(hoteldays<=10 && hoteldays>0){
        totalAmount = hoteldays * 100; 
        return totalAmount;
    }
    else if(hoteldays>10 && hoteldays<=20){
        let remainingDays = hoteldays-10;
        let amount = remainingDays * 80;
        return totalAmount = 1000 + amount;
    }
    else if(typeof(hoteldays) == "string" || hoteldays <=0 ){
            return messeage = "This is Incorrect value"
    }
    else{
        let remainingDays = hoteldays - 20;
        let amount = remainingDays * 50;
        return totalAmount = 1000 + 800 + amount;
    }
}
// megaFriend
  function megaFriend(pass) {
    var bigFriend ="";
    for (var i=0; i < pass.length; i++) {
      if (pass[i].length > bigFriend.length) {
        bigFriend = pass[i];
      }
    }
    return bigFriend;
  }
