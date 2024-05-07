import * as S from './styles'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import { useFormik } from 'formik'

export function Payment() {
    const form = useFormik({
        initialValues: {
            cardOwner: '',
            cpfCardOwner: '',
            cardDisplayName: '',
            cardNumber: '',
            expiresMonth: '',
            expiresYear: '',
            cardCode: '',
        },
        validationSchema: Yup.object({
            cardOwner: Yup.string()
                .required('Required'),
            cpfCardOwner: Yup.string()
                .min(14, 'O campo precisa ter 14 caracteres')
                .max(15, 'O campo precisa ter 15 caracteres')
                .required('O campo é obrigatório'),
            cardDisplayName: Yup.string()
                .required('Required'),
            cardNumber: Yup.string()
                .max(16, 'O campo precisa ter 16 números')
                .required('Required'),
            expiresMonth: Yup.string()
                .max(2, 'O campo precisa ter 2 números')
                .required('Required'),
            expiresYear: Yup.string()
                .max(2, 'O campo precisa ter 2 números')
                .required('Required'),
            cardCode: Yup.string()
                .max(3, 'O campo precisa ter 3 números')
                .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid
    
        return hasError
    }

    return (
        <>
            <S.Row>
                <S.InputGroup>
                    <input
                        placeholder="Nome do titular do cartão"
                        type="text"
                        id="cardOwner"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                            checkInputHasError('cardOwner') ? 'error' : ''
                        }
                    />
                </S.InputGroup>
                <S.InputGroup>
                    <InputMask
                        placeholder="CPF do titular do cartão"
                        type="text"
                        id="cpfCardOwner"
                        name="cpfCardOwner"
                        value={form.values.cpfCardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                            checkInputHasError('cpfCardOwner') ? 'error' : ''
                        }
                        mask="999.999.999-99"
                    />
                </S.InputGroup>
            </S.Row>
            <S.Row>
                <S.InputGroup>
                    <input
                        placeholder="Nome no cartão"
                        type="text"
                        id="cardDisplayName"
                        name="cardDisplayName"
                        value={form.values.cardDisplayName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                            checkInputHasError('cardDisplayName') ? 'error' : ''
                        }
                    />
                </S.InputGroup>
                <S.InputGroup>
                    
                    <InputMask
                        placeholder="Número do cartão"
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                        }
                        mask="9999 9999 9999 9999"
                    />
                </S.InputGroup>
                </S.Row>
                <S.Row>
                <S.InputGroup>
                    <InputMask
                        placeholder="Mês de expiração"
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                        mask="99"
                    />
                </S.InputGroup>
                <S.InputGroup>
                    <InputMask
                        placeholder="Ano de expiração"
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                        }
                        mask="99"
                    />
                </S.InputGroup>
                <S.InputGroup>
                    <InputMask
                        placeholder="CVV"
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                            checkInputHasError('cardCode') ? 'error' : ''
                        }
                        mask="999"
                    />
                </S.InputGroup>
            </S.Row>
        </>
    )
}
