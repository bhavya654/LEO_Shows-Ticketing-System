"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const _config = {
    port: process.env.PORT,
    databaseUrl: process.env.MONGO_CONNECTION_STRING,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    hashingSecret: process.env.HASH_SECRET,
    emailUsername: process.env.EMAIL_USERNAME,
    emailPassword: process.env.EMAIL_PASSWORD,
    redisHost: process.env.REDIS_HOST,
    redisPort: parseInt(process.env.REDIS_PORT || "6379"),
    razorpayKey: process.env.RAZORPAY_API_KEY,
    razorpaySecret: process.env.RAZORPAY_SECRET_KEY,
    databaseReplicaSet: (process.env.MONGO_REPLICA_STRING || process.env.MONGO_CONNECTION_STRING),
};
exports.config = Object.freeze(_config);
