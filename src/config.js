const dev = {
    s3: {
        REGION: "us-west-2",
        BUCKET: "bad-notes-app-api-dev-attachmentsbucket-vzos1yg3mb18"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://hp8rvgiif7.execute-api.us-west-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_xLUyzCXEH",
        APP_CLIENT_ID: "6kmqadvtds5dka3cbo2ep74dnp",
        IDENTITY_POOL_ID: "us-west-2:8269503e-4ad8-4b5e-99dc-3817ff41e02e"
    }
};

const prod = {
    s3: {
        REGION: "us-west-2",
        BUCKET: "bad-notes-app-api-prod-attachmentsbucket-124wr34uesbwl"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://1b0r82ebog.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_ZgE2TeijA",
        APP_CLIENT_ID: "44kkdrc4mvd57is5fclepbcken",
        IDENTITY_POOL_ID: "us-west-2:b7637721-a4da-4566-b90d-41d3a7383b54"
    }
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
