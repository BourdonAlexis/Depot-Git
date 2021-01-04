SELECT ProductName,UnitsInStock,country
FROM products
JOIN order_details
ON order_details.productID = products.ProductID
JOIN orders 
ON orders.orderID = order_details.orderID
JOIN customers
ON customers.CustomerID = orders.CustomerID
WHERE country = 'france'