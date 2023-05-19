import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink';
import { getProductById } from 'api';
import { useEffect, useState } from 'react';
import {
  ProductName,
  ProductSectionTitle,
  ImagesDetailWrapper,
  ProductDetailsText,
  CharacteristicsList,
} from 'components/ProductList/Product.styled';
import { CombinedImage } from 'components/Combined/Combined';

export const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  useEffect(() => {
    const fetchOneProduct = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOneProduct();
  }, [id]);

  return (
    <main>
      {product && (
        <>
          <BackLink to={backLinkHref}>Back to products</BackLink>
          <div>
            <ImagesDetailWrapper>
              <CombinedImage
                src={`${product.image}?w=200&h=200`}
                alt={product.name}
              />
            </ImagesDetailWrapper>
            <ProductName>Product - {product.name}</ProductName>
            <ProductSectionTitle>
              Price: {product.price} UAH
            </ProductSectionTitle>
            <ProductSectionTitle> Description:</ProductSectionTitle>
            <ProductDetailsText> {product.description}</ProductDetailsText>

            <ProductSectionTitle> Characteristics:</ProductSectionTitle>
            <CharacteristicsList>
              {product.characteristics.map(characteristic => (
                <li key={characteristic._id}>
                  <ProductDetailsText>
                    {characteristic.description}
                  </ProductDetailsText>
                </li>
              ))}
            </CharacteristicsList>
          </div>
        </>
      )}
    </main>
  );
};
