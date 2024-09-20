import { customizeValidator } from "@rjsf/validator-ajv8";
import type { ErrorObject } from "ajv";

const isUrlRegex = /^(http(s)?:\/\/.+\..+|data:.+)$/;
const isHtml = /(.*)$/;
const isCoordinates = /^-?\d+(\.\d+)?,-?\d+(\.\d+)?,-?\d+(\.\d+)?$/;
const isString = (value: any): value is string => typeof value === "string";

const isDatetime = (x: string) => {
  try {
    return !isNaN(new Date(x) as any);
  } catch {
    return false;
  }
};

export const HTML_FORMAT = "html";
export const MAP_FORMAT = "map";
export const RICH_TEXT_FORMAT = "rich-text";
export const CRON_FORMAT = "cron";
export const CSS_FORMAT = "css";
export const UNUSED_PATH_FORMAT = "unused-path";

const baseFormats = {
  "image-uri": isUrlRegex,
  "video-uri": isUrlRegex,
  "datetime": isDatetime,
  "textarea": () => true,
  "icon-select": () => true,
  "color-input": () => true,
  "button-group": () => true,
  "unique-sitename": () => true,
  // TODO: Check
  [MAP_FORMAT]: isCoordinates,
  [HTML_FORMAT]: isHtml,
  [CRON_FORMAT]: isString,
  [CSS_FORMAT]: isString,
  [UNUSED_PATH_FORMAT]: isString,
};

function localize_en(errors: null | ErrorObject[] = []) {
  if (!(errors && errors.length)) return;
  errors.forEach(function (error) {
    let outMessage = "";

    switch (error.keyword) {
      // TODO: Use more of this
      case "pattern": {
        outMessage =
          `The content doesn't match the pattern "${error.params.pattern}".`;
        break;
      }
      case "required": {
        outMessage = "This field is required.";
        break;
      }
      default:
        outMessage = error.message ?? "There was an error.";
    }

    error.message = outMessage;
  });
}

export const validator = customizeValidator({
  customFormats: baseFormats,
}, localize_en);

const originalIsValid = validator.isValid.bind(validator);
validator.isValid = (schema, formData, rootSchema) => {
  const resolveType = formData?.__resolveType;
  const enumArray = schema.properties?.__resolveType?.enum ?? [];

  /**
   * 🦄 Optimization unicorn:
   *
   * When the data has a resolveType, we kind of know which schema
   * it matches or not.
   */
  if (typeof resolveType === "string") {
    return enumArray.includes(resolveType);
  }

  return originalIsValid(schema, formData, rootSchema);
};
