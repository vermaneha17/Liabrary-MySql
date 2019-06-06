var FCM = require('fcm-node');
var serverKey = 'AAAAxONL_pk:APA91bFIzYA3PkgKUfA1ovDw7xzkjBU41sWhpI1TV2E-zz71AYoUY6DBLnwLseC1PDlLtGT51vwAC4QZ-jD8prbHz2-0M7GO7qyAmULVEHuNjmUMqqpFjZt1tSsq3T3DJqCQx6sDlBDX'; //put your server key here
var fcm = new FCM(serverKey);

module.exports = {
    sendPush: async function(message) {
        await fcm.send(message, function(err, response) {
            if(err)
                console.log("Error: ",err);
            else
                console.log("Response: ",response);           
        });
    }
}