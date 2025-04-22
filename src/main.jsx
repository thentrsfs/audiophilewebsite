import { createRoot } from 'react-dom/client';
import './index.css';
import router from './router';
import { RouterProvider } from 'react-router';
import { StrictMode } from 'react';
import { CartProvider } from './context/CartContext';
import { FormProvider } from './context/FormContext';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<FormProvider>
			<CartProvider>
				<RouterProvider router={router} />
			</CartProvider>
		</FormProvider>
	</StrictMode>
);
