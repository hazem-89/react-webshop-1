import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;
  transition: all 150ms;
  border: 1px solid lightblue;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
  

    :hover {
    box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
    border-radius: 5px solid red;
    
  }
  .pro {
    padding: 1em;
  }
  butto;n {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    border-radius: 100px;
    background-color: #936EFE;
    color: #fafafa;
    border: none;
    font-size: 28px;
  }

  button:hover { 
    background: rgba(50, 84, 124, 0.589);
  }

  img { 
    max-height: 200px;
    max-width: 200px;
    object-fit: cover;
    border-radius: 2rem 2rem 0 0;
  }

  .product-container { 
    padding: 1rem;
    height: 100%;
  }
`;
