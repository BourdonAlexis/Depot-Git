SELECT ProductName,UnitsInStock
FROM products
JOIN suppliers
ON products.SupplierID = suppliers.SupplierID
WHERE country = 'france'
ORDER BY unitsInStock DESC ;