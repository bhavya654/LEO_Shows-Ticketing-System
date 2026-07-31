"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const normalizeEnv = (value) => value?.trim() || "";
const normalizePassword = (value) => value?.replace(/\s/g, "") || "";
const _config = {
    port: normalizeEnv(process.env.PORT),
    databaseUrl: normalizeEnv(process.env.MONGO_CONNECTION_STRING),
    accessTokenSecret: normalizeEnv(process.env.ACCESS_TOKEN_SECRET),
    refreshTokenSecret: normalizeEnv(process.env.REFRESH_TOKEN_SECRET),
    hashingSecret: normalizeEnv(process.env.HASH_SECRET),
    emailUsername: normalizeEnv(process.env.EMAIL_USERNAME),
    emailPassword: normalizePassword(process.env.EMAIL_PASSWORD),
    redisHost: normalizeEnv(process.env.REDIS_HOST),
    redisPort: parseInt(normalizeEnv(process.env.REDIS_PORT) || "6379"),
    razorpayKey: normalizeEnv(process.env.RAZORPAY_API_KEY),
    razorpaySecret: normalizeEnv(process.env.RAZORPAY_SECRET_KEY),
    databaseReplicaSet: normalizeEnv(process.env.MONGO_REPLICA_STRING) || normalizeEnv(process.env.MONGO_CONNECTION_STRING),
};
exports.config = Object.freeze(_config);
