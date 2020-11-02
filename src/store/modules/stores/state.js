export default function () {
  return {
    stores: [
      {
        id: 1,
        name: "Burger King",
        type: "Hamburgueria",
        distance: "1.7",
        score: 4,
        delivery_value: 4.99,
        description: "Uma rede de restaurantes especializada em fast-food, fundada nos Estados Unidos",
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoUfh4ag5RWHEsKjQUKzl-WJLJ8jGtX77Esw&usqp=CAU',
        thumbnail: "https://pbs.twimg.com/media/Eg2VQRZWAAEaZlF.jpg",
        destaques: [
          {
            type: "Combo",
            name: "2 por R$19,90",
            description: "Escolha: whopper, big king, cheeseburger duplo bacon, bk cheddar duplo, chicken duplo e whopper jr. Barbecue bacon.",
            img: "https://static-images.ifood.com.br/image/upload/t_high/pratos/f8d44f48-05ef-4044-aefc-f403e0b37d2f/202006261333_pBfp_v.png",
            value: 19.90,
            options: []
          }
        ],
        products: [
          {
            type: "Combo",
            name: "Duble Cheddar",
            img: "",
            value: 31.99,
            additional: []
          },
          {
            tipo: "Combo",
            name: "Big King",
            img: "",
            value: 31.99,
            additional: []
          },

        ]
      },
      {
        id: 2,
        name: "Domino's Pizza",
        type: "Pizzaria",
        distance: "0.4",
        score: 5,
        delivery_value: 4.99,
        description: "Uma empresa de alimentação baseada em pizzas. Atualmente, é a maior rede de entregas de pizzas do mundo, com 13.000 lojas em 83 países.",
        logo: 'https://media-cdn.tripadvisor.com/media/photo-s/09/5c/90/5f/domino-s-pizza-secunda.jpg',
        thumbnail: "https://mercadoeconsumo.com.br/wp-content/uploads/2019/11/Dominos-Pizza-recebe-pedidos-via-Whatsapp-com-assistente-virtual.jpg"
      },
      {
        id: 3,
        name: "Giraffas",
        type: "Pizzaria",
        distance: "2.1",
        score: 4,
        delivery_value: 'Grátis',
        description: "Giraffas é uma rede de fast-food brasileira, fundada no Lago Sul, no Distrito Federal em agosto de 1981 por dois amigos.",
        logo: 'https://upload.wikimedia.org/wikipedia/pt/7/72/Logo_Giraffas.png',
        thumbnail: "https://mercadoeconsumo.com.br/wp-content/uploads/2019/07/Giraffas-Igual-n%C3%A3o-tem.jpg"
      }
    ]
  }
}
