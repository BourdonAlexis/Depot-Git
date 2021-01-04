SELECT CompanyName AS 'Client', COUNT(orders.CustomerID) AS 'Nombres de commandes'
FROM customers
JOIN orders
ON customers.CustomerID = orders.CustomerID
GROUP BY CompanyName
HAVING COUNT(orders.CustomerID) > 10