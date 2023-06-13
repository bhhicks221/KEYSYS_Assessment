using Microsoft.AspNetCore.Mvc;
using System;
using api.Models;
using api.Data;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers;

[ApiController]
[Route("api/Data")]
    public class DataController : ControllerBase
    {
        [EnableCors("OpenPolicy")]
        [HttpGet (Name = "InvoicesData")]
        public List<Invoices> Get()
        {
            ReadData newRead = new ReadData();
            List<Invoices> myInvoices = newRead.GetAll();
            return myInvoices;
        }
    }
