public class MassOpportunityEditController {

    @AuraEnabled
    public static List<Opportunity> getOpportunities(Id accId,String fields){
        List<Opportunity> oppList = new List<Opportunity>();
        String soqlQuery = 'Select'+fields+ 'from Opportunity where AccountId =: acc.Id';
        oppList = database.query(soqlQuery);
        return oppList;
    }
    
        
}