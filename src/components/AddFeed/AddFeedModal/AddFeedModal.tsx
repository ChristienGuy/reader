import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import AddFeedInput from "../AddFeedInput";
import { useSpring, animated, OpaqueInterpolation } from "react-spring/hooks";

const Button = styled("button")`
  position: fixed;
  bottom: 16px;
  width: 100%;
  max-width: 120px;
  left: 50%;

  transform: translateX(-50%);

  box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.08), 1px 1px 6px rgba(0, 0, 0, 0.15);
  border: 0;
  border-radius: 1rem;
  background: white;
  padding: 8px;
  font-size: 1rem;
  text-transform: uppercase;
`;

const ModalWrapperStyled = styled(animated.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 200px;
  background: white;
  z-index: 10;

  box-shadow: 0 0 6px rgba(0, 0, 0, 0.11);

  padding: 16px;
`;

const ModalWrapper = ({
  style,
  children
}: {
  style: { transform: OpaqueInterpolation<string> };
  children: JSX.Element | JSX.Element[],
}) => {
  return <ModalWrapperStyled style={style}>{children}</ModalWrapperStyled>;
};

const AddFeedModal = () => {
  const [props, set] = useSpring(() => ({ y: 100 }));
  const [modalState, setModalState] = useState("closed");

  const showModal = modalState === "open";

  const domNode = document.querySelector("#modal-root");

  const openModal = () => {
    setModalState("open");
    set({ y: 0 });
  };

  const closeModal = () => {
    setModalState("closed");
    set({ y: 100 });
  };

  return domNode
    ? ReactDOM.createPortal(
        <Fragment>
          {showModal ? (
            <ModalWrapper
              style={{
                transform: props.y.interpolate(y => `translateY(${y}%)`)
              }}
            >
              <AddFeedInput />
            </ModalWrapper>
          ) : null}
          {showModal ? (
            <Button onClick={closeModal}>close</Button>
          ) : (
            <Button onClick={openModal}>open</Button>
          )}
        </Fragment>,
        domNode
      )
    : null;
};

export default AddFeedModal;
