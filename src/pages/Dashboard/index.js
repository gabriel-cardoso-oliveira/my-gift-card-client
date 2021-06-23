import React from 'react';
import { useSelector } from 'react-redux';
import PaymentCard from 'react-payment-card-component';
import { Container, Content } from './styles';

export default function Dashboard() {
  const giftCard = useSelector(state => state.auth.giftCard);

  return (
    <div id="page-dashboard">
      <Container>
        <Content>
          <PaymentCard
            bank="default"
            model="normal"
            type="black"
            brand="mastercard"
            number={giftCard.giftcard_number}
            holderName="GIFT CARD"
            expiration={giftCard.giftcard_validated}
            flipped={false}
          />
        </Content>
      </Container>
    </div>
  );
}
