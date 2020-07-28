"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    accessRole: [
        {
            path: "/api/Auth",
            methods: [
                {
                    method: "post",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "put",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "delete",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "get",
                    roles: ["Admin", "Manager", "User"],
                },
            ],
        },
        {
            path: "/api/User",
            methods: [
                {
                    method: "post",
                    roles: ["Admin"],
                },
                {
                    method: "put",
                    roles: ["Admin"],
                },
                {
                    method: "delete",
                    roles: ["Admin"],
                },
                {
                    method: "get",
                    roles: ["Admin", "Manager"],
                },
            ],
        },
        {
            path: "/api/Group",
            methods: [
                {
                    method: "post",
                    roles: ["Admin"],
                },
                {
                    method: "put",
                    roles: ["Admin"],
                },
                {
                    method: "delete",
                    roles: ["Admin"],
                },
                {
                    method: "get",
                    roles: ["Admin", "Manager", "User"],
                },
            ],
        },
        {
            path: "/api/Role",
            methods: [
                {
                    method: "post",
                    roles: ["Admin"],
                },
                {
                    method: "put",
                    roles: ["Admin"],
                },
                {
                    method: "delete",
                    roles: ["Admin"],
                },
                {
                    method: "get",
                    roles: ["Admin"],
                },
            ],
        },
        {
            path: "/api/Work",
            methods: [
                {
                    method: "post",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "put",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "delete",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "get",
                    roles: ["Admin", "Manager", "User"],
                },
            ],
        },
        {
            path: "/api/Notification",
            methods: [
                {
                    method: "post",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "put",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "delete",
                    roles: ["Admin", "Manager", "User"],
                },
                {
                    method: "get",
                    roles: ["Admin", "Manager", "User"],
                },
            ],
        },
    ],
    apiLink: {
        basic: {
            role: {
                getById: "/api/Role/:id",
                main: "/api/Role",
            },
            user: {
                getById: "/api/User/:id",
                main: "/api/User",
            },
            group: {
                getById: "/api/Group/:id",
                main: "/api/Group",
            },
            work: {
                getById: "/api/Work/:id",
                main: "/api/Work",
            },
            notification: {
                getById: "/api/Notification/:id",
                main: "/api/Notification",
            },
        },
        extra: {
            auth: {
                main: "/api/Auth",
                token: "/api/Auth/Token",
                password: "/api/Auth/Password",
                avatar: "/api/Auth/Avatar",
            },
        },
        endPoint: "https://work-management-10061997.appspot.com",
    },
    database: {
        config: {
            development: {
                username: "root",
                password: "123456cb",
                database: "workmanagement",
                host: "localhost",
                dialect: "mysql",
                operatorsAliases: false,
            },
            test: {
                username: "root",
                password: "123456cb",
                database: "workmanagement",
                host: "localhost",
                dialect: "mysql",
                operatorsAliases: false,
            },
            production: {
                username: "root",
                password: "123456cb",
                database: "workmanagement",
                host: "34.87.100.202",
                dialect: "mysql",
            },
        },
    },
    firebase: {
        databaseURL: "https://work-management-10061997.firebaseio.com",
        bucketUrl: "work-management-10061997",
        linkDownloadFile: "https://storage.cloud.google.com/work-management-10061997/",
        account: {
            type: "service_account",
            project_id: "work-management-10061997",
            private_key_id: "ef117febcbabaf4eaef424312c9332cac0ca0033",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCwQ6kByW4FULN+\nbHiPFlRai3hrL54CsFHUdh1vZAANVcRa8lA9AJevB5DOMlHmn0ovnonIllOJNqIB\nbVujbMzkQdh+k6pVemX5VEG/GjfsF0R9hHS+qUFhmqwCeebwsnhxNjRNaXuBUiwP\nfZe4I6vFh1nQYdFnojHTxSpLPMS9iohJyDLj6V9r8WGNEdSSz/TP0pP9ZvbFaRdB\nalP3MFMfxxOGXhIGi8iZdZqIgMy4WJ32xF0pbRI5czEV45eTy9vLmdnH1LQww9GQ\nlUDJVy23Q4shTaUKgUTIv0Hm3kuK5GXDFJwc1of+MC/ALU7PImtEsgK8w3QH25R1\nCKw9l+sjAgMBAAECggEARHDRI995t9ihCXrGyRBriojTJhNkMDkUXQHL5h+XIZZm\n2sVxwG4Fd7HhWR8SzBCXtqvBZkBwiTvMZe93gJpTaGHk1SkzH2OaStiber+MbUCP\nmIkg55NCzspG9eMtd9Jkj9jzMAfAK/OjJhSnH5nCLb2jcxU4QRwqascI6BPddJa5\n2vhYwg6SsmaCqN436Ze+IpBnUH6Hw0JNZrvAa8hmKN928Qv++ibnvgmKc3v4E3Jv\nWzdlCjkrWrs88QDqmJ6OTEkYg6pYP7C6wSrqjyyhasFEW9Bk5cXCJcSksYHn1W+H\n/lW8KKWzkumGgEPDkcvNeGYCeveiPUYHlVTPlg7a8QKBgQD4gt0AtQjcAdaFQg+e\nbP0u3Sjx6DB76b5fTo/gVdyPLDOL3vDJ5TFeVK2pvVIkwAyPCtHeX/PzkWXsTihl\nnKM5ZjRbUcUVXHJn4azVp0yQ2HYZ2/PDm2nrmWSjHf8hfok1fx4gcgvJDC5cBN5j\nJfr9u8+2MRGsNLgLQy7WZDYfqQKBgQC1k3L4X6KV73hMYQ01ndBcjhDmy2c6i7p8\ndnfpRJWwpLLZU7ebEIDvt4D7S9Ov1S6f1MqVi/5cPEgk0RatCR/kl+JfUUMzFceL\nXZXMJFApm4svclo+5A295D9IQYly1HA4Tgu5n6WSTWmVQqojKrmEsOsfef9fSnq3\n6Qq1UObj6wKBgBxGv6DR+IUYDHGzN5W+LvzDG2KTGdkvmoK7rLFI88SysdbLcjh2\nxKxIFE6JBSy7UXKBN6oG3voq5B8EMaKGNShV0cVGQ5ePolDho8nXtGWSy7VbipwK\nNf4hwQqyYhJMlI4qvaHReDfTE/9San97ldiDIzpG0Qz4HqzhYxXv5xypAoGAGUo4\nMS/gzVFVSA4ccONSKhH/eKXL8vOTPdKiUPMkhj3qSyrF3+skij7c0CN3kH34yHoy\n3TFqdB5RTg9xQRiMQKKG/Q+sdGkMKfUW8B/+qkznzev3ddr9rv0jc0Tth/jeyHjW\nWTxLK11s30UxvUQuIrUhinjLgNI21Xa37xkdj5ECgYB6ix3ZzdKwE7N1OSvZIp8R\n4ARh01c023Co2b27ORP2u5K20qallpFzChYCZNwPj0KEixP8g/ltC7M7ZjPTyJbm\nBLH9bZU7lgiHl2/dZVboT8CFg8JCfJl8hejeMnmMlzGzWfIx9e1dO+R5n0DB6bJs\nDIvwGh85TrD4vbL/ctSydw==\n-----END PRIVATE KEY-----\n",
            client_email: "firebase-adminsdk-u2f0o@work-management-10061997.iam.gserviceaccount.com",
            client_id: "108088235947280737804",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-u2f0o%40work-management-10061997.iam.gserviceaccount.com",
        },
    },
    jwt: {
        code: "vzicqoasanQhtZicTmeGsBpacNomny",
        issue: "work-management",
        subject: "analalayker@gmail.com",
    },
};
//# sourceMappingURL=environment.js.map