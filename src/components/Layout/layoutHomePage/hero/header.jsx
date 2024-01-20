import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './Header.module.css';
import { Text } from "../../../UI/textAndTypography/Text";
import { StyledButton } from '../../../UI/buttons/StyledButtons';
import { MobileSpecificButton } from '../../../UI/buttons/MobileSpecificButton';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <img
                    className={style.heroimage}
                    src="/Images/heroimage.png"
                    alt={t('header.heroImageAlt')}//No description yet I think
                />
                <section className={style.textWrapper}>
                    <Text
                        header={t('header.title')}
                        type="H1"
                        style={{ color: '#FFFFFF' }}
                        $width="200px"
                        $height="50px"
                        className={style.Texth1}
                    />
                    <Text
                        header={t('header.subtitle')}
                        type="H2"
                        style={{ color: '#FFF', fontWeight: 300 }}
                        className={style.Texth2}
                    />
                    <section className={style.btnContainer}>
                        <MobileSpecificButton
                            className={style.styledBtn1}
                        >
                            {t('header.findYogaClass')}
                        </MobileSpecificButton>
                        <MobileSpecificButton
                            // to="/a-path" 
                            $backgroundColor="transparent"
                            $border="2px solid #FFD075;"
                            $color="#FFD075"
                            $hoverBackgroundColor="#FFFFFF"
                            $hoverColor="FFD075"
                        >
                            {t('header.becomeMember')}
                        </MobileSpecificButton>
                    </section>
                </section>
            </section>
        </div >
    );
};
