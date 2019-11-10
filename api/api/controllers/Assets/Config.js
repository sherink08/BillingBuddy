class configClass
{
   static dbUrl(){
      return "mongodb://localhost:27017/";
   } 
   static dbName()
   {
      return "BillingBuddy";
   }
}
module.exports = configClass;