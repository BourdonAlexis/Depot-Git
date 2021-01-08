    SELECT ProductName AS 'Produit' ,UnitPrice AS 'Prix'
    FROM products
    JOIN suppliers
	 ON suppliers.SupplierID = Products.SupplierID
	 WHERE CompanyName = 'Exotic Liquids'
	 
