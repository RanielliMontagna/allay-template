import styled from '@emotion/native'

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  padding: ${({ theme }) => theme.spacing[4]};
`
