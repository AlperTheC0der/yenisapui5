sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"../model/formatter",
	"sap/ui/model/Sorter"
 ], function (Controller, JSONModel,Filter,FilterOperator,formatter,Sorter) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.Invoice", {
		formatter: formatter,
       onInit : function () {
       
		var oJSONData = {
			busy : false,
			order : 0
		};
		let oModel = new JSONModel(oJSONData);
		this.getView().setModel(oModel, "appView");
		},
		onFilterInvoices : function (oEvent) {

			// build filter array
			let aFilter = [];
			let sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
			}

			// filter binding
			let oList = this.byId("invoiceList");
			let oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
        onFilterInvoices1 : function (oEvent) {

			// build filter array
			let aFilter = [];
			let sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("SupplierName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			let oList = this.byId("invoiceList");
			let oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
        },
		onSort : function () {
			let oView = this.getView(),
				aStates = [undefined, "asc", "desc"],
				aStateTextIds = ["sortNone", "sortAscending", "sortDescending"],
				sMessage,
				iOrder = oView.getModel("appView").getProperty("/order");

			iOrder = (iOrder + 1) % aStates.length;
			let sOrder = aStates[iOrder];

			oView.getModel("appView").setProperty("/order", iOrder);
			sap.ui.getCore().byId("__xmlview1--invoiceList").getBinding("items").sort(sOrder && new Sorter("Price", sOrder === "desc"));
			// odevvv
			
			}
        
        
       
       
       
    });
 });