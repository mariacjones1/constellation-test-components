/// <reference types="react" />
import type { PConnFieldProps } from './PConnProps';
interface CtsCtsTestPicklistProps extends PConnFieldProps {
    defaultValue: number;
    isTableFormatter?: boolean;
    hasSuggestions?: boolean;
    variant?: any;
    formatter: string;
    decimalPrecision: string;
    allowDecimals: boolean;
    currencyISOCode: string;
    alwaysShowISOCode: boolean;
    isoCodeSelection: string;
    additionalProps: any;
    datasource: Array<any>;
    listType: string;
    fieldMetadata: any;
    onRecordChange: Function;
}
export declare const formatExists: (formatterVal: string) => boolean;
export declare const textFormatter: (formatter: string, value: any) => any;
export declare const setDefaultValue: (dropdownOptions: Array<any>, pConnect: any, propName: string) => void;
declare const _default: (props: CtsCtsTestPicklistProps) => JSX.Element;
export default _default;
//# sourceMappingURL=index.d.ts.map