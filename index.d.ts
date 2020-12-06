import { AxiosResponse } from "axios";

export default class Rave {
    constructor(publicKey: string, privateKey: string, productionFlag: boolean)
    Card: Card
    Status: Status
    Account: Account
    TokenCharge: TokenCharge
    MobileOptions: MobileOptions
    Misc: Misc
    Preauth: Preauth
    security: security
}

interface BaseResponse {
    status: string,
    message: string,
}

interface Card {
    charge(data: CardChargeRequest): AxiosResponse<CardChargeResponse>,
    validate(data: CardValidateRequest): AxiosResponse<CardValidateResponse>

}

interface CardChargeRequest {
    token: string,
    currency: string,
    country?: string,
    amount: string,
    email: string,
    firstname?: string,
    lastname?: string,
    IP?: string,
    narration?: string,
    txRef: string,
    string?: string,
    device_fingerprint?: string,
    payment_plan?: string,
    subaccounts?: []
}

interface CardChargeResponse extends BaseResponse {
    data: {
        txid: number,
        txref: string,
        flwref: string,
        devicefingerprint: string,
        cycle: string,
        amount: number,
        currency: string,
        chargedamount: number,
        appfee: number,
        merchantfee: number,
        merchantbearsfee: number,
        chargecode: string,
        chargemessage: string,
        authmodel: string,
        ip: string,
        narration: string,
        status: string,
        vbvcode: string,
        vbvmessage: string,
        authurl: string,
        acctcode: string | any,
        acctmessage: string | any,
        paymenttype: string,
        paymentid: string,
        fraudstatus: string,
        chargetype: string,
        createdday: number,
        createddayname: string,
        createdweek: number,
        createdmonth: number,
        createdmonthname: string,
        createdquarter: number,
        createdyear: string,
        createdyearisleap: boolean,
        createddayispublicholiday: number,
        createdhour: number,
        createdminute: number,
        createdpmam: string,
        created: string,
        customerid: number,
        custphone: string,
        custnetworkprovider: string,
        custname: string,
        custemail: string,
        custemailprovider: string,
        custcreated: string,
        accountid: number,
        acctbusinessname: string,
        acctcontactperson: string,
        acctcountry: string,
        acctbearsfeeattransactiontime: number,
        acctparent: number,
        acctvpcmerchant: string | any,
        acctalias: string,
        acctisliveapproved: number,
        orderref: string,
        paymentplan: any,
        paymentpage: any,
        raveref: string,
        amountsettledforthistransaction: number,
        card: {
            expirymonth: string,
            expiryyear: string,
            cardBIN: string,
            last4digits: string,
            brand: string,
            card_tokens: { embedtoken: string, shortcode: string, expiry: string }[]
            life_time_token: string
        }
    }
}

interface CardValidateRequest {
    transaction_reference: string,
    otp?: string,
}

interface CardValidateResponse extends BaseResponse {
    data: {
        data: {
            responsecode: string,
            responsemessage: string
        },
        tx: {
            id: number,
            txRef: string,
            orderRef: string,
            flwRef: string,
            redirectUrl: string,
            device_fingerprint: string | any,
            settlement_token: any,
            cycle: string,
            amount: number,
            charged_amount: number,
            appfee: number,
            merchantfee: number,
            merchantbearsfee: number,
            chargeResponseCode: string,
            chargeResponseMessage: string,
            authModelUsed: string,
            currency: string,
            IP: string,
            narration: string,
            status: string,
            vbvrespmessage: string,
            authurl: string,
            vbvrespcode: string,
            acctvalrespmsg: any,
            acctvalrespcode: any,
            paymentType: string,
            paymentId: string,
            fraud_status: string,
            charge_type: string,
            is_live: number,
            createdAt: string,
            updatedAt: string,
            deletedAt: any,
            customerId: number,
            AccountId: number,
            customer: {
                id: number,
                phone: any,
                fullName: string,
                customertoken: any,
                email: string,
                createdAt: string,
                updatedAt: string,
                deletedAt: any,
                AccountId: number
            },
            chargeToken: {
                user_token: string,
                embed_token: string
            }
        }
    }
}

interface Status {
    requery(data: StatusRequeryRequest): AxiosResponse<StatusRequeryResponse>
    xrequery(data: StatusXqequeryRequest)
}

interface StatusRequeryRequest {
    flwref?: string,
    txref?: string,
}

