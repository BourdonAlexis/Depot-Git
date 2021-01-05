SELECT MONTH(OrderDate) AS 'Mois 97' ,SUM(Freight) AS 'Montant de vente'
FROM orders 
WHERE OrderDate LIKE '1997%'
GROUP BY OrderID;