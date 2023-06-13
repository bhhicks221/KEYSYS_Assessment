const baseUrl = "http://localhost:5043/api/Data";
var invoices = [];
var invoice = {};

function handleOnLoad() {
    populatePage();
}

function populatePage(){

    const allUnisApiUrl = baseUrl;
    fetch(allUnisApiUrl).then(function(response){
        return response.json();
    }).then(function(json){ // asyncronous call
        invoices = json;
        let html = `<div class = "move-down-farther"`;
        html+= `</div>`;
        html += `<div class = "row">`;
        html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">Invoice Type</h5>`;
            html += `</div>`;
            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">Line Item Code</h5>`;
            html += `</div>`;
            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">Line Item Description</h5>`;
            html += `</div>`;
        json.forEach((invoices)=>{
            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">`+invoices.invoiceTypeCode+` - `+invoices.invoiceTypeDescription+`</h5>`;
            html += `</div>`;

            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">`+invoices.categoryID+`.`+invoices.subCategoryID+`</h5>`;
            html += `</div>`;

            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">`+invoices.categoryDescription+` - `+invoices.subCategoryDescription+`</h5>`;
            html += `</div>`;
        })
        html += `</div>`;
        document.getElementById("cards").innerHTML=html;
    }).catch(function(error){
        console.log(error);
    });
}

function handleFormClick() {
    let choice = document.getElementById("choice").value;
    let code = document.getElementById("code").value;
    if (choice == "Invoice Type Code") {
        handleTypeCode(code);
    }
    else if (choice == "Category ID") {
        handleCatId(code);
    }
    else {
        html += `<h2>Error Message</h2>
        <p>An error has occurred.</p>`;
    }
}

function handleTypeCode(code) {
    const allUnisApiUrl = baseUrl;
    fetch(allUnisApiUrl).then(function(response){
        return response.json();
    }).then(function(json){ // asyncronous call
        invoices = json;
        let html = `<div class = "move-down-farther"`;
        html+= `</div>`;
        html += `<div class = "row">`;
        html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">Invoice Type</h5>`;
            html += `</div>`;
            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">Line Item Code</h5>`;
            html += `</div>`;
            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">Line Item Description</h5>`;
            html += `</div>`;
        json.forEach((invoices)=>{
            if (invoices.invoiceTypeCode == code) {
            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">`+invoices.invoiceTypeCode+` - `+invoices.invoiceTypeDescription+`</h5>`;
            html += `</div>`;

            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">`+invoices.categoryID+`.`+invoices.subCategoryID+`</h5>`;
            html += `</div>`;

            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">`+invoices.categoryDescription+` - `+invoices.subCategoryDescription+`</h5>`;
            html += `</div>`;
            }
        })
        html += `</div>`;
        document.getElementById("cards").innerHTML=html;
    }).catch(function(error){
        console.log(error);
    });
}

function handleCatId(code) {
    const allUnisApiUrl = baseUrl;
    fetch(allUnisApiUrl).then(function(response){
        return response.json();
    }).then(function(json){ // asyncronous call
        invoices = json;
        let html = `<div class = "move-down-farther"`;
        html+= `</div>`;
        html += `<div class = "row">`;
        html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">Invoice Type</h5>`;
            html += `</div>`;
            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">Line Item Code</h5>`;
            html += `</div>`;
            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">Line Item Description</h5>`;
            html += `</div>`;
        json.forEach((invoices)=>{
            if (invoices.categoryID == code) {
            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">`+invoices.invoiceTypeCode+` - `+invoices.invoiceTypeDescription+`</h5>`;
            html += `</div>`;

            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">`+invoices.categoryID+`.`+invoices.subCategoryID+`</h5>`;
            html += `</div>`;

            html += `<div class="card col-md-4 bg-dark text-white">`;
            html += `<h5 class="card-title">`+invoices.categoryDescription+` - `+invoices.subCategoryDescription+`</h5>`;
            html += `</div>`;
            }
        })
        html += `</div>`;
        document.getElementById("cards").innerHTML=html;
    }).catch(function(error){
        console.log(error);
    });
}