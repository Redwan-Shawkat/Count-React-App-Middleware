export const ourMiddleWare = (store) => (next) => (action) => {
  console.log("Our Redux Store", store.getState());
  console.log("Dispatched Action:", action);

           /*

          // -----> TESTING PURPOSE 

           if (action.type !== "decrement") {
               next(action)
          }

          */

           /*
          
          // -----> TESTING PURPOSE 

           setTimeout(() => {
               next(action)
           }, 2000)
          

          */

          next(action);
  
} 