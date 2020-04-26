({
	initializeRecords : function(component,helper) {
        var accId = component.get('v.recordId');
        var fields = component.get('v.ListofFields');
		helper.loadOpportunities(component,accId,fields);
	}
})