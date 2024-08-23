import { IParseResult } from "./interfaces/IPasrseResult";
import { parseBarcode } from "./utils/gs1-barcode-parser";

export function gs1StringParsedValue(gs1String: string): IParseResult | undefined {
  try {
    let res: IParseResult = parseBarcode(gs1String) as unknown as IParseResult;
    return res;
  } catch (error) {
    console.log(error);
  }
}
