export const taskMap = new Map([
  [
    1,
    {
      text: '预约抢购',
      message: '该商品是预约抢购商品，需要自行加入到购物车，并确保购物车里不含其他可提交商品'
    }
  ],
  [
    2,
    {
      text: '秒杀商品',
      message: '该商品是秒杀商品，会自动提交订单'
    }
  ],
  [
    3,
    {
      text: '查询库存自动下单',
      message: '开始轮询查询库存情况'
    }
  ]
])
