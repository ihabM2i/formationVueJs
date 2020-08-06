using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using webApi.Models;

namespace webApi.Controllers
{
    [ApiController]
    [EnableCors(PolicyName = "allPolicy")]
    [Route("[controller]")]
    public class TestController : ControllerBase 
    {
        [HttpGet]
        public IActionResult Get() 
        {
            return new JsonResult(new {test = "ok"});
        }
    }
}