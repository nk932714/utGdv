var google = require('googleapis');
var googleAuth = require('google-auth-library');
//var credit = require('../../client_secret.json');
/*const client_id = process.env.client_id;
const project_id = process.env.project_id;
const client_secret = process.env.client_secret;
const redirect_uris = process.env.redirect_uris;
const scopes = process.env.scopes; */


function Drive() {
}
Drive.prototype.init = ()=> {
    this.credits = {
        client_id: process.env.client_id,
        client_secret: process.env.client_secret,
       // redirect: credit.web.redirect_uris[0]
          redirect: process.env.redirect_uris

    };
    this.SCOPES = process.env.scopes;
}
Drive.prototype.connect = ()=> {
    var auth = new googleAuth();
    var oauth2Client = new auth.OAuth2(this.credits.client_id, this.credits.client_secret, this.credits.redirect);
    return oauth2Client;
}
Drive.prototype.getAuthUrl = oauth2Client => {
    var authUrl = oauth2Client.generateAuthUrl(
        {
            access_type: 'offline',
            scope: this.SCOPES
        }
    );
    return authUrl;
}

Drive.prototype.files = ()=> {

}
module.exports = Drive;
