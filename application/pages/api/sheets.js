import { OAuth2Client } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const oauthClient = new OAuth2Client({
  clientId:
    '701354975074-k7mim86hrg9ir2ek32uipshuru88asj2.apps.googleusercontent.com',
  clientSecret: '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',
});

oauthClient.setCredentials({
  refresh_token:
    '1//04i-RtmTwmeJzCgYIARAAGAQSNwF-L9IrDcMdh1ZsgwuZWJrlWSwoEJ6u_yuoofKUcMwiBqTHuo3MG4vWRLApJdYKHiNjADeRku0',
});

// oauthClient.credentials.access_token = await oauthClient.getAccessToken();
oauthClient.credentials.refresh_token =
  '1//04i-RtmTwmeJzCgYIARAAGAQSNwF-L9IrDcMdh1ZsgwuZWJrlWSwoEJ6u_yuoofKUcMwiBqTHuo3MG4vWRLApJdYKHiNjADeRku0';

oauthClient.on('tokens', (credentials) => {
  console.log('access_token: ', credentials.access_token);
  console.log('refresh_token: ', credentials.refresh_token);
});

export default async function helloAPI(req, res) {
  try {
    const doc = new GoogleSpreadsheet(
      '1S1OYU6HdrTyKsufLbjY3PFZG7GbBAc5R6VLsNH3aW9I'
    );

    doc.useOAuth2Client(oauthClient);

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    const response = await sheet.addRow({ email: req.body.email });

    res.status(200).json({ message: 'success' });
  } catch (error) {
    if (error.response) console.log(error.response.data);
    else console.log(error);
    res.status(500).json(error.response.data);
  }
}
