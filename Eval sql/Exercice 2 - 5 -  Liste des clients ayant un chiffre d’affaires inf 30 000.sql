SELECT CompanyName AS 'Client', SUM(Freight) AS "Chiffre d'affaire",Country AS 'Pays'
FROM customers
JOIN orders
ON customers.CustomerID = orders.CustomerID
GROUP BY customers.CustomerID
HAVING SUM(Freight) > 30;