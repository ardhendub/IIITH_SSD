select a.Dnumber,b.Dname,a.Count from(select Dnumber,count(*) as Count from DEPT_LOCATIONS where Dnumber in (select Dnumber from DEPARTMENT where Mgr_ssn in(select Essn from (select Essn,Sex,count(*) as count from DEPENDENT group by Essn,Sex having Sex="F" and count>=2) as T)) group by Dnumber) as a, DEPARTMENT
as b where a.Dnumber=b.Dnumber;
