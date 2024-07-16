declare class CMC7Validator {
  dv1: string | undefined;
  dv2: string | undefined;
  dv3: string | undefined;
  group1: string | undefined;
  group2: string | undefined;
  group3: string | undefined;
  constructor(code: string);
  isValid(): boolean;
}

export default CMC7Validator;
