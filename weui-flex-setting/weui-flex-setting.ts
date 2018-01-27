import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';

@Component({
    selector: 'weui-flex-setting',
    templateUrl: './weui-flex-setting.html',
    styleUrls: ['./weui-flex-setting.scss']
})
export class WeuiFlexSettingComponent extends ReactComponent<any, any> {
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
