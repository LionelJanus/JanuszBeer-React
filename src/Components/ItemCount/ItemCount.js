import {useCount} from '../Hooks/useCount';
import { CustomButton } from "../Button/CustomButton";
import "./ItemCount.css"


export const ItemCount = () => {
  const { count, decrement, increment, addToCart } = useCount()
  return (
    <div>
        <div className='CountButton' style={{justifyContent:"flex-end"}}>
            <button className='menos' onClick={decrement} style={{width:"30px", backgroundColor:"black", color:"white"}}>-</button>
            <span style={{padding:"10px"}}>{count}</span>
            <button className='mas' onClick={increment} style={{width:"30px", backgroundColor:"black", color:"white"}}>+</button>
            </div>
        <div className='AddCart'>
            <CustomButton onClick={addToCart} />

            {/* <button onClick={addToCart}>Agregar al Carrito</button> */}
        
       </div>
    </div>
  )
    
}
