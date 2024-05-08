import * as S from './styles'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import { maskCPF, maskCardNumber, maskCVV, maskExpire } from '../../../../utils/mask/inputsMask'

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string
        }
    }
}

export function Payment() {
    const { register, formState } = useFormContext()
    const { errors } = formState as unknown as ErrorsType

    return (
        <>
            <S.Row>
                <S.InputGroup>
                    <Input
                        placeholder="Nome do titular do cartão"
                        type="text"
                        className="cardOwner"
                        {...register("cardOwner")}
                        error={errors.cardOwner?.message}
                    />
                </S.InputGroup>
                <S.InputGroup>
                    <Input
                        placeholder="CPF do titular do cartão"
                        type="tel"
                        className="cpfCardOwner"
                        {...register("cpfCardOwner")}
                        error={errors.cpfCardOwner?.message}
                        onChange={(event) => {
                            const {value} = event.target
                            event.target.value = maskCPF(value)
                        }}
                    />
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <Input
                        placeholder="Nome no cartão"
                        type="text"
                        className="cardDisplayName"
                        {...register("cardDisplayName")}
                        error={errors.cardDisplayName?.message}
                    />
                </S.InputGroup>
                <S.InputGroup>
                    <Input
                        placeholder="Número do cartão"
                        type="tel"
                        className="cardNumber"
                        {...register("cardNumber")}
                        error={errors.cardNumber?.message}
                        onChange={(event) => {
                            const {value} = event.target
                            event.target.value = maskCardNumber(value)
                        }}
                    />
                </S.InputGroup>
                </S.Row>
                <S.Row>
                <S.InputGroup>
                    <Input
                        placeholder="Mês de expiração"
                        type="text"
                        className="expiresMonth"
                        {...register("expiresMonth")}
                        error={errors.expiresMonth?.message}
                        onChange={(event) => {
                            const {value} = event.target
                            event.target.value = maskExpire(value)
                        }}
                    />
                </S.InputGroup>
                <S.InputGroup>
                    <Input
                        placeholder="Ano de expiração"
                        type="text"
                        className="expiresYear"
                        {...register("expiresYear")}
                        error={errors.expiresYear?.message}
                        onChange={(event) => {
                            const {value} = event.target
                            event.target.value = maskExpire(value)
                        }}
                    />
                </S.InputGroup>
                <S.InputGroup>
                    <Input
                        placeholder="CVV"
                        type="text"
                        className="cardCode"
                        {...register("cardCode")}
                        error={errors.cardCode?.message}
                        onChange={(event) => {
                            const {value} = event.target
                            event.target.value = maskCVV(value)
                        }}
                    />
                </S.InputGroup>
            </S.Row>
        </>
    )
}
