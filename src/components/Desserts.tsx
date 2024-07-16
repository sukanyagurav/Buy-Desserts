import React from 'react'
import deserts from '../data/data.json'
import Dessert from './Dessert'
import {motion} from 'framer-motion'
const Deserts = () => {
  return (
    <div className="basis-[68%]">
      <motion.h1  initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
          whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}   className='text-[--rose-900] font-bold text-4xl'>Desserts</motion.h1>
      <motion.div className='flex flex-wrap gap-7 mt-8 justify-center md:justify-evenly'
        variants={{
          visible:{transition:{staggerChildren:0.08}}
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
      {deserts.map(desert=>(
        <Dessert key={desert.name}  id={desert.id} image={desert.image} name={desert.name} category={desert.category} price={desert.price}/>
      ))}
      </motion.div>
    
    </div>
  )
}

export default Deserts
