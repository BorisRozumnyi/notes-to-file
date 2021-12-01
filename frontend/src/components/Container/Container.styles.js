import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 5px;

  ${({ theme }) => theme.media.sm} {
    max-width: 420px;
  }

  ${({ theme }) => theme.media.md} {
    max-width: 700px;
  }

  ${({ theme }) => theme.media.lg} {
    max-width: 900px;
  }

  ${({ theme }) => theme.media.xl} {
    max-width: 1200px;
  }
`;
