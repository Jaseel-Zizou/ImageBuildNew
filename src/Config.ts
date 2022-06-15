const dev = {
    hostName: "http://localhost:4376/api/v1",
    NX_IP: "http://localhost:3001"
};

const dit = {
    hostName: "https://core-dit.nxlgw.com:4376/api/v1",
    NX_IP: "d36spl5w3z9i0o.cloudfront.net"
};

const beta = {
    hostName: "https://core-beta.nxlgw.com:4376/api/v1",
    NX_IP: "d36spl5w3z9i0o.cloudfront.net"
};

const prod = {
    hostName: "https://core.metawurks.com:4376/api/v1",
    NX_IP: "d36spl5w3z9i0o.cloudfront.net"
};

const APP_ENV: any = process.env.REACT_APP_NODE_ENV || "dev";

let config

if (APP_ENV === "dev") config = dev
if (APP_ENV === "dit") config = dit
if (APP_ENV === "beta") config = beta
if (APP_ENV === "prod") config = prod

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...config,
};
