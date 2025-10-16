//callback hell -> pyriamid of done -> inversion of control

//bookHotel --> processPayment --> showBookingStatus --> updateBookingHistory 
//----->>>>> this are api (book hotelAPIs)

function bookHotel() {

}

function processPayment () {

}

function showBookingStatus () {

}

function updateBookingHistory() {

}
// so its more like this 
bookHotel(hotelId, function(){ //CB1
    if (error){
        handleError
    } else {
        processPayment(hotelId, function(){ //CB2
            if (error){
                handleError
            }else {
                showBookingStatus(function(){ //CB3
                    if (error) {
                        handleError
                    } else{
                        updateBookingHistory(function(){ //CB4
                            if (error){
                                handleError
                            } else {
                                sucesss
                            }
                        })
                    }
                })
            }
        })
    }
})

/* This is a smaple of what a callback */