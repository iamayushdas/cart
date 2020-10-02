import styled from 'styled-components';

export const SignLogContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 10%  10% 0 10%;
  background:#393e46;
	background: -webkit-linear-gradient(to right, #000000,#393e46 );
  background: linear-gradient(to right, #000000, #393e46);

  .formBox {
    padding: 20px;
    min-height: 400px;

    color: #fff;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    transition: all 0.6s cubic-bezier(1, -0.375, 0.285, 0.995);

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .formBox > a {
    align-self: flex-start
  }

  .formBox > h2 {
    margin-bottom: 2rem
  }
`;

export const Form = styled.form`
  text-align: center;

  input {
    background: none;
    border: none;

    margin-bottom: 1rem;
    padding: 10px 0;
    width: 80%;

    border-bottom: 1px solid #eee;
    color: white;
    font-size: 15px;
    
    z-index: 1;
  }

  button {
    padding: 5px 30px;
    margin-right: 20px;

    font-size: 12px;
    text-transform: uppercase;

    background: #f95959;
    color: #fff;

    border-radius: 30px;
    border: none;
  }
`;
