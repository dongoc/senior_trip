import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: var(--header-height);
  background: var(--color-background);
`

export const BaseContainer = styled.div`
  max-width: var(--screen-width);
  min-width: var(--mobile-width);
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
