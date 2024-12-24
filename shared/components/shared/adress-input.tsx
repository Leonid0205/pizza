'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
  className?: string;
}

export const AdressInput: React.FC<Props> = ({ onChange, className }) => {
  const id = React.useId();

  return (
    <AddressSuggestions
      uid={id}
      token="3a9068099105e5d8f9f78f9c647809ee9d40a94d"
      onChange={(data) => onChange?.(data?.value)}
      inputProps={{
        placeholder: 'Введите адрес доставки',
        className:
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      }}
    />
  );
};
