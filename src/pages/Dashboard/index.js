import React from 'react';
import { useSelector } from 'react-redux';
import PaymentCard from 'react-payment-card-component';
import { Container, Content } from './styles';

export default function Dashboard() {
  const giftCard = useSelector(state => state.auth.giftCard);

  const giftCardValidated = giftCard.giftcard_validated
    .split('-')
    .reverse()
    .join('/');

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
            expiration={giftCardValidated}
            flipped={false}
          />
        </Content>
        <Content>
          <h1>Informações</h1>

          {/* <h2>Número do cartão: {giftCard.giftcard_number}</h2> */}
          <strong>
            Número do cartão:
            <span> {giftCard.giftcard_number}</span>
          </strong>

          <strong>
            Mensagem do Presente:
            <span> {giftCard.giftcard_message}</span>
          </strong>

          <strong>
            Saldo:
            <span> R$ 0,00</span>
          </strong>

          <strong>
            Validade
            <span> Até {giftCardValidated}</span>
          </strong>
        </Content>
      </Container>
    </div>
  );
}
