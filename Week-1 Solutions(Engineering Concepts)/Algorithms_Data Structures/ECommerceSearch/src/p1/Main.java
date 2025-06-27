package p1;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Footwear"),
            new Product(103, "Watch", "Accessories"),
            new Product(104, "Phone", "Electronics"),
            new Product(105, "Bag", "Accessories")
        };

        // Linear Search
        Product foundLinear = SearchOps.linearSearch(products, "Phone");
        System.out.println("Linear Search Result: " + (foundLinear != null ? foundLinear : "Not Found"));

        Arrays.sort(products);
        Product foundBinary = SearchOps.binarySearch(products, "Phone");
        System.out.println("Binary Search Result: " + (foundBinary != null ? foundBinary : "Not Found"));
    }
}
