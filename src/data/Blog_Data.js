import rew1 from '../assets/review/review1.png';
import rew2 from '../assets/review/review2.png';
import rew3 from '../assets/review/review3.png';

import popular1 from '../assets/popular/popular1.png';
import popular2 from '../assets/popular/popular2.png';
import popular3 from '../assets/popular/popular3.png';
import popular4 from '../assets/popular/popular4.png';

import { v4 as uuidv4 } from 'uuid';

const Blog_Data = [
  {
    id: uuidv4(),
    img: rew1,
    category: 'review',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cursus id sit cras sodales ullamcorper fringilla. Lacus tellus cras venenatis euismod in magna. A elementum posuere rhoncus integer adipiscing turpis sed. Sed non, in commodo volutpat laoreet id posuere eget. Et luctus pharetra leo fringilla tempor gravida ultricies eget. ',
    date: 'sep 20,2023',
    duration: '3 mint to read',
  },
  {
    id: uuidv4(),
    img: rew2,
    category: 'review',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cursus id sit cras sodales ullamcorper fringilla. Lacus tellus cras venenatis euismod in magna. A elementum posuere rhoncus integer adipiscing turpis sed. Sed non, in commodo volutpat laoreet id posuere eget. Et luctus pharetra leo fringilla tempor gravida ultricies eget. ',
    data: 'sep 20,2023',
    duration: '3 mint to read',
  },
  {
    id: uuidv4(),
    img: rew3,
    category: 'review',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cursus id sit cras sodales ullamcorper fringilla. Lacus tellus cras venenatis euismod in magna. A elementum posuere rhoncus integer adipiscing turpis sed. Sed non, in commodo volutpat laoreet id posuere eget. Et luctus pharetra leo fringilla tempor gravida ultricies eget. ',
    date: 'sep 20,2023',
    duration: '3 mint to read',
  },

  {
    id: uuidv4(),
    img: popular1,
    category: 'popular',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',

    date: 'sep 20,2023',
    duration: '3 mint to read',
  },
  {
    id: uuidv4(),
    img: popular2,
    category: 'popular',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',

    date: 'sep 20,2023',
    duration: '3 mint to read',
  },
  {
    id: uuidv4(),
    img: popular3,
    category: 'popular',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',

    date: 'sep 20,2023',
    duration: '3 mint to read',
  },
  {
    id: uuidv4(),
    img: popular4,
    category: 'popular',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',

    date: 'sep 20,2023',
    duration: '3 mint to read',
  },
];

export default Blog_Data;
