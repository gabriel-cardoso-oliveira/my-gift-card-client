import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, GiftCardNumber } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <GiftCardNumber>
            <div>
              <strong>Bem vindo!</strong>
            </div>
          </GiftCardNumber>
        </aside>
      </Content>
    </Container>
  );
}