interface StatusRequeryResponse extends BaseResponse {
    data: {
        "txid": number,
        "txref": string,
        "flwref": string,
        "devicefingerprint": string,
        "cycle": string,
        "amount": number,
        "currency": string,
        "chargedamount": number,
        "appfee": number,
        "merchantfee": number,
        "merchantbearsfee": number,
        "chargecode": string,
        "chargemessage": string,
        "authmodel": string,
        "ip": string,
        "narration": string,
        "status": string,
        "vbvcode": string,
        "vbvmessage": string,
        "authurl": string,
        "acctcode": any,
        "acctmessage": any,
        "paymenttype": string,
        "paymentid": string,
        "fraudstatus": string,
        "chargetype": string,
        "createdday": number,
        "createddayname": string,
        "createdweek": number,
        "createdmonth": number,
        "createdmonthname": string,
        "createdquarter": number,
        "createdyear": number,
        "createdyearisleap": boolean,
        "createddayispublicholiday": number,
        "createdhour": number,
        "createdminute": number,
        "createdpmam": string,
        "created": string,
        "customerid": number,
        "custphone": any,
        "custnetworkprovider": string,
        "custname": string,
        "custemail": string,
        "custemailprovider": string,
        "custcreated": string,
        "accountid": number,
        "acctbusinessname": string,
        "acctcontactperson": string,
        "acctcountry": string,
        "acctbearsfeeattransactiontime": number,
        "acctparent": number,
        "acctvpcmerchant": number,
        "acctalias": string,
        "acctisliveapproved": number,
        "orderref": string,
        "paymentplan": any,
        "paymentpage": any,
        "raveref": string,
        "meta": [
            {
                "id": number,
                "metaname": string,
                "metavalue": string,
                "createdAt": string,
                "updatedAt": string,
                "deletedAt": any,
                "getpaidTransactionId": number
            }
        ]
    }
}

interface StatusXqequeryRequest {
    flwref?: string,
    txref?: string,
    last_attempt?: string,
    only_successful?: string,
}

interface Account {
    charge(data: AccountChargeRequest)
    validate(data: AccountValidateRequest)
}

interface AccountChargeRequest {
    currency?: string,
    country?: string,
    amount: string,
    phonenumber?: string,
    billingzip?: string,
    email: string,
    firstname?: string,
    lastname?: string,
    IP?: string,
    narration?: string,
    txRef: string,
    meta?: any,
    pin?: string,
    bvn?: string,
    charge_type?: string,
    device_fingerprint: string,
    accountbank: string,
    accountnumber: string,
    payment_type?: string,
    is_internet_banking?: any,
    include_integrity_hash?: any
}

interface AccountValidateRequest {
    otp: string | number,
    transactionreference: string
}

interface TokenCharge {
    card(data: TokenChargeCardRequest): AxiosResponse<TokenChargeCardResponse>
    account(data: TokenChargeCardRequest): AxiosResponse<TokenChargeCardResponse>
}

interface TokenChargeCardRequest {
    token: string,
    currency: string,
    country?: string,
    amount: string,
    email: string,
    firstname?: string,
    lastname?: string,
    IP?: string,
    narration?: string,
    txRef: string,
    meta?: string,
    device_fingerprint?: string,
    payment_plan?: string,
    subaccounts?: []
}

interface TokenChargeCardResponse extends BaseResponse {
    data: {
        "txid": number,
        "txref": string,
        "flwref": string,
        "devicefingerprint": string,
        "cycle": string,
        "amount": number,
        "currency": string,
        "chargedamount": number,
        "appfee": number,
        "merchantfee": number,
        "merchantbearsfee": number,
        "chargecode": string,
        "chargemessage": string,
        "authmodel": string,
        "ip": string,
        "narration": string,
        "status": string,
        "vbvcode": string,
        "vbvmessage": string,
        "authurl": string,
        "acctcode": any,
        "acctmessage": any,
        "paymenttype": string,
        "paymentid": string,
        "fraudstatus": string,
        "chargetype": string,
        "createdday": number,
        "createddayname": string,
        "createdweek": number,
        "createdmonth": number,
        "createdmonthname": string,
        "createdquarter": number,
        "createdyear": number,
        "createdyearisleap": false,
        "createddayispublicholiday": number,
        "createdhour": number,
        "createdminute": number,
        "createdpmam": string,
        "created": string,
        "customerid": number,
        "custphone": string,
        "custnetworkprovider": string,
        "custname": string,
        "custemail": string,
        "custemailprovider": string,
        "custcreated": string,
        "accountid": number,
        "acctbusinessname": string,
        "acctcontactperson": string,
        "acctcountry": string,
        "acctbearsfeeattransactiontime": number,
        "acctparent": number,
        "acctvpcmerchant": string,
        "acctalias": string,
        "acctisliveapproved": number,
        "orderref": string,
        "paymentplan": any,
        "paymentpage": any,
        "raveref": string,
        "amountsettledforthistransaction": number,
        "card": {
            "expirymonth": string,
            "expiryyear": string,
            "cardBIN": string,
            "last4digits": string,
            "brand": string,
            "card_tokens": {
                "embedtoken": string,
                "shortcode": string,
                "expiry": string
            }[],
            "life_time_token": string
        }
    }
}

