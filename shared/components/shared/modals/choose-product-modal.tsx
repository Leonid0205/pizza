'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/shared/lib/utils';
import { Dialog, DialogContent } from '@/shared/components/ui/dialog';
import { ProductWithRelations } from '@/@types/prisma';
import { DialogDescription, DialogTitle } from '@/shared/components/ui/dialog';
import { ProductForm } from '../product-form';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
interface Props {
  product: ProductWithRelations;
  className?: string;
}
export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  return (
    <Dialog
      open={Boolean(product)}
      onOpenChange={() => router.back()}
    >
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[550px] bg-white overflow-hidden',
          className
        )}
      >
        <VisuallyHidden.Root>
          <DialogTitle />
          <DialogDescription />
        </VisuallyHidden.Root>
        <ProductForm
          product={product}
          onSubmit={() => router.back()}
        />
      </DialogContent>
    </Dialog>
  );
};
