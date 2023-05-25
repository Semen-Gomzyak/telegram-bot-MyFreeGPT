import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink';
import { deleteProduct, getProductById } from 'api';
import { useEffect, useState } from 'react';
import {
  ProductName,
  ProductSectionTitle,
  ImagesDetailWrapper,
  ProductDetailsText,
  CharacteristicsList,
  BuyLink,
} from 'components/ProductList/Product.styled';
import { CombinedButton, CombinedImage } from 'components/Combined/Combined';
import { ButtonContainer } from 'components/Combined/Form.styled';

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

  const deleteProductByID = async () => {
    return await deleteProduct(id);
  };


  return (
    <main>
      {product && (
        <>
          <ButtonContainer>
            <BackLink to={backLinkHref}>Back to products</BackLink>
            <CombinedButton onClick={deleteProductByID}>Delete</CombinedButton>
          </ButtonContainer>
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
          <BuyLink href={product.payment}>Buy Now</BuyLink>
        </>
      )}
    </main>
  );
};