interface MobileOptions {
    chargeUssd(data: MobileOptionsChargeUssdRequest): AxiosResponse<MobileOptionsChargeUssdResponse>
}

interface MobileOptionsChargeUssdRequest {
    currency: string,
    country: string,
    payment_type?: string,
    amount: string,
    email: string,
    phonenumber?: string,
    firstname?: string,
    lastname?: string,
    IP?: string,
    txRef: string,
    orderRef: string,
    is_ussd: string,
    device_fingerprint?: string
}

interface MobileOptionsChargeUssdResponse extends BaseResponse {
    data: {
        data: {
            amount: string,
            type: string,
            redirect: boolean,
            note: string,
            transaction_date: string,
            transaction_reference: string,
            flw_reference: string,
            redirect_url: any,
            payment_code: string,
            type_data: string,
            meta_data: any
        },
        response_code: string,
        response_message: string
    }
}

interface Misc {
    getFee(data: MiscGetFeeRequest)
    getBalHist(data: MiscGetBalHistRequest)
    getBanks(data: MiscGetBanksRequest)
    disburse(data: MiscDisburseRequest)
    getBalance(data: MistGetBalanceRequest)
    exchange_rates(data: MiscExchangeRatesRequest)
    list_transactions(data: MiscListTransactionsRequest)
}

interface MiscGetFeeRequest {
    amount: string | number,
    card6?: any,
    ptype?: any,
    currency?: string
}

interface MiscGetBalHistRequest {
    currency: string,
    from: string,
    to: string,
    page: string,
}

interface MiscGetBanksRequest {
    __n?: string,
}

interface MiscDisburseRequest {
    bank_code: string,
    account_number: string,
    currency: string,
    amount: string,
}

interface MistGetBalanceRequest {
    service: string,
    service_method: string,
    service_version: string,
    service_channel: string,
}

interface MiscExchangeRatesRequest {
    service: string,
    service_method: string,
    service_version: string,
    service_channel: string,
    service_channel_group: string,
    service_payload: string
}

interface MiscListTransactionsRequest {
    seckey?: string,
    from?: string,
    to?: string,
    page?: string,
}

interface Preauth {
    preauth(data: PreauthPreauthRequest)
    void(data: PreauthVoidRequest): AxiosResponse<PreauthVoidRespone>
    refund(data: PreauthVoidRequest): AxiosResponse<PreauthVoidRespone>
    captureCard(data: PreauthCaptureCardRequest)
}

interface PreauthPreauthRequest {
    cardno: string | number,
    currency?: string,
    suggested_auth?: string,
    country?: string,
    settlement_token?: string,
    cvv: string | number,
    amount: string | number,
    phonenumber?: string | number,
    billingzip?: string | number,
    expiryyear: string | number,
    expirymonth: string | number,
    email: string,
    firstname?: string,
    lastname?: string,
    IP: string,
    narration?: string,
    txRef: string,
    meta?: any
    pin?: string | number,
    bvn?: string | number,
    charge_type: string,
    device_fingerprint?: string,
    recurring_stop?: string,
    include_integrity_hash?: string,
}

interface PreauthVoidRequest {
    id?: string,
    ref?: string,
    amount?: string,
    action?: string,
}

interface PreauthVoidRespone {
    "data": {
        "data": {
            "responsecode": string,
            "redirecturl": any,
            "avsresponsemessage": any,
            "avsresponsecode": any,
            "authorizeId": string,
            "responsemessage": string,
            "otptransactionidentifier": any,
            "transactionreference": string,
            "responsehtml": any,
            "responsetoken": any
        },
        "status": string
    }
}

interface PreauthCaptureCardRequest {
    flwRef: string,
    amount?: string,
}

interface security {
    getEncryptionKey(seckey: string): string
    encrypt(key: string, text: string): string
    getIntegrityHash(data: any, pubKey: string, seckey: string): string
}