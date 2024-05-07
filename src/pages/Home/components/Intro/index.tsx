import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from "./styles"
import introImg from "../../../../assets/intro.png"
import { ShoppingCart, Package, Timer } from "phosphor-react"
import { useTheme } from "styled-components"
import { RegularText } from "../../../../components/Typography"
import { InfoWithIcon } from "../../../../components/InfoWithIcon"

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre a bebida perfeita para qualquer hora do dia
            </IntroTitle>
            <RegularText as="h3" size="l" color="subtitle">
              Com o LOGO você recebe sua bebida onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              iconBg={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="Embalagem mantém a bebida intacta"
            />
            <InfoWithIcon
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />
          </BenefitsContainer>
        </div>

        <img src={introImg} />
      </IntroContent>
    </IntroContainer>
  )
}
