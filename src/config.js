const dev = {
    s3: {
        REGION: "us-west-2",
        BUCKET: "bad-notes-app-api-dev-attachmentsbucket-z4xeplpm0w1n"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://79r1ceeuld.execute-api.us-west-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_9ituyYeal",
        APP_CLIENT_ID: "6u89sh6ee8oi0cha6ouerj1j3s",
        IDENTITY_POOL_ID: "us-west-2:31e781cb-f306-4523-bf68-eed8eb2fd846"
    },
    STRIPE_KEY: "pk_test_fGVCeznEnVhzLuYmqwBV8O3m",
};

const prod = {
    s3: {
        REGION: "",
        BUCKET: ""
    },
    apiGateway: {
        REGION: "",
        URL: ""
    },
    cognito: {
        REGION: "",
        USER_POOL_ID: "",
        APP_CLIENT_ID: "",
        IDENTITY_POOL_ID: ""
    },
    STRIPE_KEY: "",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};
