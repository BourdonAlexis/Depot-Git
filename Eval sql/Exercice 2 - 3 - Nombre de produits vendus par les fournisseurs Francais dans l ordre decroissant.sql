SELECT ProductName AS 'Fournisseur',UnitsInStock AS 'Nombre de produit'
FROM products
JOIN suppliers
ON products.SupplierID = suppliers.SupplierID
WHERE country = 'france'
ORDER BY unitsInStock DESC ;