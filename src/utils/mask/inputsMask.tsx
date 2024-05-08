export function maskCardNumber (value: string) {
    return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
}

export function maskExpire (value: string) {
    const noMask = value.replace(/\D/g, '')
    const { length } = noMask

    if (length <= 2) {
        return noMask.replace(/^(\d{2})$/, "$1")
    }
    return value
}

export function maskCVV (value: string) {
    const noMask = value.replace(/\D/g, '')
    const { length } = noMask

    if (length <= 2) {
        return noMask.replace(/^(\d{3})$/, "$1")
    }
    return value
}

export function maskPhone (value: string) {
    const noMask = value.replace(/\D/g, '')
    const { length } = noMask

    if (length <= 11) {
        return noMask.replace(/(\d{2})(\d)/, '($1) $2')
        .replace(length === 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, '$1-$2')
    }
    return value
}

export function maskDate (value: string) {
    const noMask = value.replace(/\D/g, '')
    const { length } = noMask

    if (length <= 8) {
        return noMask.replace(/^(\d{2})(\d{2})(\d{4})$/, "$1/$2/$3")
    }
    return value
}

export function maskCPF (value: string) {
    const noMask = value.replace(/\D/g, '')
    const { length } = noMask

    if (length <= 11) {
        return noMask.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4")
    }
    return value
}

export function maskCNPJ (value: string) {
    return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5")
}

export function maskCEP (value: string) {
    const noMask = value.replace(/\D/g, '')
    const { length } = noMask

    if (length <= 8) {
        return noMask.replace(/(\d{5})(\d)/, '$1-$2')
    }
    return value
}
