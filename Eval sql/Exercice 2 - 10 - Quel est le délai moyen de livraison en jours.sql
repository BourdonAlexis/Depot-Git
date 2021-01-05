SELECT ROUND(AVG(DATEDIFF(RequiredDate,orderDate))) AS 'Délai moyen livraison'
FROM orders;
