import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'weui-flex-setting',
    templateUrl: './weui-flex-setting.html',
    styleUrls: ['./weui-flex-setting.scss']
})
export class WeuiFlexSettingComponent extends ReactComponent<any, any> {
    @ViewChild('width') width: ElementRef;
    @ViewChild('height') height: ElementRef;

    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    ngOnInit() {
        const width = parseInt(this.props.width);
        this.width.nativeElement.value = width;

        const height = parseInt(this.props.width);
        this.height.nativeElement.value = height;
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
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
        if (this.instance) {
            const ele = this.instance.ele.nativeElement;
            this.setStyle(this.props.style, ele);
        }
    }
}
