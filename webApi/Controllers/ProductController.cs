using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using webApi.Models;

namespace webApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase 
    {
        [HttpGet]
        public IActionResult Get() 
        {
            return new JsonResult(Product.GetProducts());
        }

        [HttpGet("/search/{search}")]
        public IActionResult Get(string search) {
            return new JsonResult(Product.SearchProducts(search));
        }

        [HttpGet("{id}")]
        public IActionResult GetProduct(int id) {
            return new JsonResult(Product.GetProducts().FirstOrDefault(x => x.Id == id));
        }
    }
}