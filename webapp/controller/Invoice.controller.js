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
        /* let oModel=new JSONModel("../Invoices.json");
        this.getView().setModel(oModel); */

		/* var oViewModel = new JSONModel({
			currency: "EUR"
		});
		this.getView().setModel(oViewModel, "view");
 */
		var oJSONData = {
			busy : false,
			order : 0
		};
		var oModel = new JSONModel(oJSONData);
		this.getView().setModel(oModel, "appView");
		},
		onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
        onFilterInvoices1 : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("SupplierName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
        },
		onSort : function () {
			var oView = this.getView(),
				aStates = [undefined, "asc", "desc"],
				aStateTextIds = ["sortNone", "sortAscending", "sortDescending"],
				sMessage,
				iOrder = oView.getModel("appView").getProperty("/order");

			iOrder = (iOrder + 1) % aStates.length;
			var sOrder = aStates[iOrder];

			oView.getModel("appView").setProperty("/order", iOrder);
			sap.ui.getCore().byId("__xmlview1--invoiceList").getBinding("items").sort(sOrder && new Sorter("Price", sOrder === "desc"));

			/* sMessage = this._getText("sortMessage", [this._getText(aStateTextIds[iOrder])]);
			MessageToast.show(sMessage); */
			}
        
        
       
       
       
    });
 });