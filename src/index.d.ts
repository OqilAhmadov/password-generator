declare module "psg-js" {
  export default class PasswordGenerator {
    constructor(options: {
      uppercase?: boolean;
      lowercase?: boolean;
      numbers?: boolean;
      symbols?: boolean;
      exclude?: string[];
      length?: number;
    });
    generate(): string;
  }
}
