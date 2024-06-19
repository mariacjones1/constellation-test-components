/// <reference types="react" />
import type { PConnFieldProps } from './PConnProps';
interface CtsCtsTestCurrencyProps extends PConnFieldProps {
    displayAsStatus?: boolean;
    isTableFormatter?: boolean;
    hasSuggestions?: boolean;
    variant?: any;
    formatter: string;
    decimalPrecision: string;
    allowDecimals: boolean;
    currencyISOCode: string;
    alwaysShowISOCode: boolean;
    additionalProps: any;
    showGroupSeparators: boolean;
    currencyDisplay: 'symbol' | 'code' | 'name' | undefined;
    negative: 'minus-sign' | 'parentheses' | undefined;
    notation: 'standard' | 'compact' | undefined;
    currencyDecimalPrecision: string;
}
declare const _default: (props: CtsCtsTestCurrencyProps) => JSX.Element;
export default _default;
//# sourceMappingURL=index.d.ts.map