import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';

@Component({
    selector: 'weui-flex-item-setting',
    templateUrl: './weui-flex-item-setting.html',
    styleUrls: ['./weui-flex-item-setting.scss']
})
export class WeuiFlexItemSettingComponent extends ReactComponent<any, any> {
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    ngOnInit() { }

    onPropsChange() { }

    onStateChange() {

    }

    onChange(name: string, vlaue: string, unit: string) {
        const num = parseInt(vlaue);
        this.setProps({
            ...this.props,
            ...{
                style: {
                    ...this.props.style,
                    ...{
                        [`${name}`]: num < 100 ? num + unit : `100${unit}`
                    }
                }
            }
        });
    }
}
