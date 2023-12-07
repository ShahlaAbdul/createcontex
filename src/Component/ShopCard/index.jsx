import React, { useContext }   from 'react'
import './style.scss'
import BasketProvider from '../BasketContext'

function Card({id,title,price,description,category,image}) {
    const { addBasket} = useContext(BasketProvider)

  return (
    <div>
        <div className='card'>
            <ul key={id}>
                <div className='img'>
                    <img src={image} alt="" />
                </div>
                <p>
                    <span>name:</span>
                    {title}
                </p>
                <p>
                    <span>price:</span>
                    {price}
                </p>
                <p>
                    <span>Description:</span>
                    {description}
                </p>
                <p>
                    <span>category: </span>
                    {category}
                </p>
                <p>
                    <button className='btn' > add basket</button>
                    <button className='btn' onClick={(x)=>{addBasket(x)}}> add wishlist</button>
                </p>

            </ul>
      

        </div>
    </div>
  )
}

export default Card