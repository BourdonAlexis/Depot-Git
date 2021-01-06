SELECT MONTH(OrderDate) AS 'Mois 97' ,SUM(order_details.UnitPrice*order_details.Quantity) AS 'Montant de vente'
FROM orders 
JOIN order_details
ON orders.OrderID = order_details.OrderID
WHERE OrderDate LIKE '1997%'
GROUP BY MONTH(OrderDate);