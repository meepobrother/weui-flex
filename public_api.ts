import { WeuiFlexPreviewComponent, WeuiFlexDefault } from './weui-flex-preview/weui-flex-preview';
import { WeuiFlexSettingComponent } from './weui-flex-setting/weui-flex-setting';

import { WeuiFlexItemPreviewComponent, WeuiFlexItemDefault } from './weui-flex-item-preview/weui-flex-item-preview';
import { WeuiFlexItemSettingComponent } from './weui-flex-item-setting/weui-flex-item-setting';

export const both = {
    'weui-flex': {
        setting: WeuiFlexSettingComponent,
        view: WeuiFlexPreviewComponent,
        default: WeuiFlexDefault
    },
    'weui-flex-item': {
        setting: WeuiFlexItemSettingComponent,
        view: WeuiFlexItemPreviewComponent,
        default: WeuiFlexItemDefault
    }
};

export const preview = {
    'weui-flex': WeuiFlexPreviewComponent,
    'weui-flex-item': WeuiFlexItemPreviewComponent
};

export const entrys = [
    WeuiFlexSettingComponent,
    WeuiFlexPreviewComponent,
    WeuiFlexItemSettingComponent,
    WeuiFlexItemPreviewComponent
];

export { WeuiFlexProps } from './weui-flex-preview/weui-flex-preview';
export { WeuiFlexItemProps } from './weui-flex-item-preview/weui-flex-item-preview';

