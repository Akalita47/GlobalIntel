(() => {
    // Basic app state: in-memory stores
    const state = {
        trips: [],
        selectedTripId: null,
        destinations: [
            {
                id: 'paris',
                name: 'Paris',
                country: 'France',
                coordinates: [48.8566, 2.3522],
                description: 'Capital of France, famous for Eiffel Tower.',
                attractions: [
                    'Eiffel Tower', 'Louvre Museum', 'Notre Dame Cathedral'
                ],
                weather: { temp: 18, condition: 'Clear' },
                images: [
                    'https://example.com/path/to/your/image.png', // Ensure this URL is valid
                ],
                ratings: 4.8,
                osintNews: [
                    {
                        id: 'news1',
                        title: 'Surveillance drone spotted near Eiffel Tower',
                        date: '2024-06-01',
                        summary: 'Unidentified drone activity detected near major landmark.',
                        url: '#'
                    },
                    {
                        id: 'news2',
                        title: 'Cybersecurity seminar held in Paris',
                        date: '2024-05-28',
                        summary: 'Experts discuss cyber threats targeting tourists.',
                        url: '#'
                    }
                ]
            },
            // Other destinations...
        ],
        itinerary: {}, // tripId -> array of day objects
    };

    // Your existing code continues...
})();
