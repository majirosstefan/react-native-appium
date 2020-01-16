import path from 'path';

export const ANDROID_DEVICE_NAME = process.env.ANDROID_DEVICE_NAME || 'Nexus_5X_API_24';
export const ANDROID_PLATFORM_VERSION = process.env.ANDROID_PLATFORM_VERSION || '7.0';
export const ANDROID_APPLICATION_PATH = process.env.ANDROID_APPLICATION_PATH || path.resolve(__dirname, '../android/app/build/outputs/apk/release/app-release.apk');

export const DEVICE_TIMEOUT = process.env.DEVICE_TIMEOUT || 90 * 1000;

export const IOS_DEVICE_NAME = process.env.IOS_DEVICE_NAME || 'iPhone SE';
export const IOS_PLATFORM_VERSION = process.env.IOS_PLATFORM_VERSION || '12.1';
export const IOS_APPLICATION_PATH = process.env.IOS_APPLICATION_PATH; // FIXME-RT: Provide a real directory here

export const APPIUM_HOST = process.env.APPIUM_HOST || 'localhost';
export const APPIUM_LOG_LEVEL = process.env.APPIUM_LOG_LEVEL || 'debug';
export const APPIUM_PASSWORD = process.env.APPIUM_PASSWORD || undefined;
export const APPIUM_PORT = process.env.APPIUM_PORT && Number(process.env.APPIUM_PORT) || 4723;
export const APPIUM_USER = process.env.APPIUM_USER || undefined;

export const TARGET_PLATFORM = process.env.TARGET_PLATFORM || 'android';

export const JEST_TIMEOUT = process.env.JEST_TIMEOUT || 180 * 1000;
