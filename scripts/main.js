import { renderLibrary } from "./functions/renderLibrary.js";
import { Book } from "./prototypes/Book.js";

const library = [];



const hobbit = new Book(`Hobbit`, `JRR`, 354 , true);
const rabbit = new Book(`Rabbit`, `Joe Simon`, 502 , false);
const hostel = new Book(`Evil Hostel`, `Rare Joes`, 120 , true);
const transilvania = new Book(`transilvania`, `Rare Joes`, 120 , true);

library.push(hobbit);
library.push(rabbit);
library.push(hostel);
library.push(transilvania);

renderLibrary(library);