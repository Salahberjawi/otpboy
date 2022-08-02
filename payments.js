const keyHandler = require('./keyhandler.js')

function completePayment(paymentType) {
    if(paymentType) {
        if(paymentType > 0 && Number.isInteger(paymentType)) {
            const key = keyHandler.createKey(paymentType)
        }
    }
}