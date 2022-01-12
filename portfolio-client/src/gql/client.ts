import { ApolloClient, InMemoryCache } from "@apollo/client";

export default function () {
  // Client Side
  if (typeof window !== "undefined") {
    return new ApolloClient({
      uri: `${process.env.NEXT_PUBLIC_API_BASE_URL}/graphql`,
      cache: new InMemoryCache(),
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
      }
    });
  }
  // Server side
  return new ApolloClient({
    uri: `${process.env.API_BASE_URL}/graphql`,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
    }
  });
}
