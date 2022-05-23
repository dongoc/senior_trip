import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  margin-top: var(--header-height); // header
  background: var(--color-white);
`

export const BaseContainer = styled.div`
  max-width: var(--screen-width);
  min-width: var(--mobile-width);
  min-height: calc(100vh - var(--header-height));
  margin: 0 auto;
  padding: 0 var(--spacing-m);
`

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const FlexJustifyCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const FlexAlignCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FlexSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
