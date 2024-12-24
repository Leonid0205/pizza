'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { CheckoutSidebar, Container, Title } from '@/shared/components/shared';
import { useCart } from '@/shared/hooks';
import {
  CheckoutAdressForm,
  CheckoutCart,
  CheckoutPersonalForm,
  CheckoutSidebar,
  Container,
  Title,
} from '@/shared/components';
import {
  checkoutFormSchema,
  CheckoutFormValues,
} from '@/shared/constants/checkout-form-schema';
import { cn } from '@/shared/lib/utils';
import { createOrder } from '@/app/actions';
import toast from 'react-hot-toast';
import React from 'react';
import { set } from 'zod';
import { prisma } from '@/prisma/prisma-client';

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
    useCart();
  const [submitting, setSubmitting] = React.useState(false);
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });
  const onSubmit = async (data: CheckoutFormValues) => {
    // console.log(data);
    // createOrder(data);
    try {
      setSubmitting(true);
      const url = await createOrder(data);
      toast.success('Заказ создан. 📝 Переход на оплату...', { icon: '✅' });
      if (url) {
        location.href = url;
      }
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      toast.error('Не удалось создать заказ', { icon: '❌' });
    }
  };
  const onClickCountButton = (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <>
      <Container className="mt-10">
        <Title
          text="Оформление заказа"
          size="xl"
          className=" font-extrabold mb-8 text-[36px]"
        />
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-10">
              <div className="flex flex-col gap-10 flex-1 mb-20">
                <CheckoutCart
                  items={items}
                  loading={loading}
                  onClickCountButton={onClickCountButton}
                  removeCartItem={removeCartItem}
                />
                <CheckoutPersonalForm
                  className={loading ? 'opacity-40 pointer-events-none' : ''}
                />
                <CheckoutAdressForm
                  className={loading ? 'opacity-40 pointer-events-none' : ''}
                />
              </div>
              <div className="w-[450px]">
                <CheckoutSidebar
                  totalAmount={totalAmount}
                  loading={loading || submitting}
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </Container>
    </>
  );
}
