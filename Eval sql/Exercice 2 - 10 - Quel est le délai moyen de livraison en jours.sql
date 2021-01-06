SELECT ROUND(AVG(DATEDIFF(ShippedDate,orderDate))) AS 'Délai moyen livraison'
FROM orders;