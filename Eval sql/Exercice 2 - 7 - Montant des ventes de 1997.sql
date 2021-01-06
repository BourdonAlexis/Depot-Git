SELECT SUM(order_details.UnitPrice*order_details.Quantity) AS 'Montant de vente 97'
FROM order_details
JOIN Orders
ON orders.OrderID = order_details.OrderID 
WHERE OrderDate LIKE '1997%';