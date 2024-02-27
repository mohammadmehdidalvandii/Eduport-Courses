import HeaderPage from '../../components/module/HeaderPage/HeaderPage'
import UserBasket from '../../components/template/basket/UserBasket'

function Basket() {
  return (
    <>
      <HeaderPage
        title='سبد خرید'
        text='سبد خرید'
      />
      <UserBasket/>
    </>
  )
}

export default Basket