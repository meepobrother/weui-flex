import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponentSetting } from 'ng-react-component';
import { ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'weui-flex-setting',
    templateUrl: './weui-flex-setting.html',
    styleUrls: ['./weui-flex-setting.scss']
})
export class WeuiFlexSettingComponent extends ReactComponentSetting<any, any> {
    @ViewChild('width') width: ElementRef;
    @ViewChild('height') height: ElementRef;

    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2,
        fb: FormBuilder
    ) {
        super(_differs, _ele, _render, fb);
    }

    ngOnInit() {
        this.initStyleForm();
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
