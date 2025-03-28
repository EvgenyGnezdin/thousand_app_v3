import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  children: string;
}
export const Notification: FC<Props> = ({ children }) => {
  const StyledTag = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    color: #2563eb;
    font-weight: 700;
  `;
  return <StyledTag>{children}</StyledTag>;
};
