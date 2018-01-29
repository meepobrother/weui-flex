import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener,
    HostBinding, OnInit
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiFlexItemProps {
    isItem: boolean;
    children: any[];
    style: any;
    title: string;
}
export class WeuiFlexItemDefault implements WeuiFlexItemProps {
    isItem = true;
    children = [];
    style = {
        [`background-color`]: '#efefef',
        [`color`]: '#fff'
    };
    title = 'flex项目';
}
@Component({
    selector: 'weui-flex-item-preview',
    templateUrl: './weui-flex-item-preview.html',
    styleUrls: ['./weui-flex-item-preview.scss']
})
export class WeuiFlexItemPreviewComponent extends ReactComponent<WeuiFlexItemProps, any> implements OnInit {
    @HostBinding('class.weui-flex__item') _item: boolean = true;
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
