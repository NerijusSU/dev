using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Restaurant.Models
{
    public class Table
    {
        public int TableName { get; set; }
        public int TableSize { get; set; }
        public bool IsOccupied { get; set; }

    }



}