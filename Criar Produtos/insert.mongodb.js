const database = 'bd3_atv2';

const collection = 'bd3-atv2-produtos';

use(database);

db[collection].insertMany(
    [
        {
            "codigo": 1,
            "nome": "Segno Original Deo Parfum",
            "valor": 20.00,
            "qnt": 10,
            "fabricante": "Avon",
            "categoria": "Perfume",
            "descricao": "Uma fragrância que redefine o significado de poder para homens modernos. Um lugar onde generosidade, empatia e influência são fundamentais."
        },
        {
            "codigo": 2,
            "nome": "Eternity Moment Feminino",
            "valor": 150.00,
            "qnt": 5,
            "fabricante": "Avon",
            "categoria": "Perfume",
            "descricao": "Uma fragrância fresca e floral, ideal para momentos românticos. Com notas de framboesa e peônia, transmite uma sensação de alegria e amor."
        },
        {
            "codigo": 3,
            "nome": "Avon Care Hidratante",
            "valor": 25.00,
            "qnt": 20,
            "fabricante": "Avon",
            "categoria": "Hidratante",
            "descricao": "Creme hidratante para a pele com fórmula enriquecida com ingredientes naturais, proporcionando hidratação intensa e maciez."
        },
        {
            "codigo": 4,
            "nome": "Nutrimetics Hidratante Facial",
            "valor": 80.00,
            "qnt": 15,
            "fabricante": "Avon",
            "categoria": "Hidratante",
            "descricao": "Hidratante facial com efeito imediato e longa duração, perfeito para todos os tipos de pele. Fórmula leve e não oleosa."
        },
        {
            "codigo": 5,
            "nome": "O Boticário Egeo Dolce",
            "valor": 120.00,
            "qnt": 8,
            "fabricante": "O Boticário",
            "categoria": "Perfume",
            "descricao": "Uma fragrância doce e envolvente, ideal para mulheres que amam se sentir especiais e únicas. Notas de baunilha e frutas."
        },
        {
            "codigo": 6,
            "nome": "Colônia Quasar",
            "valor": 75.00,
            "qnt": 12,
            "fabricante": "O Boticário",
            "categoria": "Perfume",
            "descricao": "Fragrância fresca e masculina, que combina notas de bergamota, lavanda e âmbar. Perfeita para o dia a dia."
        },
        {
            "codigo": 7,
            "nome": "Desodorante Roll-On",
            "valor": 30.00,
            "qnt": 25,
            "fabricante": "O Boticário",
            "categoria": "Desodorante",
            "descricao": "Desodorante roll-on com proteção de longa duração e fragrância suave, ideal para quem busca frescor durante todo o dia."
        },
        {
            "codigo": 8,
            "nome": "Make B. Batom Líquido",
            "valor": 45.00,
            "qnt": 30,
            "fabricante": "O Boticário",
            "categoria": "Maquiagem",
            "descricao": "Batom líquido de alta cobertura e longa duração. Com acabamento matte e disponível em diversas cores vibrantes."
        },
        {
            "codigo": 9,
            "nome": "Natura Ekos Castanha Creme Hidratante",
            "valor": 55.00,
            "qnt": 18,
            "fabricante": "Natura",
            "categoria": "Hidratante",
            "descricao": "Creme hidratante com extrato de castanha, proporciona hidratação profunda e nutrição para a pele seca."
        },
        {
            "codigo": 10,
            "nome": "Natura Todo Dia Hidratante",
            "valor": 50.00,
            "qnt": 22,
            "fabricante": "Natura",
            "categoria": "Hidratante",
            "descricao": "Hidratante corporal com fragrância leve e textura suave, ideal para o uso diário. Hidrata e perfuma a pele ao mesmo tempo."
        },
        {
            "codigo": 11,
            "nome": "Natura Aquarela Base Líquida",
            "valor": 65.00,
            "qnt": 20,
            "fabricante": "Natura",
            "categoria": "Maquiagem",
            "descricao": "Base líquida com acabamento natural, perfeita para uniformizar a pele. Com opção de diversas tonalidades."
        },
        {
            "codigo": 12,
            "nome": "Natura Crer Para Ver Perfume",
            "valor": 100.00,
            "qnt": 10,
            "fabricante": "Natura",
            "categoria": "Perfume",
            "descricao": "Uma fragrância única que combina notas de flores brancas e frutas vermelhas. Um perfume que inspira a acreditar em um mundo melhor."
        },
        {
            "codigo": 13,
            "nome": "Avon True Color Máscara para Cílios",
            "valor": 35.00,
            "qnt": 25,
            "fabricante": "Avon",
            "categoria": "Maquiagem",
            "descricao": "Máscara para cílios que proporciona volume e alongamento, com fórmula à prova d'água e longa duração."
        },
        {
            "codigo": 14,
            "nome": "O Boticário Floratta In Rose",
            "valor": 130.00,
            "qnt": 7,
            "fabricante": "O Boticário",
            "categoria": "Perfume",
            "descricao": "Perfume floral que evoca a leveza e a beleza das rosas. Ideal para mulheres românticas e elegantes."
        },
        {
            "codigo": 15,
            "nome": "Natura Plant Shampoo",
            "valor": 40.00,
            "qnt": 30,
            "fabricante": "Natura",
            "categoria": "Cuidado Capilar",
            "descricao": "Shampoo que limpa suavemente e nutre os cabelos. Fórmula sem sulfato e com ingredientes naturais."
        },
        {
            "codigo": 16,
            "nome": "Avon Glimmersticks Lápis para Olhos",
            "valor": 30.00,
            "qnt": 20,
            "fabricante": "Avon",
            "categoria": "Maquiagem",
            "descricao": "Lápis para olhos com textura cremosa e longa duração. Disponível em várias cores intensas."
        },
        {
            "codigo": 17,
            "nome": "O Boticário Nativa Spa Creme Esfoliante",
            "valor": 60.00,
            "qnt": 15,
            "fabricante": "O Boticário",
            "categoria": "Cuidado Corporal",
            "descricao": "Creme esfoliante que remove as células mortas e deixa a pele macia e renovada. Com fragrância delicada."
        },
        {
            "codigo": 18,
            "nome": "Natura Ekos Flor de Laranjeira",
            "valor": 90.00,
            "qnt": 12,
            "fabricante": "Natura",
            "categoria": "Perfume",
            "descricao": "Uma fragrância leve e refrescante que combina notas florais com um toque cítrico. Ideal para o dia a dia."
        },
        {
            "codigo": 19,
            "nome": "Avon Advance Techniques Óleo Capilar",
            "valor": 50.00,
            "qnt": 18,
            "fabricante": "Avon",
            "categoria": "Cuidado Capilar",
            "descricao": "Óleo capilar que nutre e repara os fios, deixando-os mais saudáveis e brilhantes."
        },
        {
            "codigo": 20,
            "nome": "O Boticário Make B. Blush",
            "valor": 55.00,
            "qnt": 20,
            "fabricante": "O Boticário",
            "categoria": "Maquiagem",
            "descricao": "Blush em pó que proporciona um acabamento natural e saudável, com fácil aplicação."
        },
        {
            "codigo": 21,
            "nome": "Avon True Color Batom Cremoso",
            "valor": 30.00,
            "qnt": 25,
            "fabricante": "Avon",
            "categoria": "Maquiagem",
            "descricao": "Batom cremoso com alta pigmentação e longa duração. Disponível em diversas cores que realçam a beleza dos lábios."
        },
        {
            "codigo": 22,
            "nome": "O Boticário Acqua Fresca",
            "valor": 70.00,
            "qnt": 15,
            "fabricante": "O Boticário",
            "categoria": "Perfume",
            "descricao": "Fragrância refrescante e leve, perfeita para o dia a dia. Combina notas de frutas cítricas e flores."
        },
        {
            "codigo": 23,
            "nome": "Natura Sou Sabonete Líquido",
            "valor": 35.00,
            "qnt": 20,
            "fabricante": "Natura",
            "categoria": "Cuidado Corporal",
            "descricao": "Sabonete líquido com ingredientes naturais que limpa suavemente, deixando a pele macia e perfumada."
        },
        {
            "codigo": 24,
            "nome": "Avon Anew Sérum Facial",
            "valor": 90.00,
            "qnt": 10,
            "fabricante": "Avon",
            "categoria": "Tratamento Facial",
            "descricao": "Sérum facial anti-idade com efeito lifting imediato. Melhora a firmeza e elasticidade da pele."
        },
        {
            "codigo": 25,
            "nome": "O Boticário Quasar Desodorante",
            "valor": 45.00,
            "qnt": 30,
            "fabricante": "O Boticário",
            "categoria": "Desodorante",
            "descricao": "Desodorante com fórmula que oferece proteção prolongada e fragrância fresca, ideal para homens ativos."
        },
        {
            "codigo": 26,
            "nome": "Natura Ekos Maracujá Hidratante",
            "valor": 50.00,
            "qnt": 18,
            "fabricante": "Natura",
            "categoria": "Hidratante",
            "descricao": "Creme hidratante com extrato de maracujá que proporciona hidratação intensa e refrescante para a pele."
        },
        {
            "codigo": 27,
            "nome": "Avon Magix Primer Facial",
            "valor": 65.00,
            "qnt": 20,
            "fabricante": "Avon",
            "categoria": "Maquiagem",
            "descricao": "Primer que prepara a pele para a maquiagem, minimizando os poros e proporcionando um acabamento perfeito."
        },
        {
            "codigo": 28,
            "nome": "O Boticário Malbec Perfume",
            "valor": 140.00,
            "qnt": 8,
            "fabricante": "O Boticário",
            "categoria": "Perfume",
            "descricao": "Uma fragrância sofisticada para homens, que combina notas de madeira e especiarias. Ideal para ocasiões especiais."
        },
        {
            "codigo": 29,
            "nome": "Natura Una Batom Líquido",
            "valor": 55.00,
            "qnt": 12,
            "fabricante": "Natura",
            "categoria": "Maquiagem",
            "descricao": "Batom líquido de longa duração e acabamento matte. Disponível em tons sofisticados que realçam a beleza."
        },
        {
            "codigo": 30,
            "nome": "Avon Care Loção Hidratante",
            "valor": 25.00,
            "qnt": 20,
            "fabricante": "Avon",
            "categoria": "Hidratante",
            "descricao": "Loção hidratante leve e de rápida absorção, ideal para o uso diário em todo o corpo."
        },
        {
            "codigo": 31,
            "nome": "O Boticário Nativa Spa Sabonete em Barra",
            "valor": 20.00,
            "qnt": 25,
            "fabricante": "O Boticário",
            "categoria": "Cuidado Corporal",
            "descricao": "Sabonete em barra com extratos naturais que limpa e perfuma a pele, deixando-a macia e suave."
        },
        {
            "codigo": 32,
            "nome": "Natura Plant Condicionador",
            "valor": 40.00,
            "qnt": 15,
            "fabricante": "Natura",
            "categoria": "Cuidado Capilar",
            "descricao": "Condicionador que desembaraça e nutre os fios, proporcionando maciez e brilho."
        },
        {
            "codigo": 33,
            "nome": "Avon True Color Pó Compacto",
            "valor": 45.00,
            "qnt": 22,
            "fabricante": "Avon",
            "categoria": "Maquiagem",
            "descricao": "Pó compacto que controla a oleosidade e proporciona um acabamento matte e natural."
        },
        {
            "codigo": 34,
            "nome": "O Boticário Floratta Celebre",
            "valor": 130.00,
            "qnt": 10,
            "fabricante": "O Boticário",
            "categoria": "Perfume",
            "descricao": "Perfume floral frutal que exala feminilidade e alegria, ideal para momentos especiais."
        },
        {
            "codigo": 35,
            "nome": "Natura Ekos Andiroba Óleo Corporal",
            "valor": 70.00,
            "qnt": 18,
            "fabricante": "Natura",
            "categoria": "Cuidado Corporal",
            "descricao": "Óleo corporal nutritivo que hidrata e perfuma a pele, deixando-a macia e sedosa."
        },
        {
            "codigo": 36,
            "nome": "Avon Color Trend Lápis de Olho",
            "valor": 25.00,
            "qnt": 30,
            "fabricante": "Avon",
            "categoria": "Maquiagem",
            "descricao": "Lápis de olho com fácil aplicação e cores vibrantes, ideal para criar diferentes looks."
        },
        {
            "codigo": 37,
            "nome": "O Boticário Make B. Delineador",
            "valor": 50.00,
            "qnt": 15,
            "fabricante": "O Boticário",
            "categoria": "Maquiagem",
            "descricao": "Delineador líquido de alta precisão, ideal para traços finos e ousados, com longa duração."
        },
        {
            "codigo": 38,
            "nome": "Natura Todo Dia Desodorante Roll-On",
            "valor": 30.00,
            "qnt": 20,
            "fabricante": "Natura",
            "categoria": "Desodorante",
            "descricao": "Desodorante roll-on com ação prolongada, que proporciona frescor e suavidade à pele."
        },
        {
            "codigo": 39,
            "nome": "Avon Clear Skin Gel Antiacne",
            "valor": 45.00,
            "qnt": 18,
            "fabricante": "Avon",
            "categoria": "Tratamento Facial",
            "descricao": "Gel antiacne com ingredientes eficazes que combatem as imperfeições e ajudam a controlar a oleosidade."
        },
        {
            "codigo": 40,
            "nome": "O Boticário Egeo Retro",
            "valor": 115.00,
            "qnt": 10,
            "fabricante": "O Boticário",
            "categoria": "Perfume",
            "descricao": "Uma fragrância que combina notas quentes e envolventes, perfeita para quem busca um toque de nostalgia."
        },
        {
            "codigo": 41,
            "nome": "Avon Advance Techniques Creme para Pentear",
            "valor": 40.00,
            "qnt": 20,
            "fabricante": "Avon",
            "categoria": "Cuidado Capilar",
            "descricao": "Creme para pentear que controla o frizz e proporciona hidratação e brilho aos cabelos."
        },
        {
            "codigo": 42,
            "nome": "O Boticário Nativa Spa Creme Hidratante para Mãos",
            "valor": 25.00,
            "qnt": 30,
            "fabricante": "O Boticário",
            "categoria": "Cuidado Corporal",
            "descricao": "Creme hidratante para mãos que proporciona maciez e proteção, com fragrância delicada."
        },
        {
            "codigo": 43,
            "nome": "Natura Aquarela Pó Facial",
            "valor": 55.00,
            "qnt": 15,
            "fabricante": "Natura",
            "categoria": "Maquiagem",
            "descricao": "Pó facial que ajuda a controlar a oleosidade e proporciona um acabamento suave e natural."
        },
        {
            "codigo": 44,
            "nome": "Avon True Color Corretivo",
            "valor": 35.00,
            "qnt": 25,
            "fabricante": "Avon",
            "categoria": "Maquiagem",
            "descricao": "Corretivo de alta cobertura que disfarça imperfeições e olheiras, com efeito duradouro."
        },
        {
            "codigo": 45,
            "nome": "O Boticário Glamour Perfume",
            "valor": 110.00,
            "qnt": 12,
            "fabricante": "O Boticário",
            "categoria": "Perfume",
            "descricao": "Fragrância sofisticada que combina notas florais e gourmand, ideal para momentos especiais."
        },
        {
            "codigo": 46,
            "nome": "Natura Ekos Buriti Óleo Hidratante",
            "valor": 75.00,
            "qnt": 18,
            "fabricante": "Natura",
            "categoria": "Cuidado Corporal",
            "descricao": "Óleo hidratante com extrato de buriti, ideal para hidratação profunda e proteção da pele."
        },
        {
            "codigo": 47,
            "nome": "Avon Care Protetor Labial",
            "valor": 15.00,
            "qnt": 40,
            "fabricante": "Avon",
            "categoria": "Cuidado Labial",
            "descricao": "Protetor labial que hidrata e protege os lábios contra ressecamento, com sabor suave."
        },
        {
            "codigo": 48,
            "nome": "O Boticário Cuide-se Bem Hidratante",
            "valor": 35.00,
            "qnt": 20,
            "fabricante": "O Boticário",
            "categoria": "Hidratante",
            "descricao": "Hidratante corporal leve que deixa a pele suave e perfumada, ideal para uso diário."
        },
        {
            "codigo": 49,
            "nome": "Natura Aquarela Delineador Líquido",
            "valor": 45.00,
            "qnt": 15,
            "fabricante": "Natura",
            "categoria": "Maquiagem",
            "descricao": "Delineador líquido com aplicador fino que proporciona precisão e definição ao olhar."
        },
        {
            "codigo": 50,
            "nome": "Avon Far Away Perfume",
            "valor": 100.00,
            "qnt": 10,
            "fabricante": "Avon",
            "categoria": "Perfume",
            "descricao": "Uma fragrância exótica e sedutora, perfeita para noites especiais, com notas de baunilha e flor de laranjeira."
        }
    ]
)