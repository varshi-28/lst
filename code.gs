function getEnvironment(){
  var Environment={
    spreedsheetId:'<https://docs.google.com/spreadsheets/d/1cAPwJCbNu7qs100kfJV2KTMM6MURNqzsF-lm-bHXKXk/edit#gid=0>',
    firebaseUrl:'<https://project-46dd2-default-rtdb.firebaseio.com/>'
  }
}
function doGet(e) {
  var x = HtmlService.createTemplateFromFile("index");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
}

function checkLogin(username, password) {
  var url = 'https://docs.google.com/spreadsheets/d/1cAPwJCbNu7qs100kfJV2KTMM6MURNqzsF-lm-bHXKXk/edit#gid=0';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("DATA");
  var getLastRow =  webAppSheet.getLastRow();
  var found_record = '';
  for(var i = 1; i <= getLastRow; i++)
  {
   if(webAppSheet.getRange(i, 1).getValue().toUpperCase() == username.toUpperCase() && 
     webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase())
   {
     found_record = 'TRUE';
   }    
  }
  if(found_record == '')
  {
    found_record = 'FALSE'; 
  }
  
  return found_record;
  
}

function AddRecord(usernamee, passwordd, email, phone) {
  var url = 'https://docs.google.com/spreadsheets/d/1cAPwJCbNu7qs100kfJV2KTMM6MURNqzsF-lm-bHXKXk/edit#gid=0';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("DATA");
  webAppSheet.appendRow([usernamee,passwordd,email,phone]);
  
}
function AddRecord1(usernamee) {
  var url = 'https://docs.google.com/spreadsheets/d/1cAPwJCbNu7qs100kfJV2KTMM6MURNqzsF-lm-bHXKXk/edit#gid=0';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("DATA");
  webAppSheet.appendRow([usernamee]);
  
}

const sheets=SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1cAPwJCbNu7qs100kfJV2KTMM6MURNqzsF-lm-bHXKXk/edit#gid=0");
const sheet=sheets.getSheetByName("DATA");
function doPost(e){
  var data= e.parameter;
  sheet.appendRow([data.t5,data.t6,data.t7]);
  return ContentService.createTextOutput("SUCCESS");
}
