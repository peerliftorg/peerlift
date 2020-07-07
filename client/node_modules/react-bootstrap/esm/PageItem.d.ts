import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from './helpers';
export interface PageItemProps extends BsPrefixPropsWithChildren {
    style?: any;
    disabled?: boolean;
    active?: boolean;
    activeLabel?: string;
}
declare type PageItem = BsPrefixRefForwardingComponent<'li', PageItemProps>;
declare const PageItem: PageItem;
export default PageItem;
export declare const First: {
    ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }): JSX.Element;
    displayName: string;
};
export declare const Prev: {
    ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }): JSX.Element;
    displayName: string;
};
export declare const Ellipsis: {
    ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }): JSX.Element;
    displayName: string;
};
export declare const Next: {
    ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }): JSX.Element;
    displayName: string;
};
export declare const Last: {
    ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }): JSX.Element;
    displayName: string;
};
