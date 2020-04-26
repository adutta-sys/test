({
	loadOpportunities : function(component,accId,fields) {
		var getOppList = component.get("c.MassOpportunityEditController");
        getOppList.setParams({
            "accId":accId,
            "fields":fields
        });
	}
})