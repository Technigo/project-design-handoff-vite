// Function to randomly rotate paw (between -90 and 90 degrees)in background layout
export const getRandomRotation = () => `${Math.floor(Math.random() * 181) - 90}deg`

// Generate a random position for background paw (between .20% and 120%)
export const getRandomPosition = () => `${Math.floor(Math.random() * 140) -20}%`