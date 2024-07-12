/*Inner Join: Returns records that have matching values in both tables.
Write a SQL query to find the second highest salary in the employees table.
 */

SELECT employees.name, departments.name
FROM employees
FULL OUTER JOIN departments
ON employees.department_id = department.id


SELECT MAX(salary)
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees)