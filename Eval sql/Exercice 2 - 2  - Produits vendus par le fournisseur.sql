    SELECT ProductName,UnitPrice
    FROM products
    JOIN suppliers
	 ON suppliers.SupplierID
	 WHERE suppliers.SupplierID = '1'