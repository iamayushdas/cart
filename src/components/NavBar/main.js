import styled from 'styled-components';
import { Navbar } from 'reactstrap';

export const TopBar = styled(Navbar)`
  width: 100%;

  padding: 2% 10%;

  position: absolute;
  top: 0;

  background-color: transparent !important;

  > i {
    padding-right: 2%;
    color: white;
  }

  .mainLogo {
    color: white
  }

  > a {
    font-family: "Ubuntu";
    font-size: 2.5rem;
    font-weight: bold;
    margin-right: 5%;
  }

  .nav-item {
    padding: 0 12px;

    color: #393e46
  }

  .nav-link {
    font-size: 18px
  }

  @media (max-width: 554px) {
    .mainLogo {
      display: none
    }
  }
`;