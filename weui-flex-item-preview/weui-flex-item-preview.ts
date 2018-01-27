import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener,
    HostBinding
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiFlexItemProps {
    isItem: boolean;
    children: any[];
}
@Component({
    selector: 'weui-flex-item-preview',
    templateUrl: './weui-flex-item-preview.html',
    styleUrls: ['./weui-flex-item-preview.scss']
})
export class WeuiFlexItemPreviewComponent extends ReactComponent<WeuiFlexItemProps, any> {
    @HostBinding('class.weui-flex__item') _item: boolean = true;
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
