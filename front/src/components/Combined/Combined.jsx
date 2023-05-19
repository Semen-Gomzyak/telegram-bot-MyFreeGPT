import {
  Text,
  SectionTitle,
  Image,
  Item,
  List,
  ImagesWrapper,
  TextWrapper,
  Select,
  Option,
  Input,
  SelectedWrapper,
  Button,
} from './Combined.styled';

export const CombinedList = ({ children, ...allProps }) => {
    return <List {...allProps}> {children} </List>
}

export const CombinedItem = ({ children, onClick, ...allProps }) => {
    return <Item onClick={onClick} {...allProps}>{ children }</Item>
}

export const CombinedSelectedWrapper = ({ children, ...allProps }) => {
    return <SelectedWrapper {...allProps}> {children} </SelectedWrapper>;
}

export const CombinedImagesWrapper = ({ children, ...allProps }) => {
  return <ImagesWrapper {...allProps}> {children} </ImagesWrapper>;
};

export const CombinedTextWrapper = ({ children, ...allProps }) => {
  return <TextWrapper {...allProps}> {children} </TextWrapper>;
};

export const CombinedSectionTitle = ({ children, ...allProps }) => {
  return <SectionTitle {...allProps}>{children}</SectionTitle>;
};

export const CombinedText = ({ children, ...allProps }) => {
  return <Text {...allProps}>{children}</Text>;
};

export const CombinedImage = ({ children, ...allProps }) => {
    return <Image {...allProps} />
};

export const CombinedSelect = ({ children, ...allProps }) => {
    return <Select {...allProps}> {children} </Select>
}

export const CombinedOption = ({ children, ...allProps }) => {
    return <Option {...allProps}> {children} </Option>
}

export const CombinedInput = ({ ...allProps }) => {
    return <Input {...allProps} />
}

export const CombinedButton = ({ children, ...allProps }) => {
  return <Button {...allProps}> {children} </Button>;
};
