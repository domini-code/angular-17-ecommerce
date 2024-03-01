import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@envs/environment';
import { Product } from '@shared/models/product.interface';
import { loadStripe } from '@stripe/stripe-js';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CheckoutService {
  private readonly _http = inject(HttpClient);
  private readonly _url = environment.serverURL;

  onProceedToPay(products: Product[]) {
    return this._http
      .post(`${this._url}/checkout`, { items: products })
      .pipe(
        map(async (res: any) => {
          const stripe = await loadStripe(environment.stripeAPIKey);
          stripe?.redirectToCheckout({ sessionId: res.id });
        })
      )
      .subscribe({
        error: (err) => console.error('Error', err),
      });
  }
}
