/* var FCM = require('fcm-node');
var serverKey = 'AAAAxONL_pk:APA91bFIzYA3PkgKUfA1ovDw7xzkjBU41sWhpI1TV2E-zz71AYoUY6DBLnwLseC1PDlLtGT51vwAC4QZ-jD8prbHz2-0M7GO7qyAmULVEHuNjmUMqqpFjZt1tSsq3T3DJqCQx6sDlBDX'; //put your server key here
var fcm = new FCM(serverKey); */
const { sendPush } = require('../helpers/pushNotification')

var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: "dc-SOvWzpzs:APA91bHzBEPQcGzKLpPax5qAfqJHBzxF2RcXM8NxUp5eb8SVlcT6M3OPp_e2vkcOqiKfOoSxtbdLhmnLeCn-whIzLpRTIy5n8HScs3RQxd-e2L3dX7xm0eZWOEJy9ZR-t_2tiG3ffvyx",

    notification: {
        title: 'Title of your push notification',
        body: 'Body of your push notification'
    },

    data: {  //you can send only notification or only data(or include both)
        my_key: 'Hello!'
    }
};

/* fcm.send(message, function (err, response) {
    if (err) {
        console.log("Error: ", err);

        console.log("Something has gone wrong!");
    } else {
        console.log("Successfully sent with response: ", response);
    }
}); */

sendPush(message);
