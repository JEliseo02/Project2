const {v4: uuidv4} = require('uuid');

const items = [
{
    id: '1',
    title: 'Verdantara',
    seller: 'PX4',
    condition: 'Habitable',
    price: 3500000000000000.0,
    description: 'Verdantaras surface is a mesmerizing blend of lush, verdant landscapes and golden plains, where flora and fauna thrive in harmony. The green areas, rich in dense forests and sprawling jungles, are teeming with diverse ecosystems. These regions are believed to be the result of an abundant presence of chlorophyll-based plant life, which contributes to the planets capacity for sustaining various life forms. The yellow zones, on the other hand, are not barren but instead consist of fertile grasslands and savannas, rich in nutrients and bathed in sunlight, making them ideal for agriculture and settlement.',
    image: '/images/planet1.webp',
    totalOffers: '7',
    active: true
},
{
    id:'2',
    title: 'TerraNova',
    seller: 'SM-10x',
    condition: 'Resourceful, Large Body',
    price: 8500000000000000.0,
    description: 'Characterized by its striking color palette of light blue, brown, and dark blue, TerraNova paints a picture of serene beauty and stark contrasts. The light blue swathes of its atmosphere hint at a rich oxygen composition, promising breathable air and clear skies. This is complemented by the dark blue expanses of its vast oceans, which are not only the deepest known in the Octulus Way but are also teeming with life and resources, hinting at untold secrets lurking in their abyssal depths.',
    image: '/images/planet2.avif',
    totalOffers: '8',
    active: true
},
{
    id:'3',
    title: 'Prismara',
    seller: 'PX4',
    condition: 'Habitable',
    price: 12550000000000000.0,
    description: 'Nestled in a corner of the galaxy renowned for its breathtaking astronomical phenomena, Prismara is a spectacle of natural beauty. The planet is enveloped in a mesmerizing dance of light and color, thanks to its atmosphere, which refracts light in a way that covers the surface in a myriad of hues, reminiscent of a constantly shifting prism. This phenomenon not only makes Prismara a jewel in the void of space but also supports a vibrant and diverse ecosystem.',
    image: '/images/planet3.avif',
    totalOffers: '3',
    active: true
},
{
    id:'4',
    title: 'Viridia Haven',
    seller: 'LZS-9',
    condition: 'Resourceful, leisurly',
    price: 5000000000000.0,
    description: 'Viridia Haven exhibits a surface that radiates with shades of turquoise and sapphire, intermingled with swirls of cream and emerald, suggesting a rich tapestry of biomes. Its condition of Resourceful alludes to the wealth of natural resources that are readily available, likely including rare minerals and fertile soils perfect for high-yield agriculture and sustainable energy harvesting.',
    image: '/images/planet4.jpg',
    totalOffers: '3',
    active: true
},
{
    id:'5',
    title: 'Mirage Xto-2',
    seller: 'MCSLA Unity',
    condition: 'Habitable, Small Body',
    price: 1210000000000000.0,
    description: 'The aquatic nature of Mirage Xto-2 opens up a new dimension of meteorological phenomena, potentially with weather systems dominated by the interplay of water currents and air flows above and below the surface. The water on this planet has the remarkable quality of being breathable, allowing organisms, including humans, to live freely in and upon its vast oceans without the encumbrance of diving suits or breathing apparatuses. This feature alone sets Mirage Xto-2 apart from other habitable worlds, offering a lifestyle that is simultaneously aquatic and terrestrial.',
    image: '/images/planet5.jpeg',
    totalOffers: '1',
    active: true
},
{
    id:'6',
    title: 'Zeus',
    seller: 'PX4',
    condition: 'Habitable, Resourceful, Intense Weather',
    price: 7800000000000000.0,
    description: "Zeus's surface is a tapestry of formidable weather patterns, dominated by perpetual lightning storms and hurricanes reaching intensities of categories 2 and 3. Such hostile conditions have rendered the surface inhospitable; however, humanitys ingenuity shines through this adversity. Subterranean terra cities, marvels of human engineering, thrive beneath the planet's tumultuous exterior. These underground havens provide sanctuary from the relentless storms above, showcasing a triumph of life and civilization in the face of nature's fury. The planet's intense weather is not merely a challenge to be overcome but also a vital resource. The ceaseless lightning storms are harnessed, their raw power converted into an abundant supply of energy for Zeus's inhabitants. This natural phenomenon makes the planet an invaluable power source, a beacon of self-sustaining energy in the vastness of space.",
    image: '/images/planet6.jpeg',
    totalOffers: '4',
    active: true
},
{
    id:'7',
    title: 'Mercury',
    seller: 'MCSLA Unity',
    condition: 'Habitable, Small Body',
    price: 5.0,
    description: 'Mercury is the second densest planet, after Earth. It has a large metallic core with a radius of about 1,289 miles (2,074 kilometers), about 85% of the planets radius. There is evidence that it is partly molten or liquid.',
    image: '/images/planet7.jpeg',
    totalOffers: '1',
    active: true
},


];

exports.find = () => items; 

exports.findById = id => items.find(item => item.id === id);

exports.save = function (item) {
    item.id = uuidv4();
    item.active = true;
    item.totalOffers = "0";
    items.push(item)
};

exports.updateById = function (id, newItem){
    let item = items.find(item => item.id === id); 
    if(item){
        item.title = newItem.title;
        item.seller = newItem.seller;
        item.condition = newItem.condition;
        item.price = newItem.price;
        item.description = newItem.description;
        item.image = newItem.image;
        item.totalOffers = newItem.totalOffers;
        item.active = newItem.active;
        console.log("IT WORKED");
        return true;
    } else {
        return false;
    }
    
    
    

}

exports.deleteByID = function(id) {
    let index = items.findIndex(item => item.id === id);
    if (index !== -1 ){
        items.splice(index,1);
        return true;
    } else{
        return false;
    }
}