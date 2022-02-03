import { Delimiter } from '../../generators/code-snippet-generators';
import { ConstantsConversionOptions } from '../conversion-options/constant-conversion-options';

export const DEFAULT_CONST_CONVERSION_OPTIONS: ConstantsConversionOptions = {
  fileName: 'my-icons',
  outputDirectory: './dist',
  prefix: 'myIcon',
  srcFiles: ['*.svg'],
  typeName: 'myIcons',
  enumName: 'MyIcons',
  generateType: true,
  generateTypeObject: false,
  generateEnum: false,
  interfaceName: 'MyIcon',
  exportCompleteIconSet: false,
  verbose: false,
  delimiter: Delimiter.SNAKE
};