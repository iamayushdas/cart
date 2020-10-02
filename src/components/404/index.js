import React from 'react';
import { Link } from 'react-router-dom';
// Components
import { Container404 } from "./main";
import { ReactComponent as Main404 } from "../../assets/svg/404.svg";

export default function PageNotFound() {
  return (
    <Container404>
      <Link to="/">
        <i class="fas fa-chevron-circle-left fa-2x"></i>
      </Link>

      <Main404 />
    </Container404>
  )
}
