/**
 * Format a number as a USD price string.
 * e.g. 128 → "$128.00", 8 → "$8.00"
 */
export function formatPrice(amount: number): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    }).format(amount);
}
