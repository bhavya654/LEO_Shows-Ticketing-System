import { config as conf } from 'dotenv';
conf();

const normalizeEnv = (value?: string) => value?.trim() || "";
const normalizePassword = (value?: string) => value?.replace(/\s/g, "") || "";

const _config = {
    port: normalizeEnv(process.env.PORT),
    databaseUrl: normalizeEnv(process.env.MONGO_CONNECTION_STRING) as string,
    accessTokenSecret: normalizeEnv(process.env.ACCESS_TOKEN_SECRET) as string,
    refreshTokenSecret: normalizeEnv(process.env.REFRESH_TOKEN_SECRET) as string,
    hashingSecret: normalizeEnv(process.env.HASH_SECRET) as string,
    emailUsername: normalizeEnv(process.env.EMAIL_USERNAME) as string,
    emailPassword: normalizePassword(process.env.EMAIL_PASSWORD) as string,
    redisHost: normalizeEnv(process.env.REDIS_HOST) as string,
    redisPort: parseInt(normalizeEnv(process.env.REDIS_PORT) || "6379"),
    razorpayKey : normalizeEnv(process.env.RAZORPAY_API_KEY) as string,
    razorpaySecret : normalizeEnv(process.env.RAZORPAY_SECRET_KEY) as string,
    databaseReplicaSet: normalizeEnv(process.env.MONGO_REPLICA_STRING) || normalizeEnv(process.env.MONGO_CONNECTION_STRING) as string,
}

export const config = Object.freeze(_config);