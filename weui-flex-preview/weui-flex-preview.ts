import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener,
    HostBinding
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiFlexProps {
    children: any[];
    style: any;
}

export class WeuiFlexDefault implements WeuiFlexProps {
    isItem = true;
    children = [];
    style = {
        width: '100%',
        height: '100px'
    }
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

    ngOnInit() {
        this.setStyle(this.props.style);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
