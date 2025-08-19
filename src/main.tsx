
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { worker } from './mocks/mocks.ts';




const queryClient = new QueryClient()


async function prepare() {
    if (import.meta.env.DEV) {
        await worker.start({
            serviceWorker: {
                url: '/mockServiceWorker.js',
            },
        });
    }
}

prepare().then(() => {
    createRoot(document.getElementById('root')!).render(
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
});
