const MOCK_USERS = [
    {
        'email': 'teste@email.com',
        'password': '123'
    },
    {
        'email': 'teste2@email.com',
        'password': '123'
    },
    {
        'email': 'teste3@email.com',
        'password': '123'
    }
];

const MOCK_POSTS = {
    "posts": [
        {
            "id": 1,
            "title": "Apple lança iPhone X e iPhone 8",
            "body": "A Apple lançou seu novo smartphone iPhone X em evento nesta terça-feira (12) em Cupertino, na Califórnia. As novidades do aparelho são que ele não tem botão home e tem tela Super Retina. Ele vai custar a partir de U$ 999 e a venda começa no dia 27 de outubro nos Estados Unidos, com entrega a partir de 3 de novembro.",
            "creationDate": "2017-09-24T16:10:00"
        },
        {
            "id": 2,
            "title": "Agora vai, Hero6? GoPro confirma evento para 28 de setembro",
            "body": "A GoPro acaba de confirmar um novo evento para esta quinta-feira (28), em que ela irá apresentar seu “lançamento de 2017”. O que veremos no evento? Infelizmente, nada foi revelado no convite que a companhia enviou para várias mídias internacionais.",
            "creationDate": "2017-09-25T10:28:00"
        },
        {
            "id": 3,
            "title": "Intel anuncia oficialmente a sua 8ª geração de processadores",
            "body": "A Intel anunciou hoje (25) a oitava geração dos seus processadores e eles chegam prometendo desempenho avançado “para gamers, overclockers e criadores de conteúdo que precisam de desempenho premium”. O carro-chefe da nova família é um processador dedicado à jogatina, o melhor de todos os tempos para isso, de acordo com a fabricante, mas há também outras novidades.",
            "creationDate": "2017-09-25T18:35:00"
        }
    ]
}

const JWT_KEY = 'secret';

const MESSAGES = {
    USER_NOT_FOUND : 'Usuário não encontrado',
    INVALID_PARAMS: 'Parâmetros inválidos',
    USER_NOT_AUTHENTICATED: 'Usuário não autenticado',
    INVALID_JWT: 'JWT inválido',
    POST_NOT_FOUND: 'Post não encontrado',
    POST_DELETED: 'Post removido com sucesso',
    POST_UPDATED: 'Post atualizado com sucesso',
    INVALID_PATH: 'PATH inválido',
    RUNNING_SERVER: 'Server is running on port 8080...'
}

module.exports = {
    MOCK_USERS,
    MOCK_POSTS,
    JWT_KEY,
    MESSAGES
}