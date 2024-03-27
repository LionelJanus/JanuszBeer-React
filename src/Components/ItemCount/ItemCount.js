import {useCount} from '../Hooks/useCount'


export const ItemCount = () => {
  const { count, decrement, increment, addToCart } = useCount()
  return (
    <div>
        <div className='CountButton'>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        <div className='AddCart'>
            <button onClick={addToCart}>Agregar al Carrito</button>
        </div>
       </div>
    </div>
  )
    
}
