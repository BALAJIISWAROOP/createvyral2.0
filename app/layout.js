import './globals.css';

export const metadata = {
    title: 'Create Vyral - Your Backstage Team for Vyral Content',
    description: 'Create Vyral helps Indian creators grow faster by handling editing, shoots, content planning, and backend work at an affordable monthly subscription.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700;800&family=Lato:wght@400;700;900&family=Outfit:wght@700;900&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </head>
            <body>
                {children}
                <script src="/js/main.js" defer></script>
            </body>
        </html>
    );
}
