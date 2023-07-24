import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';

export async function loader({params, context}) {
  const {handle} = params;
  const {product} = await context.storefront.query(PRODUCT_QUERY, {
    variables: {
      handle,
    },
  });

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  return json({
    handle,
    product,
  });
};

import ProductPage from "../components/content/productPage";
export default function ProductHandle() {
  const {handle, product} = useLoaderData();

  return (
    <ProductPage />
    // <div className="product-wrapper">
    //   <h2>Product Handle: {handle}</h2>
    //   <PrintJson data={product} />
    // </div>
  );
}

// debug component to see product data
function PrintJson({data}) {
  return (
    <details className="outline outline-2 outline-blue-300 p-4 my-2">
      <summary>Product JSON</summary>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </details>
  );
}

// GraphQL string
const PRODUCT_QUERY = `#graphql
  query product($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      vendor
      descriptionHtml
      media(first: 10) {
        nodes {
          ... on MediaImage {
            mediaContentType
            image {
              id
              url
              altText
              width
              height
            }
          }
          ... on Model3d {
            id
            mediaContentType
            sources {
              mimeType
              url
            }
          }
        }
      }
      options {
        name,
        values
      }
    }
  }
`;