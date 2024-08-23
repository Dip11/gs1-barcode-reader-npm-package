export interface IParseResult {
    codeName: string;
    parsedCodeItems: [
      {
        ai: string;
        data: string | Date;
        dataString?: string;
        dataTitle: string;
        unit: string;
      },
    ];
    originalString: string;
  }