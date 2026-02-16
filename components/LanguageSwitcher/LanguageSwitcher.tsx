'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <StyledButton onClick={toggleLanguage} aria-label="Cambiar idioma">
            <span className={i18n.language === 'en' ? 'active' : ''}>EN</span>
            <span className="divider">/</span>
            <span className={i18n.language === 'es' ? 'active' : ''}>ES</span>
        </StyledButton>
    );
};

const StyledButton = styled.button`
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 4px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-text-primary);
  }

  span.active {
    color: var(--color-text-primary);
    font-weight: 700;
  }

  span.divider {
    opacity: 0.5;
  }
`;

export default LanguageSwitcher;
