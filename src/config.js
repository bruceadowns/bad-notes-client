export default {
    s3: {
        REGION: "us-west-2",
        BUCKET: "bad-notes-bucket"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://nw1yfrnwka.execute-api.us-west-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_8lLVQ3jR5",
        APP_CLIENT_ID: "27abbcfai46vlqar56rq4qq31a",
        IDENTITY_POOL_ID: "us-west-2:05ec34ca-9092-4707-a6c5-4fbc1c63f94c"
    },
    MAX_ATTACHMENT_SIZE: 5000000
};
