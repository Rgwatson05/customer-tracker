// Add customer tracker assignment

// Create customer records
let customers = [
    {
        name: "John Smith",
        email: "john.smith@email.com",
        purchases: ["Laptop", "Mouse"]
    },
    {
        name: "Sarah Johnson",
        email: "sarah.johnson@email.com",
        purchases: ["Phone", "Headphones"]
    },
    {
        name: "Michael Brown",
        email: "michael.brown@email.com",
        purchases: ["Tablet"]
    }
];

// Add a new customer
customers.push({
    name: "Emily Davis",
    email: "emily.davis@email.com",
    purchases: ["Smart Watch"]
});

// Remove the first customer
customers.shift();

// Update a customer's email (Sarah is now at index 0 after shift)
customers[0].email = "sarah.johnson2026@email.com";

// Add a new purchase to Michael (now at index 1 after shift)
customers[1].purchases.push("Keyboard");

// Display customer information
customers.forEach(customer => {
    console.log(
        `Name: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`
    );
});
