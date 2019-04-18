

const dates = require("../data/dates/datesDataModel.js");

if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}

// console.log(process.env);
const { accountSid, authToken } = process.env;  
console.log(accountSid, authToken);
const client = require('twilio')(accountSid, authToken);

function stripISOTime(dateObj) {
    return dateObj.toISOString().slice(0,10);
}

let messageIds; 

return dates.getAllUnsentDates(stripISOTime(new Date())).then(
    messages => {
        messageIds = messages.map(message => message.date_id);
        return Promise.all(messages.map(

                    message => {
                    
                        return client.messages.create({
                            body: message.message,
                            from: '+15005550006',
                            to: message.phone_number 
                        })

                    }))
        })
        .then(res => {
            return dates.markDateSent(messageIds);
        })
        .then(() => console.log("Success!"))
        .catch(err => {
            console.log(err)
        })

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+15017122661',
//      to: '+15558675310'
//    })
//   .then(message => console.log(message.sid));
