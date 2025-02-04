'use client';

import React from 'react';
import { WhiteBlock } from '../white-block';
import { Input } from '../../ui';
import { FormTextarea } from '../form';
import { AdressInput } from '../adress-input';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorText } from '../error-text';

interface Props {
  className?: string;
}

export const CheckoutAdressForm: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext();
  return (
    <WhiteBlock
      className={className}
      title="Адрес доставки"
    >
      <div className="flex flex-col gap-5">
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AdressInput onChange={field.onChange} />
              {fieldState.error?.message && (
                <ErrorText text={fieldState.error.message} />
              )}
            </>
          )}
        />
        <FormTextarea
          name="comment"
          className="text-base"
          placeholder="Коментарий к заказу"
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};
