import {
  CombinedButton,
  CombinedSectionTitle,
} from 'components/Combined/Combined';
import { useState } from 'react';
import { ReactComponent as CrossPic } from '../../images/cros.svg';
import {
  AddCharacteristicButton,
  ButtonContainer,
  CharacteristicDescriptionContainer,
  CharacteristicsLabel,
  ErrorText,
  FieldStyled,
  FormStyled,
  ImageContainer,
  ImageField,
  ImageSectionContainer,
  InputDiv,
  TextAreaInput,
} from 'components/Combined/Form.styled';
import { Formik, Field } from 'formik';
import { ProductSchema } from 'validations/ProductFormValidation';

export const ProductForm = ({ onCancel, addNewProduct, initialData }) => {
  const [characteristics, setCharacteristics] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const addCharacteristic = () => {
    setCharacteristics(prevCharacteristics => [
      ...prevCharacteristics,
      { description: '' },
    ]);
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleImageClick = () => {
    document.getElementById('image').click();
  };

  const handleSubmit = values => {
    const productData = {
      ...values,
      image: selectedImage,
      characteristics: characteristics.map(characteristic => ({
        description: characteristic.description,
      })),
    };

    addNewProduct(productData);
  };

  return (
    <Formik
      initialValues={initialData}
      onSubmit={handleSubmit}
      validationSchema={ProductSchema}
      encType="multipart/form-data"
    >
      <FormStyled autoComplete="off">
        <CombinedSectionTitle>Add Product</CombinedSectionTitle>
        <InputDiv>
          <ErrorText name="name" component="div" />
          <FieldStyled
            placeholder="Please enter a name"
            type="text"
            name="name"
          />
        </InputDiv>

        <InputDiv>
          <ErrorText name="price" component="div" />
          <FieldStyled
            placeholder="Please enter a price in UAH"
            type="number"
            name="price"
          />
        </InputDiv>

        <InputDiv>
          <ErrorText name="payment" component="div" />
          <FieldStyled
            placeholder="Please enter an URL address for payment"
            type="text"
            name="payment"
          />
        </InputDiv>

        <InputDiv>
          <ErrorText name="description" component="div" />
          <Field
            as={TextAreaInput}
            placeholder="Please enter a description"
            name="description"
            id="description"
          />
        </InputDiv>

        <InputDiv>
          <ImageSectionContainer>
            <CharacteristicsLabel htmlFor="image">Image:</CharacteristicsLabel>
            <ImageContainer onClick={handleImageClick}>
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  width="51px"
                />
              ) : initialData.image ? (
                <img src={initialData.image} alt="Default" width="51px" />
              ) : (
                <CrossPic />
              )}
            </ImageContainer>
            <ImageField
              type="file"
              name="image"
              id="image"
              accept=".png, .jpg, .jpeg"
              value={initialData.image || ''}
              onChange={handleImageChange}
            />
          </ImageSectionContainer>
          <ErrorText name="image" component="div" />
        </InputDiv>

        <InputDiv>
          <CharacteristicsLabel>Characteristics:</CharacteristicsLabel>
          {characteristics.map((characteristic, index) => (
            <CharacteristicDescriptionContainer key={index}>
              <Field
                as={FieldStyled}
                placeholder="Please enter a description"
                name={`characteristics[${index}].description`}
                value={characteristic.description}
                onChange={event => {
                  const updatedCharacteristics = [...characteristics];
                  updatedCharacteristics[index].description =
                    event.target.value;
                  setCharacteristics(updatedCharacteristics);
                }}
              />
            </CharacteristicDescriptionContainer>
          ))}
          <AddCharacteristicButton type="button" onClick={addCharacteristic}>
            Add Characteristic
          </AddCharacteristicButton>
        </InputDiv>

        <ButtonContainer>
          <CombinedButton type="submit">Save</CombinedButton>
          <CombinedButton type="button" onClick={onCancel}>
            Cancel
          </CombinedButton>
        </ButtonContainer>
      </FormStyled>
    </Formik>
  );
};
