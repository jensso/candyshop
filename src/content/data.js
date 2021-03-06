import choco_1 from '../content/choco_1.jpg';
import choco_2 from '../content/choco_2.jpg';
import choco_3 from '../content/choco_3.jpg';
import pastry_1 from '../content/pastry_1.jpg';
import pastry_2 from '../content/pastry_2.jpg';
import pastry_3 from '../content/pastry_3.jpg';
import candy_1 from '../content/candy_1.jpg';
import candy_2 from '../content/candy_2.jpg';
import candy_3 from '../content/candy_3.jpg';

export const products = {
choco: [
 {type: 'choco1', amount:0, price: 7.50, sum:0, pic:(choco_1),
  description:'different types in 3 different colors, from milky white to dark brown'},
 {type: 'choco2', amount:0, price: 8.50, sum:0, pic:(choco_2),
  description: 'perfect for showing your heart to your beloved ones'},
 {type: 'choco3', amount:0, price: 9.50, sum:0, pic:(choco_3),
  description: 'a perfect way to make kids happy'}
],
pastry: [
 {type: 'pastry1', amount:0, price:10.95, sum:0, pic:(pastry_1),
  description: 'nutty homemade muffins'},
 {type: 'pastry2', amount:0, price:12.95, sum:0, pic:(pastry_2),
  description: 'tasty snacks, cookies and finest sweets'},
 {type: 'pastry3', amount:0, price:14.95, sum:0, pic:(pastry_3),
  description: 'cakes & pies for every celebration'}
],
candy: [
 {type: 'candy1', amount: 0, price: 6.90,sum:0, pic:(candy_1),
  description: 'colorful & fruity lollipops'},
 {type: 'candy2', amount: 0, price: 7.90,sum:0, pic:(candy_2),
  description: 'juicy & multicoloured sweets '},
 {type: 'candy3', amount: 0, price: 8.90,sum:0, pic:(candy_3),
  description: 'sweet things with lovely messages'}
]
};
