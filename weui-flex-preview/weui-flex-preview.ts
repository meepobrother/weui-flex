import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener,
    HostBinding
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiFlexProps {
    children: any[];
}
@Component({
    selector: 'weui-flex-preview',
    templateUrl: './weui-flex-preview.html',
    styleUrls: ['./weui-flex-preview.scss']
})
export class WeuiFlexPreviewComponent extends ReactComponent<WeuiFlexProps, any> {
    @HostBinding('class.weui-flex') _flex: boolean = true;
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
