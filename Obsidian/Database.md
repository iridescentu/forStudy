- #RDBMS (Relational DataBase Management System)
  : 관계형 DB
  : MySQL, Oracle, MSSQL, Maria, PostgreSQL
  
<-> #비관계형 DB 또는 NoSQL DB 
      (MongoDB, Redis, Cassandra 등등)

- #SQL (Structured Query Langauge)
	- 참조 사이트: https://www.w3schools.com/

### 1. #SELECT문법

```
SELECT * FROM Customers;

SELECT CustomerName FROM Customers;

SELECT CustomerName, ContactName, Country
FROM Customers;

SELECT
  CustomerName, 1, 'Hello', NULL
FROM Customers;

SELECT * FROM Orders
WHERE EmployeeID = 3;

SELECT * FROM OrderDetails 
WHERE Quantity < 5;

SELECT * FROM Customers
ORDER BY ContactName;

SELECT * FROM OrderDetails
ORDER BY ProductID ASC, Quantity DESC;

SELECT * FROM Customers
LIMIT 10;

SELECT * FROM Customers
LIMIT 0, 10;

SELECT * FROM Customers
LIMIT 30, 10;

SELECT
  CustomerId AS ID,
  CustomerName AS NAME,
  Address AS ADDR
FROM Customers;

SELECT
  CustomerId AS '아이디',
  CustomerName AS '고객명',
  Address AS '주소'
FROM Customers;

SELECT
  CustomerID AS '아이디',
  CustomerName AS '고객명',
  City AS '도시',
  Country AS '국가'
FROM Customers
WHERE
  City = 'London' OR Country = 'Mexico'
ORDER BY CustomerName
LIMIT 0, 5;
```

### 2. #연산자

```
SELECT
  OrderID + ProductID
FROM OrderDetails;

SELECT
  ProductName,
  Price / 2 AS HalfPrice
FROM Products;

SELECT * FROM Orders
WHERE
  CustomerId = 15 AND EmployeeId = 4;

SELECT * FROM Products 
WHERE
  ProductName = 'Tofu' OR CategoryId = 8;

SELECT * FROM OrderDetails
WHERE
  ProductId = 20
  AND (OrderId = 10514 OR Quantity = 50);

SELECT
  ProductName, Price,
  Price > 20 AS EXPENSIVE 
FROM Products;

SELECT
  ProductName, Price,
  NOT Price > 20 AS CHEAP 
FROM Products;

SELECT * FROM OrderDetails
WHERE ProductID BETWEEN 1 AND 4;

SELECT * FROM Customers
WHERE CustomerName BETWEEN 'b' AND 'c';

SELECT * FROM Customers
WHERE City IN ('Torino', 'Paris', 'Portland', 'Madrid') 

SELECT * FROM Employees
WHERE Notes LIKE '%economics%'

SELECT * FROM OrderDetails
WHERE OrderID LIKE '1025_'
```

### #인코딩 & #디코딩

* 인코딩 ↔ 디코딩
* 암호화 ←양방향→ 복호화
* 암호화 --단방향→ 복호화
* #암호화(encryption)
* #복호화(decryption)
* Client --HTTPS→ Server(SSL: HTTPS 암호화에 쓰는 key)
* Client ←--------- Server

### #ERD