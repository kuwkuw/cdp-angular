import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { CONUTRY_LIST, CountryList } from '../../../core';
import { CustomValidators } from '../../../shared/validators/custom.validators';
import { OrderService } from '../../../core';
import { CartService } from '../../../cart/services';

@Component({
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit, OnDestroy {

  countries: Array<string>;
  orderForm: FormGroup;
  validationMessages: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };

  get phones(): FormArray {
    return this.orderForm.get('phones') as FormArray;
  }

  private sub: Subscription;
  private validationMessagesMap = {
    firstName: {
      required: 'Please enter your first name.',
      minlength: 'The first name must be longer than 3 characters',
      customNameIsNotOleh: 'Your first name can\'t be Oleh.'
    },
    lastName: {
      maxlength: 'The last name must be not longer than 20.'
    },
    email: {
      required: 'Please enter your email address.',
      pattern: 'Please enter a valid email address.',
      email: 'Please enter a valid email address.',
      customEmailValidator:
        'This oleh.kushch@outlookc.com email address restricted.'
    },
    phone: {
      required: 'Please enter your phone number.'
    }
  };

  constructor(
    @Inject(CONUTRY_LIST) private countryList: CountryList,
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.countries = this.countryList.countries;
    this.buildForm();
    this.resetValidationsMessaegs();
    this.watchValueChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSave() {
    this.orderService.addOrder(this.cartService.cartItemList, this.orderForm.value);
   }

  onAddPhone() {
    this.phones.push(this.fb.group({phone: ''}));
   }

  private buildForm() {
    this.orderForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), CustomValidators.customNameIsNotOleh]],
      lastName: ['', [Validators.maxLength(20)]],
      email: [
        '',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.email]
      ],
      sendProducts: true,
      city: '',
      zipCode: '',
      address: '',
      phones: this.fb.array([this.fb.group({phone: ''})])
    });
  }

  private watchValueChanges() {
    const controlsUnderValidation = ['firstName', 'lastName', 'email'];
    controlsUnderValidation.forEach(controlName => {
      const control = this.orderForm.get(controlName);
      const sub = control.valueChanges
        .pipe(
          debounceTime(1000)
        )
        .subscribe((value) => {
          this.setValidationMessage(control, controlName);
        });
      if (!this.sub) {
        this.sub = sub;
      } else {
        this.sub.add(sub);
      }
    });
  }

  private resetValidationsMessaegs() {
    this.validationMessages = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
  }

  private setValidationMessage(control: AbstractControl, controlName: string) {
    if ((control.touched || control.dirty) && control.errors) {
      this.validationMessages[controlName] = Object.keys(control.errors)
        .map(key => this.validationMessagesMap[controlName][key])
        .join(' ');
    }
  }

}
