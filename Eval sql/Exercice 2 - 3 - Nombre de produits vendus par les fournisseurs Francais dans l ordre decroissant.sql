SELECT CompanyName AS 'Fournisseur', COUNT(suppliers.SupplierID) AS 'Nombre de produit'
FROM suppliers
JOIN products
ON products.SupplierID = suppliers.SupplierID
WHERE suppliers.Country = 'France' 
GROUP BY suppliers.SupplierID 
ORDER BY COUNT(suppliers.SupplierID) DESC;


