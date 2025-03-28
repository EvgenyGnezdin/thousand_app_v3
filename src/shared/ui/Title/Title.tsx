import styled, { css } from 'styled-components';
import React, { FC } from 'react';

// Интерфейс для пропсов Title
interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  children: React.ReactNode;
  className?: string;
  size?: number;
  bold?: boolean;
  color?: string;
}

// Базовый стиль заголовка
const baseStyles = css`
  font-weight: normal;
  color: #000;
`;

// Универсальный компонент Title
export const Title: FC<Props> = ({
  as = 'h1',
  children,
  className,
  size = 24,
}) => {
  const StyledTag = styled(as)`
    ${baseStyles}
    font-size: ${size}px;
  `;

  return <StyledTag className={className}>{children}</StyledTag>;
};

