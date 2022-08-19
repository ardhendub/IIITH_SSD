select concat(Fname," ",Minit," ",Lname) as "Full Name",Ssn,Dno,count(Servent) from (select a.Fname,a.Minit,a.Lname, a.Ssn,a.Dno, b.Ssn as Servent from EMPLOYEE as a,EMPLOYEE b where a.Ssn in (select Super_ssn from EMPLOYEE) and a.Ssn=b.Super_ssn) as T group by T.Ssn order by 4;