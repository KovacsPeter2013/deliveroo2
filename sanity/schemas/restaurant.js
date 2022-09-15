export default {
    name: 'restaurant',
    title: 'Restaurant',
    type: 'document',
    fields: [
      {
        name: "name",
        type: "string",
        title: "Restaurant name",
        validation: (Rule) => Rule.required(),
  
      },

      {
        name: "short_description",
        type: "string",
        title: "Rövid leírás",
        validation: (Rule) => Rule.max(200),
  
      },
  
  
      {
        name: "image",
        type: "image", 
        title: "Fotó az étteremről",
      },
  
      {
        name: "lat",
        type: "number",
        title: "latitude of the restaurant"
      },
      
      {
        name: "long",
        type: "number",
        title: "longitude of the restaurant"
      },
  
  
      {
        name: "address",
        type: "string",
        title: "Étterem címe",
        validation: (Rule) => Rule.required(),
      }, 
  
  
      {
        name: "rating",
        type: "string",
        title: "Adj meg értékelést  1 és 5 között",
        validation: (Rule) => 
        Rule.required()
        .min(1)
        .max(5)
        .error("Kérjük 1 és között adj meg egy értéket")
      },
  
      {
        name: "type",     
        title: "Category",
        validation: (Rule) =>Rule.required(),
        type: "reference",
        to: [{type: "category" }],  
      },

      {
        name : "dishes",
        type: "array",
        title: "Dishes",
        of: [{type: "reference", to: [{type: "dish"}]  }],
      }





   
  
  
    ],
  
  
  }
  