import React from "react";

const { GoogleSpreadsheet } = require("google-spreadsheet");
const doc = new GoogleSpreadsheet(
  "1UZ7B_mVH1cN_IZ2ANODh6CHghkSu5m4_Ha3JmtvHwL0"
);

export default async function googleSheet(event) {
  await doc.useServiceAccountAuth({
    client_email: "lavazone-leads@natural-plasma-281719.iam.gserviceaccount.com",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDUkiHkoAvZbI8T\n3ua7kStcOMYoXnHTQQSowhVYIWdU6GADoH2zjnj/s0BwtFnTVXaW/7mqPLLY4VRJ\npOfUGSMPJInAh6SYNUbo7MuPwC9gtBJesfPSwao6+zpOn2CybgnVJ60hNJRp3E1N\nc9Bh3rhMpbnk8lyr4Axxc2HLPyNDx5LMrL4FJrsFbPZ8AKyBwthDH7I9ccKbnx5O\nAbf3uWLY7W/VAyUGqzLNLAkdnxD63lnr75GpQYLdd05IBHiFtjC2+cr3ghmBos11\nZuJfp7uCVHJhzmB00l4A3fdKINt4pq8nHBZKGeb5yHev6QcWf0uPOKR6CT/O6NZt\nRJU7kzNbAgMBAAECggEACWs4pstFjOql8hqtHQq9xXDikKh2qD9UfzAAlXIbrzzl\nHDldRrp9frRTmsAr6k2lBasjxUAPfuHBix+ac+DjeujYG/F8B+Wf/w+zbOrZ4Fjz\nJvs6CKYWmTjj3fNOlo67Ms2vly3Ysaer2vlEaF41A7FPTXWZ85l19z3UkrMHYYu3\ncF3R+4c+FGLRusOHuBePvXgQyi80/Xt8c4tNbrszI7wxKG7rmmYBSRhz67UBZlg5\nru9oJH8yPz/7zJUZtHx/m8kOxdmpihJrFCpS3wnzq2hx8TQJjkSor8J6/nAFI+BV\nc36dh+yUXCU6X6t7RPngCEJQsiHiraAY5X12pjmjCQKBgQD7DxZhSSHDE9PKfG9z\nkSAok8lxWgfdho7Pm54LBOUiNYxJEwjxQoJmDTM8f27F+kDMTOrwg5Igl2CCzKnA\nFAj8p24iqR3w8nc2gpLtWhemP1iUjWfm83IxJmpmq8u5POyiAo1niMRI68p6s6jy\no1T4S158vefYAuJzY98AFihHHwKBgQDYwSFHGGYJB7SWqCaY5gqolKRtLiHnVUxl\nyBuODRzn4QV8lnWytGnoWBsmYzK2eZJGv3PAD1Jrc6px3SFLcvYe901ecrGERsRn\nDA32LMx8qI+MdjhotXo+lcgPrjMfXNUOtyNX82NxYgruVzFaZZsO/WS0LfWWlU8D\nG8zBAe74RQKBgQDvKRU5we/+pMGp79Y/8iz/WqGYcJpzhj4/OVBZ0OTyLK6h4hcv\ntRsBWmvHouGEiXv24wMf8UZf87SFha/jgXJ6NIkvTYlvQZsc+1A5+Qv0W/3nLbmg\nAaNzfNP5UIi2wnntb58C1P+fM7dkIge8dKl6ClpNXJ8iYMUWBTqnG3RtIwKBgAUo\n07n1grhETrAnYIPTNf29TAytRHFVPnRNxxoihcWfPZoxmqueT8cQEdVgFxzw1+KH\nPCIeO0ADiNMdCGXbXrBuApF0+XTEmng5eTua5WMyP/h/9+fGKhrDRffZla3xb8Dh\n6x101bElPE1gFfSo5n/82CDR1z62XyMbzkvp195hAoGBAMda4wX2OZFUfCO7I+HQ\nbbqzNmgGW2ijsDB4RG9Noyaem6bOHCsemPpRXpd0Ai8MviAoxtRNT9juqFuqIZMg\nQ37qMZTJc54CzI8AQTA/bpcM+O79gitLkRtuI6LZuDBGzKnMxeCL0F9/PnumG1LN\nR2o3+a+VQVeSJCAsgyisuASc\n-----END PRIVATE KEY-----\n",
  });
  

  await doc.loadInfo(); // loads document properties and worksheets

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  console.log("Sheet title", sheet.title);
  console.log("Sheet row count", sheet.rowCount);
  console.log("sheet update linked..", event);
  console.log("Data to input", event.time)

  const larryRow = await sheet.addRow({ 
    investmentAddress: event.investmentAddress, 
    email: event.emailAddress,
    name: event.name,
    phone: event.phoneNumber,
    price: event.price,
    questions: event.questions,
    time: event.time,
  });

}
