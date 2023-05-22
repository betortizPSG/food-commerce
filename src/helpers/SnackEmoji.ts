export function snackEmoji(name: string) {
  switch (name.toLowerCase()) {
    case 'pizza':
      return '🍕'
    case 'burger':
      return '🍔'
    case 'drink':
      return '🥤'
    case 'ice-cream':
      return '🍦'
    default:
      return '😉🔎'
  }
}
