import * as React from 'react';

interface Props {
  orederId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({
  orederId,
  totalAmount,
  paymentUrl,
}) => (
  <div>
    <h1>Заказ, №{orederId}!</h1>
    <p>
      Оплатите заказ на сумму <b>{totalAmount} ₽</b>. Перейдите
      <a href={paymentUrl}>по этой ссылке </a> для оплаты заказа.
    </p>
  </div>
);
