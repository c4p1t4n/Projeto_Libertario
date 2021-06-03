CREATE DATABASE AustroLibertario;
use AustroLibertario;
CREATE TABLE tbAutores(
idAutor INT PRIMARY KEY AUTO_INCREMENT,
nomeAutor VARCHAR(100) NOT NULL,
nascimento DATE NOT NULL,
morte DATE 

)AUTO_INCREMENT = 1000;			
insert into tbAutores  values (null,'John locke','1632-08-29','1704-10-28'),
							  (null,'David Hume','1711-03-07','1776-08-25'),
							  (null,'Carl Menger','1840-03-02','1921-02-23'),
							  (null,'Ludwig von Mises','1881-09-29','1973-10-10'),
							  (null,'Friedrich Hayek','1899-05-08','1992-03-23'),
							  (null,'Murray Rothbard','1926-03-02','1995-01-07'),					  
							  (null,'Walter Brock','1941-08-21',null),
                              (null,'Hans-Hermann Hoppe','1949-03-02',null);
						

CREATE TABLE tbLivros(
idLivro INT PRIMARY KEY AUTO_INCREMENT,
nomeLivro VARCHAR(100),
temaLivro VARCHAR(50),
numeroPaginas int check (numeroPaginas < 1200), 
linkImagem text,
fkAutor int,
linkLivro text,
foreign key (fkAutor) references tbAutores(idAutor)
) AUTO_INCREMENT = 100;

insert into tbLivros values (null,'Anatomia do estado','politica',50,'https://images-na.ssl-images-amazon.com/images/I/317S+OR0pDL._SX329_BO1,204,203,200_.jpg',1005,'http://rothbardbrasil.com/wp-content/uploads/2015/10/A-anatomia-do-estado.pdf'),
							(null,'A ética da liberdade','etica',354,'https://images-na.ssl-images-amazon.com/images/I/41Ey5fl6kRL._SX335_BO1,204,203,200_.jpg',1005,'http://rothbardbrasil.com/wp-content/uploads/arquivos/A%20etica%20da%20liberdade%20-%20miolo%20capa%20brochura_2013.pdf'),
							(null,'Democracia  o deus que falhou','politica',372,'https://images-na.ssl-images-amazon.com/images/I/41DuwT3h8OL._SX330_BO1,204,203,200_.jpg',1007,'http://rothbardbrasil.com/wp-content/uploads/arquivos/deus-que-falhou.pdf'),
							(null,'A ciência econômica e o método austríaco','economia',74,'https://images-na.ssl-images-amazon.com/images/I/510dv2fcCtL._SX335_BO1,204,203,200_.jpg',1007,'http://rothbardbrasil.com/wp-content/uploads/arquivos/A%20Ciencia%20Economica%20e%20o%20Metodo%20Austriaco%20-%20WEB.pdf'),
							(null,'O que deve ser feito','etica',354,'https://images-na.ssl-images-amazon.com/images/I/51SPxrezZPL._SX331_BO1,204,203,200_.jpg',1007,'http://rothbardbrasil.com/wp-content/uploads/arquivos/oquedeveserfeito.pdf'),
							(null,'As seis lições','economia',108,'https://images-na.ssl-images-amazon.com/images/I/41zMb5xXVUL._SX330_BO1,204,203,200_.jpg' ,1003,'http://rothbardbrasil.com/wp-content/uploads/arquivos/seis-licoes.pdf'),
							(null,'Ação humana','economia',1020,'https://images-na.ssl-images-amazon.com/images/I/41WORX1AuEL._SX335_BO1,204,203,200_.jpg', 1003,'http://rothbardbrasil.com/wp-content/uploads/arquivos/acao-humana.pdf'),
                            (null,'Defendendo o indefensável','etica',224,'https://images-na.ssl-images-amazon.com/images/I/41i1tgaSzzL._SX315_BO1,204,203,200_.jpg',1006,'https://rothbardbrasil.com/defendendo-o-indefensavel/'),
                            (null,'Tratado da natureza humana','filosofia',760,'https://images-na.ssl-images-amazon.com/images/I/41SUEeucX+L._SX339_BO1,204,203,200_.jpg',1001,'https://books.google.com.br/books?id=0FrA3e4MJMAC&printsec=frontcover&hl=pt-BR#v=onepage&q&f=false'),
                            (null,'Princípios de Economia Política','economia',352,'https://rothbardbrasil.com/wp-content/uploads/2021/02/capa-Principios-Menger-299x450.jpg',1002,'https://rothbardbrasil.com/wp-content/uploads/2021/02/Principios-de-Economia-Politica-Carl-Menger.pdf'),
                            (null,'O caminho da servidão','filosofia',232,'https://images-na.ssl-images-amazon.com/images/I/41vP8tvLhgL._SX325_BO1,204,203,200_.jpg',1004,'http://rothbardbrasil.com/wp-content/uploads/arquivos/caminhodaservidao.pdf'),
                            (null,'Segundo Tratado Do Governo Civil','filosofia',103,'https://m.media-amazon.com/images/I/41sznoT+QVL.jpg',1000,'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxmaWxvc29maWFwb3B1bGFyfGd4OjdhMzYwOGQ0NTQwZDNjNjk')                            
                            ;
                            










CREATE TABLE tbUsuarios(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
senhaUsuario varchar (255) NOT NULL
);
select * from tbUsuarios;

CREATE TABLE tbLivrosFavoritos(
fkUsuario INT,
fkLivro INT,
foreign key (fkUsuario) references tbUsuarios(idUsuario),
foreign key (fkLivro) references tbLivros(idLivro),
primary key (fkUsuario,fkLivro)

);


