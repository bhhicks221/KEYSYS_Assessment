using System;
using api.Interfaces;
using System.Collections.Generic;
using api.Models;

namespace api.Data
{
    public class ReadData : IReadData
    {
        public List<Invoices> GetAll()
        {
            List<Invoices> myInvoices = new List<Invoices>();
            StreamReader inFile = null;

            try
            {
                inFile = new StreamReader("data.txt");
            }
            catch (FileNotFoundException e)
            {
                Console.WriteLine($"\nSomething went wrong... returning blank list {e}\n");
                return myInvoices;
            }

            string line = inFile.ReadLine(); // priming read
            while (line != null)
            {
                string[] temp = line.Split(",");
                // DateTime time = DateTime.Parse(temp[2]);
                myInvoices.Add(new Invoices(){InvoiceTypeCode = temp[18], InvoiceTypeDescription = temp[19], 
                                            CategoryID = temp[17], CategoryDescription = temp[16], 
                                            SubCategoryID = temp[21], SubCategoryDescription = temp[20]});
                line = inFile.ReadLine(); // update read
            }
            inFile.Close();

            return myInvoices;
        }
    }
}