import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-03-26',
  useCdn: false,
};

const staticClient: ClientConfig ={
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-03-26',
  useCdn: true,
}

const client = createClient(config);
const staticClientItems = createClient(staticClient);


export default client;
export {staticClientItems}