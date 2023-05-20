import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
  overflow: auto;

  @media (min-width: 768px) {
    top: -70px;
  }

  @media (min-width: 1280px) {
    top: 0;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  width: fit-content;
  height: fit-content;
  margin: 0;
  padding: 20px;
  border-radius: 20px;
  background-color: #19191b;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 1280px) {
    margin: 0;
  }

  animation-name: open;
  animation-duration: 0.5s;
  animation-timing-function: east-out;
  @keyframes open {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CloseBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #315330;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  &:hover,
  &:focus {
    background: #ccaf36;
    cursor: pointer;
  }
`;

export const MdCloseBtn = styled(MdClose)`
  color: #ffffff;
  
  &:hover,
  &:focus {
    color: #000000;
  }
`;