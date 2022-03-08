import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledCart = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: .5rem;
  top: 0.1rem;
`;