import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
  addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]; //...state.items = tartsd meg ami a kosárban van. action.payload= add hozzá a végéhez
    },
    removeFromBasket: (state, action) => {


      const index = state.items.findIndex( // Ez egy react bépített function
        (item) => item.id === action.payload.id
        ); 

      let newBasket = [...state.items]; // Másolatot készít a kosárról. Nem szabad direktben az eredeti kosarat basztatni

      if(index >= 0){
        newBasket.splice(index, 1); // Ez találja meg az id-t
        
      }else{
        console.warn(
          `Nem lehet törölni a terméket (id: ${action.payload.id}) mert nincs a kosárban`
        );
      }

      state.items = newBasket;
    },    
  },
});

 
export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;
// Ez akadályozza meg, hogy a darabszám nyomkodásra más termék darabszáma is növekedjen
// Ki filterezi, hogy csak az adott id emelkedjen, amire nyomkodunk. Egy tömmbel tér vissza.
export const selectBaskeItemsWithId = (state, id) => 
state.basket.items.filter((item) => item.id === id)

export default basketSlice.reducer;