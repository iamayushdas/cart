import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 10% 10% 0 10%;
  
  background:#393e46;
	background: -webkit-linear-gradient(to right, #000000, #393e46);
	background: linear-gradient(to right, #000000, #393e46);

  img.mainImage {
    margin-left: 20%;

    width: 50%;
    height: 95%;
    min-width: 300px;

    transform: rotate(25deg);
    transition: transform .2s ease-in-out
  }

  button.mainButton {
    margin: 5% 3% 5% 0;

    color: white;

    > i {
      margin-right: 6px
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    padding-top: 14%;

    img.mainImage {
      margin: auto;
      
      min-width: 100%;

      transform: rotate(0)
    }
  }
`;