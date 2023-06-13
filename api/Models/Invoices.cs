using System;
using System.Collections.Generic;
namespace api.Models
{
        public class Invoices
    {
        // auto implemented properties
        public string? InvoiceTypeCode {get; set;}
        public string? InvoiceTypeDescription {get; set;}
        public string? CategoryID {get; set;}
        public string? CategoryDescription { get; set; }
        public string? SubCategoryID {get; set;}
        public string? SubCategoryDescription {get; set; }
        public override string ToString() // overriding the ToString for the song class to include all properties of the class
        {
            return InvoiceTypeDescription + " (ID: " + InvoiceTypeCode + ", Category: " + CategoryDescription + ")";
        }
        public string ToFile(){
            return InvoiceTypeCode + "," + InvoiceTypeDescription + "," + CategoryID + "," + 
            CategoryDescription + "," + SubCategoryID + "," + SubCategoryDescription;
        }
    }
}