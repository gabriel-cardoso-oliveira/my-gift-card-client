import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PaymentCard from 'react-payment-card-component';
import axios from 'axios';
import { toast } from 'react-toastify';
import MaterialTable from 'material-table';
import { localizationTable } from '~/utils/localizationTable';
import { columns } from '~/utils/columnsTable';
import { Container, Content, ContainerTable } from './styles';

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const giftCard = useSelector(state => state.auth.giftCard);

  const giftCardValidated = giftCard.giftcard_validated
    .split('-')
    .reverse()
    .join('/');

  const options = {
    headers: {
      'x-api-key': process.env.REACT_APP_KEY_API_EXTERNAL,
    },
  };

  const getTransactions = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_URL_API_EXTERNAL,
        options
      );

      setTransactions(data);
    } catch (error) {
      toast.error('Falha ao buscar transações. Tente novamente!');
    }
  };

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      <ContainerTable>
        <MaterialTable
          title="Transações"
          columns={columns}
          data={transactions}
          localization={localizationTable}
        />
      </ContainerTable>
    </div>
  );
}
