using System;
using System.Collections.Generic;
namespace webApi.Models 
{
    public class Product 
    {
        private int id;

        private string title;

        private string description;

        private string image;

        private decimal price;

        public decimal Price { get => price; set => price = value; }
        public string Image { get => image; set => image = value; }
        public string Description { get => description; set => description = value; }
        public string Title { get => title; set => title = value; }
        public int Id { get => id; set => id = value; }

        public static List<Product> GetProducts() 
        {
            List<Product> liste = new List<Product>();
            liste.Add(new Product {Id=1, Title="product 1", Description="description produit 1", Image = "https://picsum.photos/id/241/200/200", Price=10});
            liste.Add(new Product {Id=2, Title="product 2", Description="description produit 2", Image = "https://picsum.photos/id/240/200/200", Price=20});
            liste.Add(new Product {Id=3, Title="product 3", Description="description produit 3", Image = "https://picsum.photos/id/242/200/200", Price=30});
            liste.Add(new Product {Id=4, Title="product 4", Description="description produit 4", Image = "https://picsum.photos/id/243/200/200", Price=40});
            liste.Add(new Product {Id=5, Title="product 5", Description="description produit 5", Image = "https://picsum.photos/id/244/200/200", Price=50});
            return liste;
        }

        public static List<Product> SearchProducts(string search) {
            return GetProducts().FindAll((e) => e.Title.Contains(search));
        }
    }
}