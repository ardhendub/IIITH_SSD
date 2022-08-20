select Essn as "Manager Ssn",count(*) as Count from WORKS_ON where Essn in (select Mgr_ssn from DEPARTMENT where Dnumber in (select Dnum from PROJECT where Pname="ProductY"));
