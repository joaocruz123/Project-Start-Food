export default function () {
  return {
    stores: [
      {
        id: 1,
        name: "Burger King",
        type: "Hamburgueria",
        distance: "1.7",
        score: 4,
        delivery_value: "4.99",
        description: "Uma rede de restaurantes especializada em fast-food, fundada nos Estados Unidos",
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoUfh4ag5RWHEsKjQUKzl-WJLJ8jGtX77Esw&usqp=CAU',
        thumbnail: "https://pbs.twimg.com/media/Eg2VQRZWAAEaZlF.jpg",
        highlights: [
          {
            id: 1,
            type: "Combos",
            name: "2 por R$19,90",
            description: "Escolha: whopper, big king, cheeseburger duplo bacon, bk cheddar duplo, chicken duplo e whopper jr. Barbecue bacon.",
            img: "https://static-images.ifood.com.br/image/upload/t_high/pratos/f8d44f48-05ef-4044-aefc-f403e0b37d2f/202006261333_pBfp_v.png",
            value: "19.90",
            promotional_value: "",
            options: []
          }
        ],
        products: [
          {
            id: 1,
            type: "Combos",
            name: "Combo cheddar duplo",
            description: "2 hambúrgueres de carne, pão preto com gergelim, cheddar cremoso, e cebolas caramelizadas ao molho shoyu + batata e bebida", 
            img: "https://static-images.ifood.com.br/image/upload/t_high/pratos/4db4ab33-ae2a-4456-9b49-b7582fedbf24/202003231629_xof1_1.png",
            value: "31.90",
            promotional_value: "",
            additional: []
          },
          {
            id: 2,
            type: "Combos",
            name: "Combo big king",
            description: "2 hambúrgueres de carne, pão com gergelim, queijo derretido, picles, salada fresca (alface e cebola) e o exclusivo molho big king+ batata e bebida",
            img: "https://static-images.ifood.com.br/image/upload/t_thumbnail/pratos/4db4ab33-ae2a-4456-9b49-b7582fedbf24/202003231621_jEIb_1.png",
            value: "29.90",
            promotional_value: "",
            additional: []
          },
          {
            id: 3,
            type: "Acompanhamentos",
            name: "Batata Grande",
            description: "Crocantes e irresistíveis, nossas batatas fritas são servidas sempre levemente salgadas. Estas delícias são o acompanhamento perfeito para o seu sanduíche perfeito.",
            img: "https://static-images.ifood.com.br/image/upload/t_high/pratos/4db4ab33-ae2a-4456-9b49-b7582fedbf24/202003231735_xWm1_b.png",
            value: "8.90",
            promotional_value: "",
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
        delivery_value: "4.99",
        description: "Uma empresa de alimentação baseada em pizzas. Atualmente, é a maior rede de entregas de pizzas do mundo, com 13.000 lojas em 83 países.",
        logo: 'https://media-cdn.tripadvisor.com/media/photo-s/09/5c/90/5f/domino-s-pizza-secunda.jpg',
        thumbnail: "https://mercadoeconsumo.com.br/wp-content/uploads/2019/11/Dominos-Pizza-recebe-pedidos-via-Whatsapp-com-assistente-virtual.jpg",
        highlights: [
          {
            id: 1,
            type: "Pizza",
            name: "PIZZA PEPPERONI - MÉDIA",
            description: "Mussarela, pepperoni e orégano",
            img: "https://static-images.ifood.com.br/image/upload/t_high/pratos/075a9189-e830-41fd-a608-16aa105f7dfb/202012071317_EtTd_f.png",
            value: "35.85",
            promotional_value: "",
            options_type: 'checkbox',
            options: [
              {
                name:"Escolha a massa da pizza!",
                options_required: true,
                itens: [
                  { label: 'Fina', value: 'fina' },
                  { label: 'Tradicional', value: 'tradicional' }
                ]
              }
            ]
          }
        ],
        products: []
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
