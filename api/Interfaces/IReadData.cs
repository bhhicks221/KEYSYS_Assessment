using System.Collections.Specialized;
using api.Models;
using api.Data;
using System.Collections.Generic;
namespace api.Interfaces
{
    public interface IReadData
    {
         public List<Invoices> GetAll();
    }
}