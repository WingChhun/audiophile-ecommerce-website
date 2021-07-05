import { gql } from 'apollo-server-express';

const ProductTypes = gql`
  type Image {
    mobile: String
    tablet: String
    desktop: String
  }

  type ProductFeatures {
    quantity: Float
    item: String
  }

  type Gallery {
    first: Image
    second: Image
    third: Image
  }
  type Slug {
    slug: String
    name: String
    image: Image
  }

  type Product {
    id: ID
    slug: String
    image: Image
    category: String
    new: Boolean
    price: Float
    description: String
    features: String
    includes: [ProductFeatures]
    gallery: Gallery
    others: [Slug]
  }

  #### Input
  input ImageInput {
    mobile: String
    tablet: String
    desktop: String
  }

  input GalleryInput {
    first: ImageInput
    second: ImageInput
    third: ImageInput
  }

  input SlugInput {
    slug: String
    name: String
    image: ImageInput
  }

  input ProductFeaturesInput {
    quantity: Float
    item: String
  }

  input ProductInput {
    slug: String
    image: ImageInput
    category: String
    new: Boolean
    price: Float
    description: String
    features: String
    includes: [ProductFeaturesInput]
    gallery: GalleryInput
    others: [SlugInput]
  }
`;

export default ProductTypes;
