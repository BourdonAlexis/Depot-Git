DROP DATABASE IF EXISTS Eval_sql_1;

CREATE DATABASE Eval_sql_1; 

USE Eval_sql_1; 

CREATE TABLE client (
   cli_num      	Int NOT NULL ,
   cli_nom     	Varchar (50) NOT NULL ,
   cli_adresse  	Varchar (50) NOT NULL ,
   cli_tel			VARCHAR (30) NOT NULL ,
   
   CONSTRAINT PK PRIMARY KEY (cli_num)
);

CREATE TABLE commande (
	com_num     Int NOT NULL ,
   cli_num		Int NOT NULL ,
   com_date		DATETIME NOT NULL ,
   com_obs		Varchar (50) NOT NULL ,
   CONSTRAINT PK PRIMARY KEY (com_num),
   CONSTRAINT FK FOREIGN KEY (cli_num) REFERENCES client(cli_num)
);

CREATE TABLE produit (
    
   pro_num      		Int NOT NULL ,
   pro_libelle     	Varchar (50) NOT NULL ,
   pro_description  	Varchar (50) NOT NULL ,
   
   CONSTRAINT PK PRIMARY KEY (pro_num)
);

CREATE TABLE est_compose (
   com_num   Int NOT NULL ,
   pro_num   Int NOT NULL ,
   est_qte   Int NOT NULL ,
   CONSTRAINT PK PRIMARY KEY (com_num,pro_num) ,
   CONSTRAINT FK1 FOREIGN KEY (com_num) REFERENCES commande(com_num) ,
   CONSTRAINT FK2 FOREIGN KEY (pro_num) REFERENCES produit(pro_num)
);


CREATE INDEX cli_nom_index ON client(cli_nom);
SHOW INDEX from client