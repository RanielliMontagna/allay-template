import React from 'react'
import { useTranslation } from 'react-i18next'

import { Avatar, Badge } from '@/components'

import { HomeContainer } from './home.styles'

export function Home() {
  const { t } = useTranslation()

  return (
    <HomeContainer>
      <Badge size="sm" color="success">
        {t('home.title')}
      </Badge>
      <Avatar fallbackSource="Matheus Cunha" size="lg" shape="circle" />
    </HomeContainer>
  )
}
