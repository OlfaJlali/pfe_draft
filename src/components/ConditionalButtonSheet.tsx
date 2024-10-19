import React from 'react';
import useShouldShowButtonSheet from '../hooks/useShouldShowButtonSheet';
import ButtonSheet from '../navigators/ButtonSheet';

const ConditionalButtonSheet: React.FC = () => {
  const showButtonSheet = useShouldShowButtonSheet();
  return showButtonSheet ? <ButtonSheet /> : null;
};

export default ConditionalButtonSheet;
