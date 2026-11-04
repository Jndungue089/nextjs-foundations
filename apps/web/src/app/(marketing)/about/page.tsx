import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about our mission and team',
}

export default function AboutPage() {
    return (
        <div className="max-w-2xl">
            <h1 className="mb-4 font-bold text-3xl">About Us</h1>
            <p className="text-gray-600">
                This page uses the marketing layout. Notice the header and footer
                are defined once in the layout and wrap this content automatically.
            </p>
        </div>
    )
}