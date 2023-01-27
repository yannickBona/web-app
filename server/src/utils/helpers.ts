import { logType } from "./types";

/**
 * Logs a message to the console with the current date & time
 * @param type "info" | "error" | "success"
 * @param text the message to display
 */
export const logMessage = (type: logType, message: string) => {
  let date = new Date();
  console.log(
    date.toLocaleString("it-IT", { timeZone: "Europe/Rome" }),
    type.toUpperCase(),
    `  ${message}`
  );
};
