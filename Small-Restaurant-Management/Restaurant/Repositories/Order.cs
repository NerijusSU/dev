using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Transactions;

namespace Restaurant.Repositories
{
    public class Order
    {
        public List<Menu> FullOrder { get; set; }
        public double Total { get { return FullOrder.Select(x => x.Price).Sum(); } }

        public Table Table { get; set; }

        public Order()
        {
            FullOrder = new List<Menu>();

        }

        public void PrintOrderDetails(IConsole console)
        {

            console.WriteLine(DateTime.Now.ToString());
            console.WriteLine("Your order:");
            console.WriteLine($"Table number: {Table.TableName}");
            console.WriteLine($"Table seating: {Table.TableSize}");

            foreach (var item in FullOrder)
            {
                console.WriteLine($"You are ordering {item.Name}, for {item.Price} EUR.");
            }
            console.WriteLine($"Total to pay: {Total} EUR.");

        }




        public bool IsValidEmail()
        {

            Console.WriteLine("Iveskite savo el. pasto adresa jei norite ceki gauti el. pastu.");
            var emailInput = Console.ReadLine();
            string regex = @"^[^@\s]+@[^@\s]+\.(com|net|org|gov)$";

            return Regex.IsMatch(emailInput, regex, RegexOptions.IgnoreCase);


        }
    }
}