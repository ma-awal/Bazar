import { v4 as uuidv4 } from 'uuid';
import t1 from '../assets/icons/case.svg';
import t2 from '../assets/icons/baby.svg';
import t3 from '../assets/icons/case.svg';
import t4 from '../assets/icons/cook.png';
import t5 from '../assets/icons/home.png';

const Product_Link = [
  { id: uuidv4(), icon: t1, category: 'Fruits' },
  { id: uuidv4(), icon: t2, category: 'Vegetable' },
  { id: uuidv4(), icon: t3, category: 'Seafood' },
  { id: uuidv4(), icon: t4, category: 'Dessert' },
  { id: uuidv4(), icon: t5, category: 'Meat' },
];
export default Product_Link;
