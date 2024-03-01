import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CheckoutService } from '@features/checkout/services/checkout.service';
import { CartStore } from '@shared/store/shopping-cart.store';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './checkout.component.html',
})
export default class CheckoutComponent {
  cartStore = inject(CartStore);

  private readonly _checkoutSvc = inject(CheckoutService);

  onProceedToPay(): void {
    this._checkoutSvc.onProceedToPay(this.cartStore.products());
  }

  removeItem(id: number): void {
    this.cartStore.removeFromCart(id);
  }

  clearAll(): void {
    this.cartStore.clearCart();
  }
}
