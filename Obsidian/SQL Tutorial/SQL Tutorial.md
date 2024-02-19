# INDEX
[1. SQL 소개](obsidian://open?vault=1%20%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8&file=SQL%20Tutorial%2F1.%20SQL%20%EC%86%8C%EA%B0%9C)

[2. Querying Data (데이터 쿼리)](obsidian://open?vault=1%20%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8&file=SQL%20Tutorial%2F2.%20Querying%20Data%20(%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EC%BF%BC%EB%A6%AC))

[3. Sorting Data (데이터 정렬)](obsidian://open?vault=1%20%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8&file=SQL%20Tutorial%2F3.%20Sorting%20Data%20(%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EC%A0%95%EB%A0%AC))

[4. Filtering Data (데이터 필터링)](obsidian://open?vault=1%20%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8&file=SQL%20Tutorial%2F4.%20Filtering%20Data%20(%EB%8D%B0%EC%9D%B4%ED%84%B0%20%ED%95%84%ED%84%B0%EB%A7%81))

[5. Conditional Expressions (조건식)](obsidian://open?vault=1%20%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8&file=SQL%20Tutorial%2F5.%20Conditional%20Expressions%20(%EC%A1%B0%EA%B1%B4%EC%8B%9D))

[6. Joining Multiple Tables (여러 테이블 조인)](obsidian://open?vault=1%20%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8&file=SQL%20Tutorial%2F6.%20Joining%20Multiple%20Tables%20(%EC%97%AC%EB%9F%AC%20%ED%85%8C%EC%9D%B4%EB%B8%94%20%EC%A1%B0%EC%9D%B8))

[7. Aggregate Functions (집계 함수)](obsidian://open?vault=1%20%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8&file=7.%20Aggregate%20Functions%20(%EC%A7%91%EA%B3%84%20%ED%95%A8%EC%88%98))

[8. Grouping Data (데이터 그룹화)](obsidian://open?vault=1%20%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8&file=SQL%20Tutorial%2F8.%20Grouping%20Data%20(%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EA%B7%B8%EB%A3%B9%ED%99%94))

[9. SET Operators (SET 연산자)](obsidian://open?vault=1%20%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8&file=SQL%20Tutorial%2F9.%20SET%20Operators%20(SET%20%EC%97%B0%EC%82%B0%EC%9E%90))

[10. Subquery (서브쿼리, 하위쿼리)](obsidian://open?vault=1%20%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8&file=SQL%20Tutorial%2F10.%20Subquery%20(%EC%84%9C%EB%B8%8C%EC%BF%BC%EB%A6%AC%2C%20%ED%95%98%EC%9C%84%EC%BF%BC%EB%A6%AC))

[11. Modifying data (데이터 수정)](obsidian://open?vault=1%20%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8&file=SQL%20Tutorial%2F11.%20Modifying%20data%20(%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EC%88%98%EC%A0%95))

[12. Working with table structures (데이터 구조정의 작업)](obsidian://open?vault=1%20%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8&file=SQL%20Tutorial%2F12.%20Working%20with%20table%20structures%20(%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EA%B5%AC%EC%A1%B0%EC%A0%95%EC%9D%98%20%EC%9E%91%EC%97%85))

[13. Constraints (제약조건)](obsidian://open?vault=1%20%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8&file=SQL%20Tutorial%2F13.%20Constraints%20(%EC%A0%9C%EC%95%BD%EC%A1%B0%EA%B1%B4))

```javascript
# employees 테이블 생성 쿼리
CREATE TABLE employees (
	employee_id INT (11) AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR (20) DEFAULT NULL,
	last_name VARCHAR (25) NOT NULL,
	email VARCHAR (100) NOT NULL,
	phone_number VARCHAR (20) DEFAULT NULL,
	hire_date DATE NOT NULL,
	job_id INT (11) NOT NULL,
	salary DECIMAL (8, 2) NOT NULL,
	manager_id INT (11) DEFAULT NULL,
	department_id INT (11) DEFAULT NULL,
	FOREIGN KEY (job_id) REFERENCES jobs (job_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (department_id) REFERENCES departments (department_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (manager_id) REFERENCES employees (employee_id)
);
```

```javascript
# 데이터 추가 예문
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (100,'Steven','King','steven.king@sqltutorial.org','515.123.4567','1987-06-17',4,24000.00,NULL,9);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (101,'Neena','Kochhar','neena.kochhar@sqltutorial.org','515.123.4568','1989-09-21',5,17000.00,100,9);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (102,'Lex','De Haan','lex.de haan@sqltutorial.org','515.123.4569','1993-01-13',5,17000.00,100,9);
```