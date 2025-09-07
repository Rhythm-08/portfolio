import { Component, inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from '../services/message.service';
import { Analytics } from '@angular/fire/analytics';
import { logEvent } from 'firebase/analytics';
@Component({
  selector: 'app-contact-us',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit{
  contactForm!: FormGroup;
  isSubmitting = false;

  private formBuilder = inject(FormBuilder);
  private toastr = inject(ToastrService);
  private messageService = inject(MessageService);
  private analytics = inject(Analytics);

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }


  // Getter methods
  get fullName() { return this.contactForm.get('fullName'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      try{
        await this.messageService.saveMessage({
          fullName: this.fullName?.value,
          email: this.email?.value,
          message: this.message?.value
        });
        logEvent(this.analytics, 'contact_form_submission',{
          name: this.fullName?.value,
          email: this.email?.value
        })
        this.showSuccessToast();
        this.contactForm.reset();
        this.isSubmitting = false;

      }catch (error) {
        const message = "Error saving message."
        console.error(message, error);
        this.showErrorToast(message);
      }
    } else {
      this.markFormGroupTouched();
      this.showErrorToast();
    }
  }


  private showSuccessToast(): void {
    this.toastr.success('Thank you for your message! I\'ll get back to you soon.', 'Message Sent');
  }

  private showErrorToast(message?:string): void {
    this.toastr.error(message || 'Please fill in all required fields correctly.', 'Form Error');
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field && field.errors && (field.dirty || field.touched)) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return `${this.getFieldLabel(fieldName)} must be at least ${requiredLength} characters`;
      }
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      fullName: 'Full Name',
      email: 'Email Address',
      message: 'Message'
    };
    return labels[fieldName] || fieldName;
  }


}
