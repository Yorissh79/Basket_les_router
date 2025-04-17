import React from 'react'
import style from './Home.module.scss'

const Home = () => {
  return (
    <div className={style.main}>
    
        <div className={style.cards}>
            
            {data && data.map((item) => <Card item={item} props={"normal"}/>)}

        </div>

    </div>
  )
}

export default Home