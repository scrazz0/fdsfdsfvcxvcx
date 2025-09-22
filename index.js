import { motion } from 'framer-motion';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/properties') // Замени на твой бекенд URL
      .then(res => setProperties(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <ThemeSwitcher />
      <motion.h1 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="text-4xl font-bold"
      >
        Добро пожаловать в Название компании
      </motion.h1>
      <section>
        <h2>Как это работает</h2>
        {/* Краткое описание */}
      </section>
      <section>
        <h2>Выгодные предложения</h2>
        {properties.map(prop => (
          <motion.div key={prop.id} className="card" initial={{ scale: 0 }} animate={{ scale: 1 }}>
            {prop.name} - {prop.price}
          </motion.div>
        ))}
      </section>
      {/* Другие блоки по ТЗ */}
    </div>
  );
}