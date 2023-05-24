import { useSearchParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { addProduct, getProducts } from 'api';
import { ProductList } from '../components/ProductList/ProductList';
import { Modal } from 'components/Modal/Modal';
import { AddProductButton } from 'components/ProductList/Product.styled';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { UserContext } from 'components/UserContext';
import { ProductForm } from 'components/ProductList/ProductForm';

export const Products = () => {
  const login = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const [initialData, setInitialData] = useState({
    name: '',
    price: 0,
    image: '',
    description: '',
    characteristics: {
      description: '',
    },
    payment: '',
  });

  const productName = searchParams.get('name') ?? '';

  const adminValue = process.env.REACT_APP_ADMIN;
  const adminRole = login === adminValue;

  const visibleProducts = products?.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
    document.body.classList.toggle('is-modal-open');
    setInitialData({
      name: '',
      price: 0,
      image: null,
      description: '',
      characteristics: {
        description: '',
      },
      payment: '',
    });
  };

  const addNewProduct = async data => {
    toggleModal();
    const response = await addProduct(data);
    setProducts(prevProducts => [response, ...prevProducts]);
  };

  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />
      {adminRole && (
        <AddProductButton onClick={toggleModal}>Add Product</AddProductButton>
      )}
      <h2>{login}</h2>
      <ProductList products={visibleProducts} />

      {showModal && (
        <Modal closeModal={toggleModal}>
          <ProductForm
            onCancel={toggleModal}
            addNewProduct={addNewProduct}
            initialData={initialData}
          />
        </Modal>
      )}
    </main>
  );
};
