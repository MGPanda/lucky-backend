const mongoose = require('mongoose');

const speciesSchema = new mongoose.Schema({
    perro: ['Beagle', 'Bóxer', 'Bulldog inglés', 'Caniche', 'Chihuahua', 'Dálmata', 'Golden retirever', 'Husky siberiano', 'Pastor alemán', 'Yorkshire terrier', 'Mestizo', 'Otro'],
    gato: ['Azul ruso', 'Bobtail americano', 'Burmés', 'Maine Coon', 'Manés', 'Persa', 'Ragdoll', 'Siamés', 'Siberiano', 'Somalí', 'Mestizo', 'Otro'],
    conejo: ['Belier', 'Blanco de Hotot', 'Cabeza de León', 'English Angora', 'Gigante de Flandes', 'Rex', 'Tan', 'Toy', 'Otro'],
    cobaya: ['Americana', 'Crestada', 'Satinada', 'Otros'],
    mamifero: ['Otros'],
    huron: ['Otros'],
    pez: ['Luchadores de Siam', 'Guppys', 'Guramis', 'Pez disco', 'Tetras', 'Otros'],
    reptil: ['Anolis', 'Camaleón', 'Chuckwalla', 'Iguana marina', 'Lagarto azul', 'Monstruo de Gila', 'Otros'],
    anfibio: ['Rana arborícola', 'Rana punta de flecha', 'Salamandra', 'Tritón', 'Otros'],
    insecto: ['Araña pollito', 'Hormiga', 'Insecto palo', 'Milpiés gigante', 'Tarántula mexicana', 'Otros'],
    ave: ['Agaporni', 'Cacatúa', 'Jilguero', 'Loro', 'Ninfa', 'Periquito', 'Otros']
});


const Species = mongoose.model('Species', speciesSchema);

module.exports = Species;