import React from 'react';

import { SearchNormal1 } from 'iconsax-react';
import Image from 'next/image';
import { useTheme } from 'styled-components';

import { Container, Input } from '@develop-fapp/ui-kit-fapp';

import logo from '../../../../assets/logo.svg';
import { HeaderComp } from './styles';

export const HomePageHeader = (): JSX.Element => {
  const { colors } = useTheme();
  return (
    <HeaderComp data-testid="header-id">
      <Container
        container="lg"
        flexDirection="column"
        justifyContent="center"
        backgroundColor={colors.primary}
        style={{ height: '100px' }}
      >
        <Container
          backgroundColor="#2d4054"
          alignItems="center"
          justifyContent="space-between"
        >
          <Container>
            <Image src={logo} />
          </Container>
          <Input
            placeholder="Procure por produtos ou lojas"
            name="search"
            startIcon={<SearchNormal1 size={16} color="#06BAB2" />}
          />
        </Container>
      </Container>
    </HeaderComp>
  );
};
