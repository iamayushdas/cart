import styled from 'styled-components';

export const TestContainer = styled.div`
  padding: 7% 10%;
  
  text-align: center;

  background:#393e46 ;
  background-color: #393e46;
	background: linear-gradient(to right, #000000, #393e46);

  img.carouselImg {
    margin: 1.25rem;

    width: auto;
    height: 70vh;

    border-radius: 5px
  }

  h2 {
    font-size: 1.5rem
  }

  @media (max-width: 768px) {
    img.carouselImg {
      width: 50%;
      height: auto
    }
  }
`;