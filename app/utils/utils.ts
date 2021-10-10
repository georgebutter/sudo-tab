import * as Link from "../components/Tiles/Link";
import * as Search from "../components/Tiles/Search";
import * as Sticky from "../components/Tiles/Sticky";
import * as RSS from "../components/Tiles/RSS";
import * as Countdown from "../components/Tiles/Countdown";
import * as SquareBreathing from "../components/Tiles/SquareBreathing";
import { SettingsSchema, TileSchemaMap } from "../types";

export const isLightColor = (bgColor: string): boolean => {
  const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  const uicolors = [r / 255, g / 255, b / 255];
  const c = uicolors.map((col) => col <= 0.03928 ? col / 12.92 : Math.pow((col + 0.055) / 1.055, 2.4));
  return ((0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2])) > 0.179;
}

export const getTileSettingsSchema = (type: keyof TileSchemaMap): Array<SettingsSchema> => {
  const tileSchemaMap: TileSchemaMap = {
    Link: Link.schema,
    Search: Search.schema,
    Sticky: Sticky.schema,
    RSS: RSS.schema,
    Countdown: Countdown.schema,
    SquareBreathing: SquareBreathing.schema,
  }
  return tileSchemaMap[type]
}

