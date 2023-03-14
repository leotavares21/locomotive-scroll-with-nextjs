import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2px;
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 1.5rem;
  font-weight: 700;

  &:hover {
    filter: brightness(0.9);
    transition: 0.3s ease;
  }

  &.btn-primary {
    background: var(--primary);
    color: #fff;
  }
`;
