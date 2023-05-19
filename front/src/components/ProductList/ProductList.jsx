import { Link, useLocation } from 'react-router-dom';
import {
  ProductsListWrapper,
  ProductItem,
  ProductName,
  ImagesWrapper,
  TextWrapper,
} from './Product.styled';
import { CombinedImage } from 'components/Combined/Combined';

export const ProductList = ({ products }) => {
  
  const location = useLocation();
  return (
    <ProductsListWrapper>
      {products.map(product => (
        <ProductItem key={product._id}>
          <Link to={`${product._id}`} state={{ from: location }}>
            <ImagesWrapper>
              <CombinedImage src={product.image} alt={product.name} />
            </ImagesWrapper>
            <TextWrapper>
              <ProductName>{product.name}</ProductName>
            </TextWrapper>
          </Link>
        </ProductItem>
      ))}
    </ProductsListWrapper>
  );
};
