import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = sanityClient({
    projectId:'kbizr6ye', 
    dataset: 'production',
    useCdn : true,
    apiVersion: "2021-10-21"
})

// Run this to add exception for localhost 3000 CORS Policy
// sanity cors add http://localhost:3000 
const builder  = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);


export default client;