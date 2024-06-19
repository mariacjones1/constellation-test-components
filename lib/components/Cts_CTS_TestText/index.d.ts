/// <reference types="react" />
import type { PConnFieldProps } from './PConnProps';
interface CtsCtsTestTextProps extends PConnFieldProps {
    isTableFormatter?: boolean;
    formatter: string;
    variant?: any;
}
export declare const formatExists: (formatterVal: string) => boolean;
export declare const textFormatter: (formatter: string, value: string) => any;
declare const _default: (props: CtsCtsTestTextProps) => JSX.Element;
export default _default;
//# sourceMappingURL=index.d.ts.map