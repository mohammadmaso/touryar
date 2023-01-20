import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { FiEdit2, FiEdit3, FiPlus } from 'react-icons/fi';

interface Props {
  onClick: () => void;
  mode: 'add' | 'edit';
}
export default function AddEditButton(props: Props) {
  return (
    <IconButton
      onClick={props.onClick}
      aria-label="اضافه‌کردن"
      colorScheme="whatsapp"
      icon={props.mode === 'edit' ? <FiEdit3 /> : <FiPlus />}
      rounded="full"
      size="xs"
    >
      {props.mode === 'edit' ? 'ویرایش' : 'افزودن'}
    </IconButton>
  );
}
